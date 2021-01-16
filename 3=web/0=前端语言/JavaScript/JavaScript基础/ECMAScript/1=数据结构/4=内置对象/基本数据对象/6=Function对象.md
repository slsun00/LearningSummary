## 函数对象

```js
函数定义作为对象的属性，   称之为 ：对象方法
函数如果用于创建新的对象 ，称之为 ：构造函数
```

### 属性

```js
function f(x,y) {}


name 属性
	返回紧跟在 function 后面的那个函数名
	f.name // f

length 属性
	只读属性，代表函数形参的数量，在函数定义时候给出形参个数
    f.length //2

prototype 属性
	原型对象  ，参看原型对象-静态方法
```



### 方法

```js
// 函数也是对象，也有自己的方法和属性

apply(thisArg,[argsArray])
	参数
		thisArg : 函数 执行的时候，指定的 this 值
    	argsArray : 传递的值，必须包含在数组、伪数组中
    返回值
    	就是函数的返回值
     应用
		将函数作为对象的方法来调用，将参数以数组形式传递给该方法
     例子
     	// 不需要改变对象，所以设置为 null ,对 myArray 进行取最大值
     	myArray = [10,2]
		Math.max.apply(Math,myArray)
      
call(thisArg,...)
	调用函数，若第一个参数是对象，则改变函数内部的 this 指向
	将函数作为对象的方法来调用，将参数传递给该方法
    例子
    	// 将第一个对象参数设置为函数执行的时候的 this ，即 myonject 调用 myFunction 函数
    	myFunction.call(myObject,10,2)  
	应用
    	多用于继承
        
bind(thisArg,arg1,arg2,...)
     参数
     	thisArg : 函数运行时，指定的 this 值
     	arg1 , arg2 : 传递其他参数
     返回值
     	有指定的 this 值和初始化参数改造的原函数拷贝 ， 相当于返回一个新的函数 this 改变了
     使用
     	不会调用函数，只会改变函数的 this 指向
     	有的函数不需要立即调用，但是又想改变这个函数内部的 this 指向
     使用例子
     	比如一个 btn ，我们点击了以后，就禁用这个按钮 2 s 后再启用
toString（）
	返回函数的源码，以字符串输出
    
    
function myFunction(a,b) {
        return a + b;
    }
```

