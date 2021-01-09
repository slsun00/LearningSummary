## 关键字

### let - 变量

```js
作用
	声明一个变量 ，和 var 相似。var没有块级作用域
    let 关键
特点
	声明的变量具有块级作用域，只在块作用于内有效 ，即一对{}内
    不能重复声明
    不会预处理(提升)，不存在提升
    防止循环变量变成全局变量
应用
	循环遍历加监听
    使用 let 取代 var 是趋势

var a = 123
let a = 123
```

### const - 常量

```js
作用
	声明一个常量
特点
	一旦 const 修饰的标识符被赋值之后，不能修改
    使用 const 定义标识符，必须要赋值
    常量的含义是指向的对象不能修改，但是可以修改对象内部的属性
    const obj = {
        name :"122",
        age:18
    }
    obj.age = 20  // 是可以进行修改的
    其他跟 let 相同
应用
	保存不变的数据
```

### 变量的解析构值

```js
解构
	从对象或数组中提取数据，并赋值给变量(多个)
	允许我们按照一一对应的关系从数组中提取值，然后将值赋值给变量
对象
	let {n,a} = {n:'tom',a:12}
数组
	let [a,b] = [1,abc]
用途
	给多个形参赋值
```

## 字符串

*   模板字符串

    ```js
    // 简化字符串的拼接
    使用
    	模板字符串必须使用 `  ` 包含
        变化部分使用 ${xxx} 定义
    使用
    	let obj = {name:'lili',age:'18'}
        let str = `我的名字叫：${obj.name} ， 年龄是：${obj.age}`
    ```



## 对象

### 介绍

```css
对象
	一组无序的相关属性和方法的集合，所有的事务都是对象：字符串、函数等鞥
	属性 ： 事务的特征 ，名词表示
	方法 ： 事物的行为 ， 动词表示
```

### 注意

```css
es6 中没有变量提升，所以必须要先定义类 ， 才能通过类来实例化对象
```



### 简化写法

```js
省略同名的属性值
省略方法同 function


let username = 'kobe'
let age = 39
let obj {
    username,
    age,
    getName(){
        return this.username;
    }
}

// 原始没有改变的情况
let obj {
    username：username,  // 这个就是全局变量的 username
    age:age,			// 这个就是全局变量的 age
    getName:function(){
        return this.username;
    }
}
```

## 类 class

### 介绍

*   es6 中新增了类的概念
*   类抽象了对象的公共部分，泛指某一大类
*   对象特指某一个，是通过类实例化一个具体的对象
*   继承

### 使用

```js
语法
	class name {// class body }
创建实例
	let xx = new name();
类构造函数
	class Star {
        constructor(uname) {
            this.uname = uname
        }
    }
	let a = new star("刘德华")  // 自动创建一个刘德华的实例
// 使用
 	class 声明
        关键字创建类，类名习惯首字母大写
    constructor() 构造函数
		是类的构造方法(默认) ， 用于传递参数，返回累的实例对象
	    new 生成对象实例会自动调用该方法 ，如果不写这个函数，类内部会自动给我们创建一个 constructor()
	new 
    		1. 类必须使用 new 实例化对象
	规范
    	类名后面不要加小括号
        生成实例，类名后面加小括号，构造函数不需要加 function

// 添加方法
	方法直接写到 class body 中即可，不需要加 function ,多个 方法之间不需要添加逗号分隔
    添加
        class star {
            sing(song){console.log(song)}
            dance(){}
         }
	调用
    	let a = new Star("刘德华")  // 自动创建一个刘德华的实例,前面有的代码就不写了
       a.sing("冰雨")
        

注意

	2. 类的方法会自动加到原型里面，构造函数要自己在原型里面追加公共方法
```

### this 指向问题

```js
// 类里面 的共有属性和方法一定要加 this
	1. constructor 里面的this指向的是创建的对象
     2. 方法里面的 this 指向这个方法的调用者

class Star {
    constructor(name) {
        // constructor 里面的this指向的是创建的对象
        this.name = name;   
    }
    
    sing(song) {
        this.song = song;
    }
}
```



