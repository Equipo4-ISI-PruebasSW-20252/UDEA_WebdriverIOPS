import { Given, When, Then } from "@wdio/cucumber-framework";
import pages from "../pageobjects/pages.js";

// GIVEN

Given('I am on the Request Loan page', async () => {
    await pages.loan.open();
    await pages.loan.inputLoanAmount.waitForDisplayed();
});

// WHEN

When(/^I request a loan for (\d+) with down payment of (\d+)$/, async (amount, downPayment) => {
    await pages.loan.requestLoan(amount, downPayment);
});

When('I select the first account for fund deposit', async () => {
    await pages.loan.selectFromAccountOption(0);
});

When('I click the apply now button', async () => {
    await pages.loan.btnApplyNow.click();
});

// THEN

Then(/^I should see a loan confirmation message saying "([^"]*)"$/, async (message) => {
    await expect(pages.loan.titleConfirmation).toBeExisting();
    await expect(pages.loan.titleConfirmation).toHaveText(message);
});

Then(/^the loan status should be "([^"]*)"$/, async (expectedStatus) => {
    const actualStatus = await pages.loan.getLoanStatus();
    await expect(actualStatus).toEqual(expectedStatus); 
});
