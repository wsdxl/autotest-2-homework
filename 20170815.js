require('chromedriver');
let webdriver = require('selenium-webdriver');
let By = webdriver.By;
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
driver.manage().window().maximize();
driver.findElement({ id: 'kw' }).sendKeys('音乐');
driver.findElement({ id: 'kw' }).submit();
driver.sleep(5000);
driver.findElement(By.xpath('//*[@id="1"]/h3/a')).click();
driver.getAllWindowHandles().then((handles) => {
    console.log(handles.length);
    driver.switchTo().window(handles[1]).then(() => {
        driver.sleep(5000);
        driver.findElement({ id: 'ww' }).clear();
        driver.findElement({ id: 'ww' }).sendKeys('怒放的生命');
        driver.findElement({ id: 'ww' }).submit();
    })
})