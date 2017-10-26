var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

// Storing the Application Url in the String variable
var url = "http://store.demoqa.com/";

driver.get(url);

driver.getTitle().then(title => {
    console.log("Title of the page is : " + title);
    console.log("Length of the title is : " + title.length);
});

driver.getCurrentUrl().then(actualUrl => {
    console.log(actualUrl);
    if (actualUrl == url) {
        console.log("Verification Successful - The correct Url is opened.");
    } else {
        console.log("Verification Failed - An incorrect Url is opened.");
        //In case of Fail, you like to print the actual and expected URL for the record purpose
        console.log("Actual URL is : " + actualUrl);
        console.log("Expected URL is : " + url);
    }
    driver.close();
});

