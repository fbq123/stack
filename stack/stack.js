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
    console.log(this.dataStore);
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

var MaRong = new Stack();
MaRong.push("宋喆");
MaRong.push("牛a");
MaRong.push("牛b");
MaRong.push("牛c");
MaRong.push("宝强");
console.log(MaRong.toString());
MaRong.pop();
console.log(MaRong.toString());
// MaRong.peek();
console.log(MaRong.peek());
console.log(MaRong.length());
console.log(MaRong.clear());
console.log(MaRong.toString());
