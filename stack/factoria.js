"use strict";

/*
 *author: 林登锋
 *2016.8.18
 *栈的实现类
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
}

//压入栈方法
Stack.prototype.push = function(element) {
    this.dataStore[this.top++] = element;
}

//出栈方法
Stack.prototype.pop = function() {
  if(this.top == 0){
    return undefined;
  }
  //找出栈顶元素lo
  var lastItem = this.dataStore.pop();
  //删除栈顶元
  //top-1
  this.top--;
  //将栈顶的元素返回出去
  return lastItem;

  // return this.dataStore[this.top--];
}

//查看栈顶元素方法
Stack.prototype.peek = function() {
  // var last = this.dataStore[this.top];
  // return last;

  return this.dataStore[this.top-1];
}

//返回栈内元素数量
Stack.prototype.length = function() {
    return this.top;
}

//清空栈
Stack.prototype.clear = function() {
  this.top = 0;
  this.dataStore.length = 0;
}

Stack.prototype.toString = function() {
  if(this.top == 0){
    return "空的！";
  }
  return this.dataStore.join("|");

}
//进制数转换   a  数字    b为进制数 函数最后返回最后的结构
// function mulBase(n,b){
//   var stack = new Stack();
//   // var n = a;
//   // var b = b;
//   do {
//     stack.push(n%b);
//     n = Math.floor(n/b);
//   } while (n > 0);
//   var converted = "";
//   do {
//     converted += stack.pop();
//   } while (stack.top > 0);
//   return converted;
// }

// function ishuiWen(str){
//   var stack = new Stack();
//   for(var i=0;i<str.length; i++){
//       stack.push(str[i]);
//   }
//   var word ="";
//   do {
//       word +=stack.pop();
//   } while (stack.top > 0);
//   if(word == str){
//     return "回文";
//   } else {
//     return "不是回文";
//   }
// }
// console.log(ishuiWen("adddda"));
// console.log(ishuiWen("addemdda"));

// console.log(ishuiWen("adddda"));

// function factorial(n){
//   if(n == 0){
//     return 1;
//   } else {
//     return n*factorial(n-1);
//   }
// }
function factorial(n){
  var stack = new Stack();
  do {
    stack.push(n--);
  } while (n>0);
  var result = 1;
  do {
    result *= stack.pop();
  } while (stack.top>0);
  return result;
}
console.log(factorial(5));
