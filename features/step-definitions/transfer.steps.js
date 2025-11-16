import { When, Then } from "@wdio/cucumber-framework";
import pages from "../pageobjects/pages.js";

When(/^I navigate to the Transfer Funds page$/, async () => {
    await pages.transferFunds.openTransferPage();
});

When(/^I transfer (\d+) from the first account to the second account$/, async (amount) => {
    
    await pages.transferFunds.fromAccountDropdown.$('option:nth-child(2)').waitForExist({ 
        timeout: 10000, 
        message: 'No se encontraron suficientes cuentas de origen para la transferencia.'
    });

    const fromOptions = await pages.transferFunds.fromAccountDropdown.$$('option');
    
    await expect(fromOptions.length).toBeGreaterThanOrEqual(3); 
    
    const fromAccountText = await fromOptions[1].getText();
    const toAccountText = await fromOptions[2].getText();

    await pages.transferFunds.transfer(amount, fromAccountText, toAccountText);
});

Then(/^I should see the transfer confirmation message$/, async () => {
    const confirmationHeader = await $('#rightPanel h1');

    await confirmationHeader.waitForDisplayed({timeout: 5000});
    await expect(confirmationHeader).toHaveTextContaining('Transfer Complete!');
});
