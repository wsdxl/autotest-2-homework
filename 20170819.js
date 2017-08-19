require('chromedriver')
const webdriver = require('selenium-webdriver')
const driver = new webdriver.Builder().forBrowser('chrome').build()
driver.get('https://www.baidu.com/');

const data = require('./data.json');
console.log(data.baidusearch)
const info = data.baidusearch;
for (var value of info) {
    driver.findElement({ id: 'kw' }).clear()
    driver.findElement({ id: 'kw' }).sendKeys(value.key)
    driver.sleep(3000)
    driver.findElement({ id: 'kw' }).submit();
}