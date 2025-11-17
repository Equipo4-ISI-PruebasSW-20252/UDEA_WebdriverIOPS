import Page from "./page.js";

class LoanPage extends Page {
    get inputLoanAmount() {
        return $("//input[@id='amount']");
    }

    get inputDownPayment() {
        return $("//input[@id='downPayment']");
    }

    get selectFromAccount() {
        return $("//select[@id='fromAccountId']");
    }

    get btnApplyNow() {
        return $("//input[@value='Apply Now']");
    }
    
    get titleConfirmation() {
        return $("//h1[normalize-space()='Loan Request Processed']");
    }

    get loanStatus() {
        return $("#loanStatus");
    }

    async requestLoan(amount, downPayment) {
        await this.inputLoanAmount.setValue(amount);
        await this.inputDownPayment.setValue(downPayment);
    }

    async selectFromAccountOption(index) {
        await this.selectFromAccount.selectByIndex(index);
    }

    async getLoanStatus() {
        await this.loanStatus.waitForDisplayed({ timeout: 20000, 
            timeoutMsg: "El estado del préstamo (loanStatus) no se mostró en la página."
        }); 
        await browser.pause(500);
        return await this.loanStatus.getText();
    }

    open() {
        return super.open('requestloan');
    }
}

export default new LoanPage();
