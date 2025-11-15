import LoginPage from "../pageobjects/login.page.js";
import statusPage from "../pageobjects/status.page.js";
import accountPage from "../pageobjects/account.page.js";
import transferFundsPage from "../pageobjects/transfer.page.js";

const pages = {
  login: LoginPage,
  status: statusPage,
  account: accountPage,
  transferFunds: transferFundsPage,
};

export default pages;
