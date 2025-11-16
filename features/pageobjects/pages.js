import LoginPage from "../pageobjects/login.page.js";
import statusPage from "../pageobjects/status.page.js";
import accountPage from "../pageobjects/account.page.js";
import transferFundsPage from "../pageobjects/transfer.page.js";
import LoanPage from '../pageobjects/loan.page.js';
import BillPayPage from '../pageobjects/billpay.page.js';

const pages = {
  login: LoginPage,
  status: statusPage,
  account: accountPage,
  transferFunds: transferFundsPage,
  loan: LoanPage,
  payment: BillPayPage,
};

export default pages;

