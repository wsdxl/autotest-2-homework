require('chromedriver')
var webdriver = require('selenium-webdriver')
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/')
driver.manage().window().maximize();
driver.findElement({ id: 'kw' }).sendKeys('音乐')
driver.findElement({ id: 'kw' }).submit();
driver.sleep(5000)
driver.findElement({ xpath: '//*[@id="1"]/h3/a' }).click();
driver.sleep(5000)
driver.getAllWindowHandles().then((a) => {
    driver.switchTo().window(a[1]).then(() => {
        driver.findElement({ id: 'ww' }).clear()
        driver.findElement({ id: 'ww' }).sendKeys('苏有朋')
        driver.findElement({ id: 'ww' }).submit()
        driver.findElement({xpath:'//*[@id="result_container"]/div[1]/div[1]/ul/li[6]/div/span[7]/span/a[1]'}).click()
    })
})

