/**
 * selenium-webdriver 文件上传
 * module 的path用法
 * path.join
 * _dirname 全局变量
 */
require('chromedriver')
let webdriver=require('selenium-webdriver')
let path=require('path');
let driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/')
driver.findElement({css:'.soutu-btn'}).click()

let filepath=path.join(__dirname,'..','01.png')
console.log(filepath)
driver.findElement({css:'.upload-pic'}).sendKeys(filepath);

