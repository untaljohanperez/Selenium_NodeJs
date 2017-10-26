var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get("http://toolsqa.wpengine.com/automation-practice-form");

driver.wait(
    until.elementsLocated(By.name("sex")), 20000
).then(elements => {
    var isFirstSelected = elements[0].isSelected();
    if (isFirstSelected) 
        elements[1].click();
     else 
        elements[0].click();
});

driver.wait(
    until.elementLocated(By.id("exp-2")), 20000
).then(element => element.click());

driver.wait(
    until.elementsLocated(By.name("profession")), 20000
).then(elements => {
    elements.map(item => {
        item.getAttribute("value").then(value => {
            if (value == "Automation Tester")
                item.click();
        });
    });
});

driver.wait(
    until.elementLocated(By.css("input[value='Selenium IDE']")), 20000
).then(element => element.click());

//driver.quit();
