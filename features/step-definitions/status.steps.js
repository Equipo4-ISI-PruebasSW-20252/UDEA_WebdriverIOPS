import { Then, When } from "@wdio/cucumber-framework";

import pages from "../pageobjects/pages.js";

let rightPanel = "";

Then(/^I see all my accounts in a table$/, async () => {
  await pages.status.accountsTable.waitForDisplayed({ timeout: 5000 });

  await browser.waitUntil(
    async () => {
      const rows = await pages.status.rows;
      return rows.length > 0;
    },
    {
      timeout: 5000,
      timeoutMsg: "No se encontraron filas en la tabla de cuentas",
    }
  );

  const rows = await pages.status.rows;
  console.log("Número de filas:", rows.length);

  expect(rows.length).toBeGreaterThan(0);
});

Then(/^I see the balance of each account$/, async () => {
  await pages.status.accountsTable.waitForDisplayed({ timeout: 5000 });

  const balances = await pages.status.balanceColumn;

  expect(balances.length).toBeGreaterThan(0);

  for (const balanceElement of balances) {
    const text = await balanceElement.getText();
    console.log("Balance encontrado:", text);
    const isValid = /\d+(\.\d{1,2})?/.test(text);
    expect(isValid).toBeTruthy();
  }
});

Then(/^I can click over every account$/, async () => {
  await pages.status.accountsTable.waitForDisplayed({ timeout: 5000 });

  await browser.waitUntil(
    async () => {
      const rows = await pages.status.rows;
      return rows.length > 0;
    },
    {
      timeout: 5000,
      timeoutMsg: "No se encontraron filas en la tabla de cuentas",
    }
  );

  const rows = await pages.status.rows;

  await Promise.all(
    rows.map(async (row) => {
      const clickable = await row.isClickable();
      expect(clickable).toBeTruthy();
    })
  );

  await rows[0].click();
});

When(/^I click on a random account$/, async () => {
  await pages.status.accountsTable.waitForDisplayed({ timeout: 5000 });

  await browser.waitUntil(
    async () => {
      const accounts = await pages.status.accountsColumn;
      return accounts.length > 0;
    },
    {
      timeout: 5000,
      timeoutMsg: "No se encontraron cuentas en la tabla",
    }
  );

  const accounts = await pages.status.accountsColumn;

  const randomIndex = Math.floor(Math.random() * accounts.length);
  const randomAccount = accounts[randomIndex];

  await randomAccount.waitForClickable({ timeout: 5000 });
  const accountText = await randomAccount.getText();
  await randomAccount.click();

  console.log(`Clicked on account: ${accountText}`);
});
