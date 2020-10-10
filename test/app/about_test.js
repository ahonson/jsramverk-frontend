/**
 * Test for getting started with Selenium.
 */
"use strict";

const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;
let browser;

// Does not work with WSL!! Use cygwin

// Test suite
test.describe("MeAppNg", function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("https://mothermarycomesto.me/about");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    function assertH1(target) {
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    // Test case
    test.it("Test about", function(done) {
        let promise = browser.getTitle();

        promise.then(function(title) {
            assert.equal(title, "MeAppNg");
        });

        // browser.getTitle().then(function(title) {
        //     assert.equal(title, "MeAppNg");
        // });

        assertH1("Me-sida för Aron i JSramverk-kursen");
        // matchUrl("#!/");

        done();
    });

    test.it("Test go to reports", function(done) {
        browser.findElement(By.linkText("Länk till rapport 01")).then(function(element) {
            element.click();
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("reports#kmom01"));
        });

        done();
    });
});
