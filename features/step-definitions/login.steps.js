import { Given, When, Then } from "@wdio/cucumber-framework";
import pages from "../pageobjects/pages.js";

//LOGIN
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await pages.login.login(username, password);
});

//Disabled Log In button
Then(/^the login button should be disabled$/, async () => {
  const isEnabled = await pages.login.btnSubmit.isEnabled();
  await expect(isEnabled).toBe(false);
});

//Inputs de login existen
Then(/^I should see the username and the password input$/, async () => {
  await expect(pages.login.inputUsername).toBeExisting();
  await expect(pages.login.inputPassword).toBeExisting();
});
