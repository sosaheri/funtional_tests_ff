// tests/pageObjects/LoginPage.js
const { By } = require("selenium-webdriver");

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameInput = By.id('username');
        this.passwordInput = By.id('password');
        this.loginButton = By.id('login-button');
    }

    async open() {
        await this.driver.get('https://facturafacil.digital/login');
    }

    async enterUsername(username) {
        await this.driver.findElement(this.usernameInput).sendKeys(username);
    }

    async enterPassword(password) {
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.findElement(this.loginButton).click();
    }
}

module.exports = LoginPage;