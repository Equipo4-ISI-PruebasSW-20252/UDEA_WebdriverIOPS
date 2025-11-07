import { Given } from "@wdio/cucumber-framework";

import LoginPage from '../pageobjects/login.page.js';
import statusPage from "../pageobjects/status.page.js";


const pages = {
  login: LoginPage,
  status: statusPage
};


Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});