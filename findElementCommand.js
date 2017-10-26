var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get("http://toolsqa.wpengine.com/Automation-practice-form/"); 

driver.wait(
    until.elementLocated(By.name("firstname")), 20000
).then(element => element.sendKeys("Lakshay"));

driver.wait(
    until.elementLocated(By.name("lastname")), 20000
).then(element => element.sendKeys("Sharma"));

driver.wait(
    until.elementLocated(By.id("submit")), 20000
).then(element => element.click());