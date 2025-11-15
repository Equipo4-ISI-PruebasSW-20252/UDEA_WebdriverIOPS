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
