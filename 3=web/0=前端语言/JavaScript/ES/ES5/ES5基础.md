## 严格模式

*   运行模式

    *   除了正常运行模式（混杂模式），
    *   ES5 增加了严格模式（strict mode）, 使得 js 在更加严格的语法条件下运行

*   目的

    *   消除 js 一些语法不合理。不严谨的地方
    *   增加代码安全性
    *   为新版本做铺垫

*   使用

    *   在全局或函数第一条语句定义为 

        ```js
        use strict
        // 浏览器不支持，只解析为一条简单的语句，没有任何副作用
        
        <script>
        	'use strict'
        </script>
        
        function(){
            'use strict'
        }
        ```

*   语法和行为改变

    *   必须使用 var 声明变量
    *   进制自定义函数中的 this 指向 window
    *   创建 eval 作用域 ，不会影响全局变量
    *   对象不能有重名的情况



## JSON 对象（数组）

```js
JSON.tringify(obj/arr)
JSON.parse(json)
```



## Object 扩展

```js
Object.create(prototype,[description])
	作用 ： 以指定对象为原型串更加新的对象
    新对象指定新的属性，并对属性进行表述
    	value 		  指定值
        writable	   当前属性是否可以删除，默认为false
        configurable   当前属性是否可被删除 ，默认 false
	    enumerable	  当前属性值能否用 for in 枚举，默认为 false 

var obj = {username:"damu"}
var obj1 ={};
obj1 = Object.create(obj ，{
   // 添加其他属性                  
   name:{
       value :"lili",
       // 这个地方设置 true 之后，在外部才能通过 obj1.name = "baba"              
       writable : true,
       // 这个地方设置之后，在可以外部通过 delete obj1.name 进行珊瑚粗             
       configurable :true,
      // 这个设置了，才能进行for in  枚举
       enumeralbe:true
    }                  
})  // obj 的原型对象就会变成obj,并继承obj的相关信息

obj1.name = "baba"     
delete obj1.name

----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------

Object.defineProperties(object,description)
	作用 ： 为指定对象定义扩展多个属性
     get    用来获取当前属性值的回调函数
     set    修改当前属性值触发的回调函数，并且实参即为修改后的值
     存取器属性
     	setter  存值
        getter	取值
var obj2 = {firstName:"li",lastName:"hua"}        
Object.defineProperties(obj2,{ // 扩展属性的相关描述
    // 扩展的新属性,得到全名
    fullName:{
         // 专门扩展属性的值
        // 获取属性值额时候自动调用 get
        get:function(){
            return this.firstName + ' ' + this.lastName  // lihua
        }
        // 直接在外使用 obj.fullName = 'lilei'  ,是不能改变的，需要用set回调
        // 监听扩展属性，当扩展属性发生变化的时候会自动调用dot(.) 
        // 自动调用后会将变化的值作为实参注入到set 函数
        set: function(data){      //Object.fullName = 'li lei' 更改才能成功
    		console.log(data)		 // data 就是 li lei
			var name = data.split(' ') 
             this.firstName = names[0];
			this.lastName = names[1];
		}
    }
})
 
console.log(obj2.fullName)   // lihua
        

```



## 数组扩展

```js
// 得到数组中的第一个下标
Array.prototype.indexof(value)
// 得到数组中的最后一个下标
Array.prototype.lastIndexof(value)
// 遍历数组
Array.prototype.forEach(function(item,index){})
// 遍历数组返回一个新的数组，返回加工后的值
Array.prototype.map(function(item,index){})
// 遍历过滤一个新的子数组 ，返回条件为 true 的值
Array.prototype.filter(function(item,index){})


var arr = [2,3,4,2,5]
arr.indexof(2) 		//0
arr.lastIndex(2)	//3
arr.forEach(function(item,index){
    console.log(item,index);
})

// 产生一个新数组，对每个元素都增大 10 
arr.map(function(item,index){
    return item + 10;
}) 

// 返回数值 > 3 的元素
arr.filter(function(item,index){
    return item > 3 ;
})
```

## 函数扩展

```js
Function.prototype.bind(obj)
	将函数内的 this 绑定为 obj , 并将函数返回

call()  apply() bind() 区别
相同
	都能指定函数中的 this
不同
    call() /apply()  立即调用函数
    bind()   将函数返回
    
// 
var obj = {name:"lili"}
function foo(data) {
    console.log("this 指的是 ：" + this.data)  // this 指的是 window
}

foo.apply(obj,33)  //   this 指的是 obj ,参数是从第二个参数开始传入
foo.call(obj,[33])  //   this 指的是 obj ，第二个参数必须是数组，参数传到数组里
foo.bind(obj)      //  绑定完this不会立即调用当前的函数，而是将函数返回，传参方式和 call 一样
var bar = coo.bind(obj)
bar()
```

