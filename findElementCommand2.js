var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get("http://toolsqa.wpengine.com/Automation-practice-form/");

driver.wait(
    until.elementLocated(By.partialLinkText("Partial")), 20000
).then(element => element.click());

var sClass = driver.wait(
    until.elementLocated(By.tagName("button")), 20000
).then(element => element.getText())
.then(text => console.log(text));

driver.wait(
    until.elementLocated(By.linkText("Link Test")), 20000
).then(element => element.click());

driver.close();