### 本质

```js
class 本质
    还是函数，可以简单理解为 类是构造函数的另一种写法
    具有和构造函数一样的特点
    
特点(就是：构造函数特点)
	1. 类有原型对象 prototype 
    2. 类原型对象 prototype 里面有 constructor 指向类本身
    3. 类可以通过原型对象添加方法
    4. 类创建的实例对象有 __proto__ 原型，指向类的原型对象 
    
注意
	es6 的绝大部分功能，es5都可以做到，新的类写法让对象原型写法更加清晰、更像面向对象
    es6 中 类是语法糖
```













## 函数

### 构造函数

*   介绍

    ```js
    *   是一个特殊函数，
    *   用来初始化对象，即为对象成员变量赋初始化值，它总与 new 一起使用
    *   我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数中
    
    成员
    	构造函数中的属性和方法，我们称为成员
        成员可以添加
    实例成员
    	构造函数内部通过 this 添加成员
        实例成员只能通过实例化的对象来访问
        
        function Star(name) {
            this.name = name;	// 实例成员 name sing
            this.sing = function() {
                console.log("唱歌")
            }
        }
    
    静态成员
    	在构造函数本身上添加的成员
        静态成员只能通过构造函数进行访问
       	例子
        	Star.sex = "女"   // 静态成员
    		但是不能是
            	let ldh = new Star("刘德华")
                ldh.sex = "男"  // 不可以这样使用实例对象进行访问
    
    对象成员查找规则(原型链的规则)
    1. 当访问一个对象的属性(包括方法)时，首先查找这个对象有没有该属性
    	 找到 ：使用
    	 找不到 ： 查找他的原型(即：__proto__ 指向的 prototype 对象)
    		 找不到 ：就找原型对象的原型(object原型对象)
    	一次类推，直到找到 Object 为止
    
    ```

*   new

    ```js
    new 在执行的时候，会做 4 件事
    1.  在内存中创建一个新的空对象
    2.  让 this 指向这个新的对象
    3. 执行构造函数里面的代码，给这个新对象添加属性和方法
    4. 返回这个新的对象(所以构造函数不需要 return)
    ```

*   缺点

    ```js
    问题
    	构造函数虽好，但是存在 内存浪费的问题
    解决
    	希望所有对象使用同一个函数，这样可以节省内存
         一般情况下，公共属性定义到构造函数里面，公共的方法我们放在原型对象身上
    ```

*   特点综述

    ```js
    1. 构造函数有原型对象 prototype 
    2. 构造函数原型对象 prototype 里面有 constructor 指向构造函数本身
    3. 构造函数可以通过原型对象添加方法
    4. 构造函数创建的实例对象有 __proto__ 原型，指向函数的构造函数 
    ```

    

### 箭头函数

*   介绍

    ```js
    作用
    	定义匿名函数,更简短的函数
    	不绑定this
    语法
    	(参数) => {函数体}；
    	let 函数名 = (参数) => {函数体}；
    
    函数体内变量及作用域
    	和其他的都一样
    特点
        1. 并且没有自己的this，arguments，super, new.target
        2. 箭头函数没有 prototype 属性
        	var Foo = () => {};
    		console.log(Foo.prototype); // undefined
        3. 不能用作构造函数。
        	// 箭头函数不能用作构造器，和 new一起用会抛出错误
            var Foo = () => {};
    		var foo = new Foo(); // TypeError: Foo is not a constructor
    	4.适用于非方法函数
        	箭头函数没有定义this绑定 ，容易直接指定为 window
            'use strict';
            var obj = {
              i: 10,
              b: () => console.log(this.i, this),  // obj.b();  undefined, Window{...}
              c: function() {
                console.log( this.i, this)  // obj.c()  10, Object {...}
              }
        5. 箭头函数不能用作函数生成器。
             yield 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）
    ```

