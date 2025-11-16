import Page from "./page.js";

class BillPayPage extends Page {
    /**
   * define selectors using getter methods
   */

    get inputPayeeName() {
        return $("//input[@name='payee.name']");
    }

    get inputAddress() {
        return $("//input[@name='payee.address.street']");
    }

    get inputCity() {
        return $("//input[@name='payee.address.city']");
    }

    get inputState() {
        return $("//input[@name='payee.address.state']");
    }

    get inputZipCode() {
        return $("//input[@name='payee.address.zipCode']");
    }

    get inputPhone() {
        return $("//input[@name='payee.phoneNumber']");
    }

    get inputAccount() {
        return $("//input[@name='payee.accountNumber']");
    }

    get inputVerifyAccount() {
        return $("//input[@name='verifyAccount']")
    }

    get inputAmount() {
        return $("//input[@name='amount']");
    }

    get selectFromAccount() {
        return $("//select[@name='fromAccountId']");
    }

    get btnSendPayment() {
        return $("//input[@value='Send Payment']");
    }

    get titleBillPayment() {
        return $("//h1[normalize-space()='Bill Payment Service']");
    }

    get paymentCompleteTitle() {
        return $("//h1[normalize-space()='Bill Payment Complete']");
    }

    get paymentCompleteText(){
        return $("//p[contains(text(),'Bill Payment to')]");
    }

    async enterPayeeName(payeeName) {
        await this.inputPayeeName.setValue(payeeName);
    }

    async enterAddress(address) {
        await this.inputAddress.setValue(address);
    }

    async enterCity(city) {
        await this.inputCity.setValue(city);
    }

    async enterState(state) {
        await this.inputState.setValue(state);
    }

    async enterZipCode(zipCode) {
        await this.inputZipCode.setValue(zipCode);
    }

    async enterPhoneNumber(phone) {
        await this.inputPhone.setValue(phone);
    }

    async enterAccountNumber(account) {
        await this.inputAccount.setValue(account);
    }

    async enterVerifyAccountNumber(verifyAccount) {
        await this.inputVerifyAccount.setValue(verifyAccount);
    }

    async enterAmount(amount) {
        await this.inputAmount.setValue(amount);
    }

    async selectFromAccountOption(fromAccount) {
        await this.selectFromAccount.selectByVisibleText(fromAccount);
    }

    async clickSendPaymentBtn() {
        await this.btnSendPayment.click();
    }



    open() {
        return super.open('billpay');
    }
}

export default new BillPayPage();