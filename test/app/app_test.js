/**
 * Test for getting started with Selenium.
 */
"use strict";



var webdriver = require("selenium-webdriver");
var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox())
    .build();

browser.get("https://mothermarycomesto.me/about");

// Two different ways to work with promises
// Way 1
// let promise = browser.getTitle();
//
// promise.then(function(title) {
//     console.log(title);
//     console.log("--------------------------");
// });

// Way 2
browser.getTitle().then(function( title ) {
    console.log(title);
    console.log("::::::::::::::::::::::::::::");
});

browser.quit();
