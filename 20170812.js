require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
// for(let i=1;i<=3;i++){
//      driver.get('https://www.baidu.com/');
//      driver.findElement({id:'kw'}).sendKeys('test0'+i);
//      driver.findElement({id:'su'}).click();
// }
let array = ['who', 'are', 'you'];
for (let i=0; i < array.length; i++) {
    driver.get('https://www.baidu.com/');
    driver.findElement({ id: 'kw' }).sendKeys(array[i]);
    driver.findElement({ id: 'su' }).click();
}