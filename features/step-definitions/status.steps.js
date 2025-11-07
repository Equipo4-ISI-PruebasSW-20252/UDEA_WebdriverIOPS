import { Then } from "@wdio/cucumber-framework";

import statusPage from "../pageobjects/status.page.js";


const pages = {
  status: statusPage
};

Then(/^I see all my accounts in a table$/, async () => {
    await pages.status.accountsTable.waitForDisplayed({ timeout: 5000 });
    const rows = await pages.status.rows;
    console.log('Número de filas:', rows.length);

    expect(rows.length).toBeGreaterThan(0);
})