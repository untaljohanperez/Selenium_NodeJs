var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

function selectByVisibleText(select, textDesired) {
    select.findElements(By.tagName('option'))
    .then(options => {
        options.map(option => {
            option.getText().then(text => {
                if (text == textDesired)
                    option.click();
            });
        });
    });
}

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get("http://toolsqa.wpengine.com/automation-practice-form");

var select = driver.wait(
    until.elementLocated(By.id("continents")), 20000
);

selectByVisibleText(select, "Africa")

driver.sleep(2000);

selectByVisibleText(select, "Europe")

driver.sleep(2000);

//driver.quit();

