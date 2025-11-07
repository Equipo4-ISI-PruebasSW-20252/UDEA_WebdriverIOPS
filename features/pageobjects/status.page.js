import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StatusPage extends Page {
    /**
     * define selectors using getter methods
     */

    get accountsTable() {
        return $('#accountTable');
    }

    get accountsColumn() {
        return $$('#accountTable tbody tr td:first-child');
    }


    get balanceColumn() {
        return $$('#accountTable tbody tr td:nth-child(2)');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('overview');
    }
}

export default new StatusPage();
