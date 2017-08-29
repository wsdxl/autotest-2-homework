require('chromedriver')
const webdriver=require('selenium-webdriver')
const driver=new webdriver.Builder().forBrowser('chrome').build()
driver.get('http://192.168.0.107:3000/')
driver.manage().window().maximize()
driver.findElement({linkText:'登录'}).click();
driver.findElement({id:'name'}).sendKeys('abcduxiaolei');
driver.findElement({id:'pass'}).sendKeys('abc4862556');
driver.findElement({css:'.span-primary'}).click();  //登录流程

driver.findElement({id:'create_topic_btn'}).click(); // 发布话题
driver.findElement({id:'tab-value'}).click();
driver.findElement({css:'#tab-value>option:nth-child(2)'}).click() //下拉按钮选择 nth-child(i)
driver.findElement({id:'title'}).sendKeys('大家一起学习');
driver.findElement({css:'.eicon-image'}).click();
driver.findElement({name:'file'}).sendKeys('E://01.png');
driver.sleep(4000);
driver.findElement({css:'.CodeMirror-scroll'}).click();// 进入div大块
let exec=driver.findElement({xpath:'//*[@id="create_topic_form"]/fieldset/div/div/div[2]/div[6]/div[2]'});// div语句块
driver.actions().mouseMove(exec).sendKeys('大家晚上好').perform(); //actions方式
driver.findElement({className:'span-primary submit_btn'}).submit();