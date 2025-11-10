import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {
  /**
   * define selectors using getter methods
   */

  get title() {
    return $("//h1[normalize-space()='Account Details']");
  }

  get accountDetails() {
    return $("//div[@id='rightPanel']");
  }

  open() {
    return super.open(`activity`);
  }
}

export default new AccountPage();
