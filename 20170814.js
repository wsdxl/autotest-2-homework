// ===&==
//== 比较2个值是相等
// ===比较值和类型都相等
// const a=1;
// const b='1';
// console.log(a==b);
// console.log(a===b);
/**
 * equal； 对比两个数值或字符串用equal，==对比的是2个的值
 * deepEqual ： 对比数值，字符串和对象，两个对象用deepEqual，==对比的是2个的值
 * deepStringEqual：=== 对比的是值和类型，也可以用于对比对象，判断的精确度更高
 */
const assert=require('assert');
// const a=1;
// const b='2';
// assert.equal(a,b); // ==对比的是2个的值
// assert.deepEqual(a,b); // ==也是对比的是2个的值
// assert.deepStrictEqual(a,b);//=== 对比的是值和类型
const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 1
  }
};
// assert.deepEqual(obj1,obj2);//可以比较对象
// assert.equal(obj1,obj2);  //比较对象时出错，只能对比数值或字符串
assert.deepStrictEqual(obj1,obj2);//可以比较对象