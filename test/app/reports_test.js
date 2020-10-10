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

        browser.get("https://mothermarycomesto.me/reports");
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
    test.it("Test reports", function(done) {
        let promise = browser.getTitle();

        promise.then(function(title) {
            assert.equal(title, "MeAppNg");
        });

        assertH1("Samtliga redovisningstexter");
        done();
    });

    test.it("Test changing report", function(done) {
        browser.findElement(By.xpath("//input[@value='kmom03']")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Redovisning för kmom03");
            });
        });
        done();
    });
});
