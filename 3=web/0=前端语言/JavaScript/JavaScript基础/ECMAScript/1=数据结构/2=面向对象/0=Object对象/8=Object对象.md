## 对象

*   JavaScript 中所有的事务都是对象

    ```JS
    多个数据的封装体
    用来保存多个数据的容器
    一个对象代表现实中的一个事务
    ```

*   为什么使用

    ```js
    统一管理多个数据
    ```

*   组成

    ```js
    // 对象只是一种特殊的数据
    属性 : 属性名（字符串） ： 属性值
    方法
    ```

### 分类

```js
// Object
	任何对象都是 Object 的后代 ，任何对象都是 Object 的实例

// Object
	任何对象都是 Object 的后代 ，任何对象都是 Object 的实例

// 对象中可以板寸多个不同数据类型的属性
内建对象
	由 ES 标准中定义的对象，在任何 ES 的实现中都可以使用
	构造函数：Number() String() Boolean() Function Object() Date()
	工具类 ：Math Date()   regexp()
    
        
自定义对象
	由开发人员自定义的对象  
    Array(数组)  []	  object	 数组
    函数          	 function
    
//宿主对象
	由 Js 的运行环境提供的兑现，目前来讲是浏览器提供的兑现
   	 BOM 
     	window navigator screen history location
     DOM
    	document element attribuute event

```



### 类型

```js
typeof  检查一个对象，返回 object{属性}
```



## 属性

### 概述

*   向对象中保存的值称为属性
*   对象由属性组成
    *   如果一个属性包含一个函数，它被认为是这个对象的方法
    *   否则被认为是一个属性

### 格式

```js
组成 
	属性名(字符串) ：属性值

属性名
	是默认是字符串，所以写的时候可以省略 双引号、单引号
    对象名的属性名不强制遵守标识符规范

    属性值
	// 属性值可以是任何数据类型，甚至也可以是一个对象


访问对象内部的数据

	普通 ： dot
		对象.属性名  person.name
		1. 如果属性名是一个函数名
        	person.get() 调用 ； person.get 整个函数原始源码作为属性值
         2.有时候不能用
         	传入的是变量的时候，变量名不确定
            对象添加的属性存在：空格、- 等特殊字符

    特殊 ： []
        对象["属性名"] 	：	person[name] p[123]
        1. 可以传递变量，使用更加灵活
             var num = 1 ; person[num]
		2. 通用
```



### 操作

#### 添加修改

```js
对象的属性添加修改 ，如果属性之前不存在就是添加，如果存在就是修改
	对象.属性名 = 值
	objectName.propertyName = value;
```

#### 读取访问

```js
// 读取对象中不存在的属性，会返回 undefined
objectName.propertyName
```

#### 删除

```js
// 删除对象的属性
delete 对象.属性名
```

#### 检查

```js
in  检查为一个对象中是否有指定的属性
语法
	"属性名" in 对象
	"name" in test;  // 检测对象中是否有 name 属性,对象中没有但是原型中有，也会返回 true
	
实例对象.hasOwnProper("属性名")  // 检查对象自身中是否有该属性
```

#### 枚举

```js
// for ... in 语句 ，对象有几个属性，循环体执行几次
// 每次执行的时候，会将对象的一个属性的名字赋值给变量 n
for (var 变量 in 对象) {
    console.log("属性名："+n+" 属性值："+对象[n])  // 不能用 dot ,dot 后不能使用变量，
}

```







## 方法

*    函数作为对象的属性，我们成这个函数时这个对象的方法，调用函数，就说调用函数的方法（method）

*   方法是函数让对对象做某件事情，或某事的作用在这个对象上，

*   创建的函数都会作为 window 对象的方法存储
    
    ```js
    // 函数与方法没有本质的区别
    
    //  函数是声明的一个独立的单元，
    //  方法是附加到某个对象上并且可以使用 this 关键字引用方法
    
    
    对象的方法访问		object.methodName() 
    函数调用	    	methodName()
    ```

## 创建

*   所有用户定义的对象和对象中的内置对象都是一个被称为 Object 的对象的后代
*   允许自定义对象

### 声明

*   定义并创建对象的实例
*   使用函数类定义对象，然后创建新的对象实例

```js
// new 运算符调用的函数，是构造函数 constructor，
// 构造函数专门用来创建对象函数
// Object() 构造函数  ，创建和初始化对象的函数，这个是特殊的对象生成构造函数
person = new Object();  // 创建对象
person.name= "丽丽"；	  // 对象添加属性
person.age = 23

====================================================================
// 使用对象字面量来创建一个对象 ,在创建对象是可以指定对象中的属性
// 属性名可以加引号，也可以不加，但是使用特殊的符号就需要加
// 属性名和属性值是一组一组的名值对，名值之间用 ： 多个名值对之间用 ，
var obj = {}；
var obj = {属性名：属性值，属性名：属性值，...};


var person = {
    name:"lili",
    age:23   		// 最后一个不用加逗号
};

====================================================================

// 工厂方式创建
function createPerson(name,age){
    var person = {};
    person.name = name;
    person.age = age;
    return person;
};
var baJie = createPerson("八戒"，618)  // 这个类型是 Object
使用 new createPerson("八戒"，618) , 构造函数一般是大写开始 


// 函数（对象构造器）  
// this 指向只在执行的函数本身，函数所属的对象
function person(name,age){
    this.name = name;
    this.age = age;
}

girl = new person("lili",34)   // 这种的类型返回的是 person
girl.name // lili
```



### 创建对象实例

```js
// 有了函数构造器，就可以创建对象实例
var myboy = new person("lili",23);
```

### 添加新属性

```js
// 通过为对象赋值，向已有对象添加新属性

person 对象已经存在 ，添加新的属性
perspn.lastName = "doe"
```

### 添加新方法

```js
function chengeName(name) {
    this.name = name;
}


function person(name,age) {
    this.name = name;
    this.age = age;
    this.changeName = changeName;
}

myfather.chaneName("dfs")
```

### with

*   用来作为用于引用一个对象的属性或方法的一种速记

*   对象被指定成 with 关键字的参数，进而成为后面语句块的默认对象，这个对象下的属性和方法可以不指定对象名而直接使用

    ```js 
    with(object) {
        properties used without object name and dot
    }
    
    
    function addPrice(mount){
        with(this){
            price = amount;  //不指定名字和访问(.) 被直接使用
        }
    }
    
    function book(title){
        this.title = title;
        this.price=0;
        this.addprice=addPrice;  // 方法指定为属性
    }
    
    var book = new book("python")
    book.addPrice(66)  
    ```



## 语法格式

```js
对象由花括号分割 ， 采用键值对（name:value） , 属性由逗号隔开
var person = {first:"name",age:"18",id:333};
// 可以跨行使用，空格和折行无关系
var person = {
    first:"name",
    age:"18",
    id:333		// 这里没有逗号。。。。
};

寻址
	name = person.first
	name = person[first]
```



## native对象

*   内置对象

    *   这些对象在任何地方被访问，并且在任何浏览器中运行的任何操作系统的工作方式相同

*   类型

    ```js
    1. 数字对象
    2. 布尔对象
    3. 字符串对象
    4. 数组对象
    5. 日期对象
    6. 算术对象
    7. 正则表达对象
    ```




## 面向对象编程

*   参看面向对象编程



































































































































