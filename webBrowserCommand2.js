var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

driver.get("http://demoqa.com/frames-and-windows/");

driver.wait(
    until.elementLocated(By.xpath(".//*[@id='tabs-1']/div/p/a")), 
    20000
).then(button => button.click());

driver.close();