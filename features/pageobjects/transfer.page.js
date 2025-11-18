import Page from './page.js';

class TransferFundsPage extends Page {
    get transferFundsLink() {
        return $("//a[normalize-space()='Transfer Funds']");
    }

    get amountInput() {
        return $("//input[@id='amount']");
    }

    get fromAccountDropdown() {
        return $("//select[@id='fromAccountId']");
    }

    get toAccountDropdown() {
        return $("//select[@id='toAccountId']");
    }

    get transferButton() {
        return $("//input[@value='Transfer']");
    }

    get successMessage() {
        return $("//h1[normalize-space()='Transfer Complete!']");
    }

    get transferErrorText() {
    return $("//div[@id='showError']/p[@class='error']"); 
    }

    get errorHeader() {
        return $("//div[@id='showError']/h1[normalize-space()='Error!']");
    }

    get transferErrorText() {
        return $("//div[@id='showError']/p[@class='error']"); 
    }

    async openTransferPage() {
        await this.transferFundsLink.click();
        // Asegurarse de que el formulario esté cargado
        await this.transferButton.waitForDisplayed({ timeout: 5000 });
    }

    async transfer(amount, fromAccountText, toAccountText) {
        await this.amountInput.setValue(amount);
        await this.fromAccountDropdown.selectByVisibleText(fromAccountText);
        await this.toAccountDropdown.selectByVisibleText(toAccountText);
        await this.transferButton.click();
    }
}

export default new TransferFundsPage();
