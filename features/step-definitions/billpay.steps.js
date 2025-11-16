import { Given, When, Then } from "@wdio/cucumber-framework";
import pages from "../pageobjects/pages.js";

When('I navigate to the bill payment page', async () => {
    await pages.payment.open();
});

When(/^I enter payee name "([^"]*)"$/, async (payeeName) => {
    await pages.payment.enterPayeeName(payeeName);
});

When(/^I enter address "([^"]*)"$/, async (address) => {
    await pages.payment.enterAddress(address);
});

When(/^I enter city "([^"]*)"$/, async (city) => {
    await pages.payment.enterCity(city);
});

When(/^I enter state "([^"]*)"$/, async (state) => {
    await pages.payment.enterState(state);
});

When(/^I enter zip code "([^"]*)"$/, async (zipCode) => {
    await pages.payment.enterZipCode(zipCode);
});

When(/^I enter phone number "([^"]*)"$/, async (phone) => {
    await pages.payment.enterPhoneNumber(phone);
});

When(/^I enter account number "([^"]*)"$/, async (account) => {
    await pages.payment.enterAccountNumber(account);
});

When(/^I enter verify account number "([^"]*)"$/, async (verifyAccount) => {
    await pages.payment.enterVerifyAccountNumber(verifyAccount);
});

When(/^I enter payment amount "([^"]*)"$/, async (amount) => {
    await pages.payment.enterAmount(amount);
});

When(/^I select account "([^"]*)"$/, async (fromAccount) => {
    await pages.payment.selectFromAccountOption(fromAccount);
});

When(/^I click the send payment button$/, async () => {
    await pages.payment.clickSendPaymentBtn();
});

Then(/^I should see the payment details with payee "([^"]*)"$/, async (payeeName) => {
    await expect(pages.payment.paymentCompleteText).toBeExisting();
    await expect(pages.payment.paymentCompleteText).toHaveTextContaining(payeeName);
});