*   语法格式

    ```js
    形参情况
    	// 函数名 = (参数) => {函数体}
    1.  函数体 
    	简写体(只有一条语句)
            // 只有一条语句或者是表达体，省略表达式相当于自动返回语句/表达式执行的结果
            let fun = (x,y) => x + y;  // (x,y) => {return x + y;}
    		// 条件（三元）运算符： 算是一个表达式
    		var simple = a => a > 15 ? 15 : a;
            // 加括号的函数体返回对象字面量表达式
            let fun = params => ({foo:bar})  // return {foo:bar}
        快状体(其他情况)
        // 其他情况，需要花括号 {} 包围 ，手动return ,里面的代码被解析为一系列语句
    2. 参数括号
        // 只有一个参数 , 可以省略参数的圆括号
        let fun = a => console.log(a)
        // 其他情况都不可以省略，即使没有参数
        let fun = () => console.log("这是匿名函数内部执行的语句")
        let fun = (a,b) => console.log(a,b)
        
    3. 参数个数
    	// 支持剩余参数和默认参数
        (param1, param2, ...rest) => { statements }
        (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
    	// 同样支持参数列表解构
    	([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;  // 6
    
    4. 换行
    	// 通过在 ‘=>’ 之后换行，或者用 ‘( )’、'{ }'来实现换行
    	var func = (a, b, c) =>
      		1;
    
        var func = (a, b, c) => {
          return 1
        };
    
        var func = (
          a,
          b,
          c
        ) => 1;
    ```

    

*   this 指向问题

    ```js
    箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this ,即定义的时候所处的对象就是 this
        ()=>  外层有函数，则 箭头函数的 this 和外层函数的一致
        ()=>  外层没有函数，则 箭头函数的 this 值得就是 window
    
    	let obj={
            name :'箭头函数'，
            getName:function(){
                btn.onclick = () => {alert(this)} // 此时箭头函数的 this 外层函数就是 getName 的this
            }
        }
        
    ```

*   调用

    ```js
    由于 箭头函数没有自己的this指针，通过 call() apply() bind() 方法调用一个函数时，只能传递参数（不能绑定this），他们的第一个参数会被忽略。
    
        var adder = {
          base : 1,
    
          add : function(a) {
            var f = v => v + this.base;
            return f(a);
          },
    
          addThruCall: function(a) {
            var f = v => v + this.base;
            var b = {
              base : 2
            };
    
            return f.call(b, a);
          }
        };
    
        console.log(adder.add(1));         // 输出 2
        console.log(adder.addThruCall(1)); // 仍然输出 2
    ```

*   解析顺序

    ```js
    // 箭头函数中的箭头不是运算符，但箭头函数具有与常规函数不同的特殊运算符优先级解析规则
    // 所以使用最好加括号
    
    let callback
    callback = callback || () => {};	// SyntaxError: invalid arrow-function arguments
    callback = callback || (() => {});    // ok
    ```

*   特殊使用

    ```js
    // 闭包
    	var add = ()=> {
            return (()=>(i++))
        }
        var v = Add();
        v();           //1
        v();           //2
    
        //因为仅有一个返回，return 及括号（）也可以省略
        var Add = (i=0)=> ()=> (++i);
    
    // 递归
    	var fact = (x) => ( x==0 ?  1 : x*fact(x-1) );
    	fact(5);       // 120
    ```

    



### 三点运算符

```js
// 扩展运算符，剩余运算符

// rest(可变)参数 ，用来取代 arguments , 但是比 argument 灵活，只能是最后部分形参参数
// ...value 中的 value 是一个真数组，可以使用 数组的方法
function foo(a,...value) {
    console.log(value)		// 这个是最后部分的参数
    consolse.log(arguments)  // 这个是全部参数
}
foo(3,4,5,6)  //  这里 value 就是 数组 4,5,6



// 扩展运算符
let arr = [1,6]
let arr1 = [2,3,4,5]
arr = [1 , ...arr1 , 6]
arr.push(...arr1)

console.log(...arr)  // 得到的就是 arr1
```

