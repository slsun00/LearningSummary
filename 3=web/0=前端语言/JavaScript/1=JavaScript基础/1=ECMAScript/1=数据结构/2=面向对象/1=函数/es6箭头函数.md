## 箭头函数

## 介绍

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

## 语法格式

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
    /*
    	https://www.imooc.com/wenda/detail/597768
    	有人使用 _ 代替没有参数的情况下的 ()
    	let fun = _ => console.log('匿名函数内部执行的语句')
    */
    
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



## this 指向问题

```js
箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this ,即定义的时候所处的对象就是 this
	// 匿名函数没有自己的作用域
    ()=>  外层有函数，则 箭头函数的 this 和外层函数的一致
    ()=>  外层没有函数，则 箭头函数的 this 值得就是 window

	let obj={
        name :'箭头函数'，
        getName:function(){
            btn.onclick = () => {alert(this)} // 此时箭头函数的 this 外层函数就是 getName 的this
        }
    }
    
```

## 调用

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

## 解析顺序

```js
// 箭头函数中的箭头不是运算符，但箭头函数具有与常规函数不同的特殊运算符优先级解析规则
// 所以使用最好加括号

let callback
callback = callback || () => {};	// SyntaxError: invalid arrow-function arguments
callback = callback || (() => {});    // ok
```

## 特殊使用

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



## 简写

```js
// 函数体只有一行，函数可以写成一行
let myAdd = function(x: number, y: number): number { return x + y; };

let a 
```























