/**
 * require&export
 * 
 */
 function sayHello(user){
    console.log('hello',user)
}
function sayCome(user){
    console.log('welcome',user)
}
module.exports.sayHello=sayHello;
module.exports.sayCome=sayCome;