

## 类

### 介绍

*   JavaScript 是面向对象的编程，但是 JavaScript 不使用类
*   JavaScript 是基于 prototype 而不是基于类的 
*   不会创建类，也不会通过类来创建队形

## 方法

### 构造方法

```js
构造函数就是一个普通的函数，创建函数和普通函数勄区别
格式
	关键字 new 调用则构成构造函数调用 ，首字母大写  

功能
	用构造函数创建的对象，称为一类对象，也称为一个类

看起来像是创建了新的函数，实际上 JavaScript 函数时重新创建的对象
执行流程
	1. 立即创建一个新的对象
    2. 将新建的对象设置为函数中的 this
	3. 逐行执行函数中的代码
    4. 将新建的对象作为返回值返回



构造函数的调用
	会创建一个新的对象，新的对象会继承构造函数的属性和方法
    解析器在调用函数，每次都会向函数内部传递一个隐含的参数 this

// this 参看函数高级

    
特性
	构造函数木诶执行一次
    

function Person (name,age) {   // 
    this.name = name;
    this.age = age;
}

// 普通调用 ,类型返回是 Object
x = Person("lili",18)

// 构造函数 ，类型返回是 Person jiushi  
var x = new Person("lili",18)  // Person 类的实例
x.name;		// lili	


// 实例判断 , 判断 x 是否是 Person 的实例
// 对象 
x instanceof Person;   


// 没有形参的构造函数可以省略圆括号
var o = new Object();
var o = new Object;
```



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