### 形参默认值

```js
// 形参的默认值
	当不传入参数的死活，使用形参里面的默认值
    
function Point(x=1,y=2){
    this.x = x
    this.y = y
}

let Point = new Point(3,5)  // 这里 x 就是 3， y 就是 5
let Point = new Point()	    // 这里 x 就是 1， y 就是 2
```



## 原型

### 构造函数原型对象 prototype

```js
原型
	一个对象，也称 prototype 对象为原型对象
    这个对象所有属性和方法，都会被构造函数所拥有
    js 规定每一个构造函数都会有一个 prototype 属性 ，指向另一个对象
作用
	共享方法
	构造函数通过原型分配的函数时所有的对象所共享的


使用
	把不变的方法，直接定义到 prototype 对象上，这样所有对象的实例就可以共享这些方法
	Star.prototype.sing = function() {
        console.log("冰雨")
    }
```

### 对象原型 `__proto__`

```js
对象都会有一个属性 __proto__ 
	指向构造函数的 prototype 原型对象，
    之所以能使用构造函数的 Prototype ，就是因为对象有 __proto__ 原型的存在
注意
	__proto__ 对象原型和原型对象 prototype 是等价的
    
意义
	在于为对象的查找机制提供一个方向，或者一条路线
    是一个非标准属性 ，实例开发中可以不用，他只是内部指向原型对象 prototype

    
查找规则(原型链)
	向看对象深深是否有需要的查找的方法
    	有 ：就执行对象身上自带的方法
        没有 ： 应为有 __proto__ 存在，就去构造函数原型对象 prototype 身上查找
```



### 原型构造属性

```js
对象原型( __proto__ ) 和构造函数 (prototype) 原型对象都有一个 constructor 属性
constructor 属性 ：
	构造函数，指向构造函数本身
    用途	
    	用于记录该对象引用哪个构造函数，他可以让原型对象重新指向原来的构造函数
    	如果使用我们修改了原来的原型对象，给原型对象赋值的是一个对象，则必须手动利用 constructor 指回原来的构造函数(相当于修改原型对象)
```

### 原型链

### 原型对象 this 指向

```js
介绍
	构造函数中，里面this指向的是对象实例
    原型对象函数里面的this指向的是实例对象
```

### 原型扩展内置对象

```js
使用
	通过原型对象 ，对原来内置对象进行扩展自定义的方法
 例子
1. 给数组自定义求偶数的功能
	Array.prototype.sum = function() {
        let sum = 0;
        for (let i=0;i<this.length;i++) {
            sum += this[i];
        }
        return sum;
    }    
	// d调用
	let arr = [1, 2, 3]
    console.log(arr.sum())

	// 注意: 这样子是用一个新的对象覆盖原来的原型对象
    Array.prototype = {
          sum = function() {
          }
   	 }    
```



## 继承

### 介绍

```js
es6 之前没有 extends 继承 ， 使用 构造函数 + 原型对象实现继承，被称为 组合继承
es6 用过类实现继承
```

### 类继承

#### 使用

```js
class FAther {
    constructor(){}
    money(){console.log(100)}
}
class Son extends Father {
    constructor(){}
}
// Son 就继承了 Father 的属性和方法
let son = new Son()
son.money()
```

#### super 关键字

```js
// super 关键字
用途 ： 子类通过该关键字把数据传给父类，就可以完美调用父类的方法
	调用父类的构造函数
    调用父类的普通函数
原因 ： (父类方法中的 this 是指向父类的)
注意 ：super 必须放到 子类的 this 之前
// 构造函数不能继承，所以要使用 super 关键字进行调用

class FAther {
    constructor(){}
    money(){console.log(100)}
}
class Son extends Father {
    constructor () {
        super();	// 调用父类中的构造函数
    }
    say() {
        super.say();	// 调用父类的普通方法
    }
}

// 继承中属性、方法查找原则：就近原则
1.先看子类中有没有这个方法(就近原则)
	有 ：就先执行子类方法
    没有 ：就去父类中照这个方法
    
2. supper 关键字必须在子类 this 之前
class Son extends Father {
    constructor(x,y) {
        super(x,y)
        this.x = x
        this.y = y
    }
}

```

