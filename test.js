require('chromedriver');
let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://autowebtest.github.io/add-remove/');
var data=require('./data.yaml');
console.log(data.info);
// var yaml = require('js-yaml');
// var fs = require('fs');
// var data = yaml.safeLoad(fs.readFileSync('./data.yaml', 'utf8'));
// // console.log(data.info);
// //   console.log(data);
// for(var info of data.info){
//      driver.findElement({id:'text'}).sendKeys(info);
//     driver.findElement({id:'text'}).submit();
// }