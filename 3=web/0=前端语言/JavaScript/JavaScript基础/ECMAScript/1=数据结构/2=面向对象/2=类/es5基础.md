

## 类

*   JavaScript 是面向对象的编程，但是 JavaScript 不使用类
*   JavaScript 是基于 prototype 而不是基于类的 
*   不会创建类，也不会通过类来创建队形

## es5 组合继承

### 父构造函数继承属性

```js
// call() 函数
    function fnName() {
        console.log('123')
    }

    fnName.call()	// 调用函数 
    var o = {
        name:'andy'
    }
    fnName.call(o) // 第一个参数，就是call调用的函数的 this 指向

// 父构造函数
function Father(name) {
    // this 指向父构造函数的对象实例
    this.name = name;
}

// 子构造函数
function Son(name，age) {
     // this 指向子构造函数的对象实例   
    Father.call(this,name)  // 改变函数的 this 指向， 这里使父函数的 this 指向变为 Son ， 实现继承
    this.age = age
}

let son = new Son('刘德华',18)

```

### 原型对象实现继承

```js
// 父构造函数
function Father(name) {
    // this 指向父构造函数的对象实例
    this.name = name;
}

Father.prototype.money = function(){
    console.log("1000")
}
// 子构造函数
function Son() {
}

// Son.prototype = Father.prototype;
// 上面这样赋值，如果修改子原型对象。父原型对象也会跟着变化
Son.prototype = new Father();
// 如果利用对象的形式修改了原型对象，最后要用 constructor 指回原来的构造函数
Son.prototype.constructor = Son;

let son = new Son();
console.log(son.money())
```



## 





