// tests/google.spec.js
const { Builder, By, Key } = require("selenium-webdriver");
const chai = require("chai");
const assert = chai.assert;
const LoginPage = require("./pageObjects/LoginPage");
const DashboardPage = require("./pageObjects/DashboardPage"); // Import if needed

describe("FacturaFacil Login Test", async () => {
    let driver;
    let loginPage;
    let dashboardPage; // Optional

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build(); // Replace 'chrome' with 'firefox' if needed
        loginPage = new LoginPage(driver);
        dashboardPage = new DashboardPage(driver); // Optional
    });

    afterEach(async () => {
        await driver.quit();
    });

    it("should allow successful login", async () => {
        await loginPage.open();
        await loginPage.enterUsername('your_username');
        await loginPage.enterPassword('your_password');
        await loginPage.clickLoginButton();

        // Optional: Verify dashboard page content
        if (dashboardPage) {
            const welcomeText = await dashboardPage.getWelcomeMessage();
            assert.include(welcomeText, 'Bienvenido a FacturaFacil'); // Adjust assertion as needed
        }
    });
});