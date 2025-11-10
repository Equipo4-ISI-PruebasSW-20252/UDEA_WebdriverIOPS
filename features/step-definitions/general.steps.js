import { Given, Then } from "@wdio/cucumber-framework";
import pages from "../pageobjects/pages.js";

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

Given(
  /^I am on the (\w+) page with account id (\w+)$/,
  async (page, accountId) => {
    await pages[page].openAccountActivity(accountId);
  }
);

Then(/^I should see a text saying (.*)$/, async (message) => {
  if (message == "Error!") {
    // invalid username or password
    await expect($(".title")).toBeExisting();
    await expect($(".title")).toHaveTextContaining(message);
  } else {
    // valid username or password
    await expect($(".title")).toBeExisting();
    await expect($(".title")).toHaveTextContaining(message);
  }
});
