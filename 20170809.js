/**
 * if... esle
 * if...else if...else
 * for
 * do...while
 * switch...case
 */

//  let a=true;
//  if(a){
//     console.log('a true')
//  }else{
//     console.log('a false')
//  }
// let b=1;
// if(b==1){
// console.log('b value is 1');
// }else if(b==2){
//    console.log( 'b value is 2');
// }else{
//     console.log('b value is num')
// }
// let a=1
// for(;a<10;a++){
//     console.log(a)
// }
// let b=0;
// do{
//     console.log('b==',b);
//     b++;
// }while(b<10)

let day = new Date().getDay();
switch (day) {
    case 1:
        console.log('今天是周一');
        break;
    case 2:
        console.log('今天是周二');
        break;
    case 3:
        console.log('今天是周三');
        break;
    case 4:
        console.log('今天是周四');
        break;
    case 5:
        console.log('今天是周五');
        break;
    case 6:
        console.log('今天是周六');
        break;
    case 0:
        console.log('今天是周日');
        break;
    default:
    console.log('输入有误')
        break;
}
