require('chromedriver')
let webdriver=require('selenium-webdriver')
let driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://map.baidu.com/');
driver.manage().window().maximize()
driver.findElement({id:'sole-input'}).sendKeys('zhongguo');
driver.sleep(2000)
driver.findElement({css:'#ui3-suggest-scroll > ul > li:nth-child(1)'}).click();
driver.sleep(4000)
driver.findElement({id:'search-button'})
driver.sleep(5000)
driver.findElement({xpath:'//*[@id="card-1"]/div/ul/li[1]/div[1]/div[2]/div[1]/a'}).click();