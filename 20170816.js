/**
 * 模拟鼠标移动操作
 * actions().mouseMove() 鼠标移动
 * perform() 执行
 */

require('chromedriver');
var webdriver=require('selenium-webdriver');
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
var gengduo=driver.findElement({name:'tj_briicon'});
driver.actions().mouseMove(gengduo).perform();
driver.findElement({name:'tj_mp3'}).click();