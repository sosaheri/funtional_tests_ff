// tests/pageObjects/DashboardPage.js
const { By } = require("selenium-webdriver");

class DashboardPage {
    constructor(driver) {
        this.driver = driver;
        this.welcomeMessage = By.css('.welcome-message'); // Example element
    }

    async getWelcomeMessage() {
        return await this.driver.findElement(this.welcomeMessage).getText();
    }
}

module.exports = DashboardPage;