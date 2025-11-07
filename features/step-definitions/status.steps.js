import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from '../pageobjects/login.page.js';
import statusPage from "../pageobjects/status.page.js";


const pages = {
  login: LoginPage,
  status: statusPage
};

Then(/^I see all my accounts in a table$/, async () => {
    const accounts = await pages.status.accountsColumn;
    expect(accounts.length).toBeGreaterThan(0);
})