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

        browser.get("https://mothermarycomesto.me/login");
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
    test.it("Test login title and header", function(done) {
        let promise = browser.getTitle();

        promise.then(function(title) {
            assert.equal(title, "MeAppNg");
        });

        assertH1("Login och registrering");
        done();
    });

    // Simulate login failure
    test.it("Test failing login process", function(done) {
        browser.findElement(By.name("email")).then(function(element) {
            element.sendKeys("joe@joe.joe");
        });

        browser.findElement(By.name("password")).then(function(element) {
            // sending wrong password
            element.sendKeys("pass12345");
        });

        browser.findElement(By.css("button")).then(function(element) {
            element.click();
        });

        browser.getCurrentUrl().then(function() {
            // assertH1("Redigera och skapa rapporter");
            assertH1("Login och registrering");
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            console.log("current URL: ", url);
            assert.ok(url.endsWith("login"));
        });

        done();
    });
});
