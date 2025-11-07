import { Then } from "@wdio/cucumber-framework";

import statusPage from "../pageobjects/status.page.js";


const pages = {
  status: statusPage
};

Then(/^I see all my accounts in a table$/, async () => {
    const accounts = await pages.status.accountsColumn;
    expect(accounts.length).toBeGreaterThan(0);
})