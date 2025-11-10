import { Given, When, Then } from "@wdio/cucumber-framework";
import pages from "../../pages.js";

//LOGIN
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await pages.LoginPage.login(username, password);
});

//Disabled Log In button
Then(/^the login button should be disabled$/, async () => {
  const isEnabled = await pages.LoginPage.btnSubmit.isEnabled();
  await expect(isEnabled).toBe(false);
});

Given(/^I am logged in correctly$/, async () => {
  await pages.LoginPage.login("john", "demo");
});
