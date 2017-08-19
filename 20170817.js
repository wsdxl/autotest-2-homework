/**
 * node.js --module fs 简介 filesystem
 * selenium-webdriver  takeScreenshot() 截屏操作
 * fs  地址：https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
 */
require('fs').writeFileSync('01.txt', 'how are you?')
require('chromedriver')
let webdriver = require('selenium-webdriver')
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/')
driver.manage().window().maximize()
driver.takeScreenshot().then((a) => {
    // console.log(a);
    require('fs').writeFileSync('01.png', a, 'base64')
})