### es5 组合继承

#### 父构造函数继承属性

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

#### 原型对象实现继承

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



## promise对象

*   介绍

    *   promise 对象，代表了将来某个要发生的事情（通常是一个异步操作）
    *   有了 promise 对象，可以将异步操作以同步的流程表达出来，避免层层嵌套的回调函数(俗称：回调地狱)

*   使用

    ```js
    1. 异步编程的一种解决方案
    2. 我们封装一个网络请求的函数，因为不能立即拿到结果，所以需要传入另一个函数，在数据请求成功的时候，将数据通过传入的函数回调出去
    3. 当网络请求非常复杂的时候，就会出现回调地狱 
    
    // 链式编程
    套娃边串娃
    // 使用
    	有异步操作的时候，使用 promise 封装
    ```

    

*   demo

    ![image-20201220172408204](image-20201220172408204.png)
    
    ```js
    // Promise()   是一个构造函数，用来生成一个 Promise 实例
    
    promise 对象的状态
        pending : 初始化的状态,等待状态
        fullfilled : 成功的状态
        rejected : 失败的状态
        
    应用
    	实现超时处理
    
     // 创建 promise 对象
    let promise = new Promise((resolove,reject) => {
        // 初始化 promise 状态为 pending    
        
        if (异步操作成功) {
            resovle(value); // 修改 promise 的值为fullfilled
        } else {
            reject(errMsg);  // 修改 promise 的值为 rejected
        }
    })
    //调用 promise 的then 
    promise
    	.then((data)=>{console.log(data)},(error)=>{})
    //-----------------------------------------------------------------------------
    
    
    // promise 链式地调用
    new Promise((resolve,reject) =>{
        setTimeOut(()=>{
            reselve('aaa')
        },1000)
    }).then(res => {
        console.log("第一层代码");
         return Promise.resolv(res+'111')
    }).then(res =>{
        console.log("第二层代码");
        return Promise.resolv(res+'222')
    }).then(res => {
        // 第三层演示吧报错
         return Promise.reject(err message)
        // throw 'err message'  也可以
    }).catch(res => {
        console.log(err);
    })
    
    //---------------------------------------------------------
    
    // 超时例子
    // 创建 promise 对象 ，promise 进行判断 then 是执行代码
    // resolove reject 本身就是也是一个函数
    let promise = new Promise((resolve,reject) => {
        // 初始化 promise 状态为 pending
        
        // 执行 异步操作 ,通常是发送 ajax 请求，开启定时器
        setTimeout(()=>{
    
            // 根据异步任务的返回结果来修改 promise 的状态
            // 异步任务执行成功 ，调用 resolve 的时候就会调用 then
            resolve("data");   // 修改 promise 的状态为 fullfilled 成功的状态
            // 异步任务失败
            reject();  // 执行这个, 把error 传给 then 
        })
    }，2000).then((data)=>{  // 成功回调执行的代码
        
        // .then (函数1，函数2)   回调成功执行函数1 回调从失败执行函数2  
    	}).catch((err) => { // 失败的回调执行的代码
            console.log(err)
        })
        	
        
        
    // -----------------------------------------------------------------------
    
    // new Promise(resolve => resolve(结果))
    
    
    // 实际例子 ajax 
    function getNews(url){
    
        // 创建 promise 对象
        let promise = new Promise((resolove,reject) => {
            // 初始化 promise 状态为 pending
    
            // 创建  xmlHttp 对昂
            let xmlHttp = new XMLHttpRequest();
            //绑定监听,注意这个要调用 4 次
            xmlHttp.onreadstatechange = function(){
                if (xmlhttp.readyState === 4 {
                    if (xmlHttp.status === 200)){
                    	//请求成功
                        console.log(xmlHttp.responseText)
                        // 修改状态
                        resolve(xmlHttp.responseText);  // 修改 promise 的值为fullfilled
              		} else {
                        // 请求失败
                        reject('暂时没有新闻内容');
           		 }
           	 	}
    
    	xmlHttp.open('GET',url);
            
        })
        return promise;
    }
    
    getNews(url)
    	.then((data) => {
    		console.log(data)
    	    // 从获取的data内容里面进行处理，注意这里的 data 是 JSON 字符串，解析后发送url
            let commentsUrl = Json.parse(data).commentsUrl
            let url = "http://..."
            return getNews(url)  // 这里注意要防止回调地狱
    	}，(error) => {
        	console.log(error);
    	})
        .then((data)=>{console.log(data)},(error)=>{})
    // ---------------------------------
    // 处理异步请求，
    Promise.All([
        new Promise((resolve,reject) => {
            $ajax({
                url:'',
                success:function(){
                    console.log("结果1")
                }
            })
        })，
        new Promise((resolve,reject) => {
            $ajax({
                url:'',
                success:function(){
                    console.log("结果2")
                }
            })
        })，
        // 前面所有请求完成，才会执行下面的then
    ]).then(results => {
        // result[0]  是第一个new Promise 的结果，类推
    })
        
    ```
    
    



