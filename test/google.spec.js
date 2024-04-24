// tests/google.spec.js
const { Builder, By, Key } = require("selenium-webdriver");
const chai = require("chai");
const assert = chai.assert;
const GoogleHomePage = require("./pageObjects/GoogleHomePage");

describe("Google Search Test", async () => {
    let driver;
    let googleHomePage;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build(); // Replace 'chrome' with 'firefox' if needed
        googleHomePage = new GoogleHomePage(driver);
    });

    afterEach(async () => {
        await driver.quit();
    });

    it("should perform a search on Google", async () => {
        await googleHomePage.open();
        await googleHomePage.search("Selenium");
        const title = await driver.getTitle();
        assert.include(title, "Selenium"); // Adjust assertion as needed
    });
});