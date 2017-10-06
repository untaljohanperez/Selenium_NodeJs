var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

runTestWithChrome();
runTestWithFirefox();
runTestWithIE();

function runTestWithChrome() {
    var chromeDriver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    googleSearchTest(chromeDriver);
}

function runTestWithFirefox() {
    var firefoxDriver = new webdriver.Builder()
    .forBrowser('firefox')  
    .build();

    googleSearchTest(firefoxDriver);
}

function runTestWithIE() {
    var IEDriver = new webdriver.Builder()
    .forBrowser('ie')  
    .build();

    googleSearchTest(IEDriver);
}

function helloWorldTest(driver) {
    driver.get("http://www.store.demoqa.com");
    driver.wait(until.titleIs("First Test Case with Selenium WebDriver | Selenium Tutorial"), 400000);
    driver.quit()
}

function googleSearchTest(driver) {
    driver.get('http://www.google.com/ncr');        
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnK')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);    
    driver.quit();
}