## symbol属性

*   介绍

    *   ES5 中对象的属性名都是字符串，容易造成重名，污染环境

    *   ES6 中添加了一种原始数据类型 symbol

        （原来有 number string boolean null defined object）

*   特点

    *   symbol 属性值对应的值是唯一的，解决命名冲突问题

    *   symbol 值不能和其他数据进行计算，包括同名字符串拼接

        ```js
        自身不等于自身
        let sy1 = Symbol()
        let sy2 = Symbol()
        console.log(sy1 == sy2)  // false
        console.log(sy1,sy2)    // Symbol()  Symbol()
        ```

        

    *   for in ,for of 遍历的时候不会遍历 symbol 属性

*   使用 

    ```js
    1. 调用 symobol 函数得到 symbol 值
    	let  symbol = Symbol();
    	let obj = {userName:'kobe'}
        obj[symbol] = 'hello'   // obj {userName:'kobe' , Symbol:'hello'}
    	
    2. 传参标识
    	let sy1 = Symbol('1')
    	let sy2 = Symbol('2')
        console.log(sy1,sy2)  // Symbol(1)  Symbol(2)
    	
    	// 定义常量
    	const perspm_key = Symbol('person_key') 
        console.log(perspm_key)   // Symbol(person_key) 
    
    3. 内置 symbol 值
    	内置 11 个 Synbol 值，指向语言 内部使用的方法
    	
    ```


## itorator接口

```js
介绍
	一种接口机制机制，为不同的 数据提供统一的访问机制
  
作用
	为各种数据结构的成员能够按某种次序排列
    使得数据结构的成员能够按照某种次序排列
    使用一种新的遍历命令 for...of
工作原理
	创建一个指针对象(遍历器对象)，指向数据结构的起始位置
    第一次调用 next 方法，指针会自动指向数据结构的第一个成员
    接下来不断调用 next 方法，指针会一直往后移动，直到指向最后一个成员
    每次调用 next 方法返回的是一个包含 value 和 node 的对象，{value:当前成员值，done:布尔值}
		value 表示当前成员的值
         done   表示当前数据是偶遍历结束
         当遍历结束的时候，返回的 value 为 undefined ，done 为 false

	原生具备 iterator 接口的数据(可用 for of 遍历)

// 模拟
// 遍历器对象（模拟指针对象）
function myInterator(arr){
    let nextIndex = 0
    return {
        next:function(){
			return {value:arr[nextIndex++],done:false}
        }
    }
}
let arr = [1,2,3]
let interatorObj = myInterator(arr)
```

































































































































































