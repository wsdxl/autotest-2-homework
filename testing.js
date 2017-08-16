require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
driver.findElement({id:"kw"}).sendKeys('ditu');
driver.findElement({id:'su'}).submit();
driver.sleep(3*1000);
// driver.findElement({xpath:'//*[@id="1"]/div[1]/div/div[2]/div[2]/div/div[1]/form/input[2]'}).sendKeys('中国');
driver.findElement({css:''}).sendKeys('中国');