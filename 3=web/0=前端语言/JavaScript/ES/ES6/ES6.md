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

































































































































































