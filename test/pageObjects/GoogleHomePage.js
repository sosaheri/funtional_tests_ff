// tests/pageObjects/GoogleHomePage.js
const { By } = require("selenium-webdriver");

class GoogleHomePage {
    constructor(driver) {
        this.driver = driver;
        this.searchInput = By.name('q'); // Replace with actual selector if needed
    }

    async open() {
        await this.driver.get('https://www.google.com/');
    }

    async search(text) {
        await this.driver.findElement(this.searchInput).sendKeys(text);
        await this.driver.findElement(this.searchInput).submit();
    }
}

module.exports = GoogleHomePage;