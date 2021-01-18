

## 类

### 介绍

*   JavaScript 是面向对象的编程，但是 JavaScript 不使用类
*   JavaScript 是基于 prototype 而不是基于类的 
*   不会创建类，也不会通过类来创建队形

### 实现

```js
// 通过函数实现
function Person() {
    // 在构造函数中实现 属性 age name
    this.age = 20
    this.name = '张三'
    
    // 在构造函数中实现方法 
    this.run = function() { alert('运动') }
}

// 在原型链上实现属性
	Person.prototype.age = 20
	Person.protorype.name = '张三'
// 在原型链上实现方法
	Person.prototype.run = function() { alert('运动') }

调用
    var  p = new Person();
    // 两种方法实现的方法，调用都是一样的
    alert(p.name)
区别
	原型链上的属性会被多个实例共享，构造函数不会
    
方法
	1. 静态方法 ： 不需要进行实例化，通过类就可以调用
        Person.getInfo = function() { alert('静态方法')}
        // 调用
            Person.getInfo()  // 静态方法
	2. 动态方法 ： 需要进行实例化才能进行调用
    	构造函数中的方法
```



## es5 组合继承

### 对象冒充实现继承

```js
父构造函数继承属性
// 父构造函数
function Father(name) {
    // this 指向父构造函数的对象实例
    this.name = name;
    this.run = function() { alert("father") }
}

// 父类原型链方法
Father.prototype.walk = function() { alert('运动') }

// 子构造函数
function Son(name，age) {
     // this 指向子构造函数的对象实例
    // 改变函数的 this 指向， 这里使父函数的 this 指向变为 Son ， 实现继承
    // 注意子参数传递给从父亲继承过来的方法属性
    Father.call(this,name)  
    this.age = age
}

var son = new Son('刘德华',18)
son.run() // father
son.walk()  // not function

结论
	对象麻涌可以继承父类构造函数中的方法，但是不能继承原型链上面的属性和方法
```



### 原型链对象实现继承

```js
// 父构造函数
function Father(name) {
    // this 指向父构造函数的对象实例
    this.name = name;
    this.run = function() { alert("father") }
}

// 父类原型链方法
Father.prototype.walk = function() { alert('运动') }

// 子构造函数
function Son() {
}
// 另类方法，但是有问题
//     Son.prototype = Father.prototype;
//     上面这样赋值，如果修改子原型对象。父原型对象也会跟着变化
Son.prototype = new Father();
// 如果利用对象的形式修改了原型对象，最后要用 constructor 指回原来的构造函数
Son.prototype.constructor = Son;

var son = new Son()
son.run() // father
son.walk()  // 运动

问题
	子类不能给父类传参
```



### 组合继承

```js
// 就是前面两种方法结合了一下
// 父构造函数
function Father(name) {
    // this 指向父构造函数的对象实例
    this.name = name;
    this.run = function() { alert("father") }
}

// 父类原型链方法
Father.prototype.walk = function() { alert('运动') }

// 子构造函数
function Son(name,age) {
    Father.call(this,name)  
    this.age = age
}

// Son.prototype = Father.prototype;
// 上面这样赋值，如果修改子原型对象。父原型对象也会跟着变化
Son.prototype = new Father();
// 如果利用对象的形式修改了原型对象，最后要用 constructor 指回原来的构造函数
Son.prototype.constructor = Son;

var son = new Son()
son.run() // father
son.walk()  // 运动

```





### call() 函数

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


```





