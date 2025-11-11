import { Before } from "@wdio/cucumber-framework";
import pages from "../pageobjects/pages.js";

Before(async () => {
  await browser.reloadSession();
  await pages.login.open();
});
