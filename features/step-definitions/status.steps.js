import { Then } from "@wdio/cucumber-framework";

import statusPage from "../pageobjects/status.page.js";


const pages = {
  status: statusPage
};

Then(/^I see all my accounts in a table$/, async () => {
    await pages.status.accountsTable.waitForDisplayed({ timeout: 5000 });

    await browser.waitUntil(async () => {
        const rows = await pages.status.rows;
        return rows.length > 0;
    }, {
        timeout: 5000,
        timeoutMsg: 'No se encontraron filas en la tabla de cuentas'
    });

    const rows = await pages.status.rows;
    console.log('Número de filas:', rows.length);

    expect(rows.length).toBeGreaterThan(0);
});

Then(/^I see the balance of each account$/, async () => {
    await pages.status.accountsTable.waitForDisplayed({ timeout: 5000 });

    const balances = await pages.status.balanceColumn;

    expect(balances.length).toBeGreaterThan(0);

    for (const balanceElement of balances) {
        const text = await balanceElement.getText();
        console.log('Balance encontrado:', text);
        const isValid = /\d+(\.\d{1,2})?/.test(text);
        expect(isValid).toBeTruthy();
    }
});
