require('chromedriver');
var webdriver=require('selenium-webdriver');
var driver=new webdriver.Builder().forBrowser('chrome').build();

let path=require('path');
const process=require('child_process')
const exec=path.join(__dirname,'atuoitdemo.exe');
driver.get('https://www.baidu.com/');
driver.findElement({css:'.soutu-btn'}).click();
driver.findElement({css:'.upload-pic'}).click().then(()=>{
    process.execFileSync(exec);
})

