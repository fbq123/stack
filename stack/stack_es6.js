"use strict";
class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  push(element){
    this.dataStore[this.top++] = element;
  }
  pop(){
    this.top--;
    return this.dataStore.pop();
  }
  peek(){
    return this.dataStore[this.top-1]
  }
  length(){
    return this.top
  }
  clear(){
    this.top = 0;
    this.dataStore.length = 0
  }
  toString(){
    return this.dataStore.join(' ');
  }
}
