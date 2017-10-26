var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

// Open ToolsQA web site
var appUrl = "http://www.DemoQA.com";
driver.get(appUrl);

driver.wait(
    until.elementLocated(By.xpath(".//*[@id='menu-item-374']/a")), 20000
).then(button => button.click());

// Go back to Home Page
driver.navigate().back();

// Go forward to Registration page
driver.navigate().forward();

// Go back to Home page
driver.navigate().to(appUrl);

// Refresh browser
driver.navigate().refresh();

// Close browser
driver.close();