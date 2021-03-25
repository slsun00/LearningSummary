## 需要整理

```js
避免使用常量作为条件表达式的条件（循环语句除外）
```



## 注释

```js
单行
    //   
	任何位于 // 与行末之间的文本都会被 JavaScript 忽略（不会执行）。

多行注释
    /* 开头，以 */ 结尾
    
    好看的注释。。。。
    /*
     *
     * 
     *
     */
```

## 标识符命名

### 介绍

```js
标识符就是名称的专业术语
变量： 名词
函数： 动词

------------
变量名
函数名
参数名
属性名
```



### 名字构成

* 组成 ：字母、下划线、 美元符号、数字

* 首字母 

    * 不能是以数字开头
    * 不要以 美元符号开头，这会跟很多 JavaScript 库冲突

* 其他位置

    * 可以使用 Unicode 字符。
    * 一般建议仅使用 ASCII 编码的字母，不建议使用双字节的字符。

* 大小写敏感

* 可以使用 Unicode 转义序列

    ```js
    var \u0061 = ""  等价于  var a = ""
    转义序列一般不方便，常用于表示特殊字符和名称
    	JavaScript 关键字， 程序脚本等
    ```

    

* 不能使用 ： 

    * 关键字 、保留字
    * 空格
    * 其他标点符号

    

### 命名规则

```go
1. 连字符  ==》 不能使用
    first-name
2.  下划线
    first_name
3. 驼峰
    小驼峰 ：firstName
```



## 常量

```js
// 避免修改使用 const 声明的变量。
    const score = 100
    score = 125       // ✗ avoid
```



## 变量

```js
声明
    // 尽量先声明后赋值 ， 不能进行批量声明
        var a 
        a = 3
	// 不能使用未声明过的变量
	// 不要使用 undefined 来初始化变量。
			let name = undefined    // ✗ avoid
	// 命名要使用驼峰命名
		function myFunction () { }
	// 避免起相同名字的变量（特别是禁止局部变量和全局变量相同）
	// 不要重复生命变量
            let name = 'John'
            let name = 'Jane'     // ✗ avoid
                   
            let name = 'John'
            name = 'Jane'         // ✓ ok


删除
	// 不要对变量使用 delete 操作。
        var name
        delete name     // ✗ avoid

// 全局变量
	浏览器全局变量时加上 window. 前缀。
	document、console 和 navigator 除外，不用加
// 字符串
	统一使用单引号

注意
	避免将变量赋值给自己。
    	name = name   // ✗ avoid
	避免将变量与自己进行比较操作
    	if (score === score) {}   // ✗ avoid
```

## 数据类型

### 数值

```js
小数前面的 0 不要省去
	const discount = 0.5     // ✓ ok
```



### 布尔

```js
转化
	避免不必要的布尔转换。
    const result = true
    // if (result)
    if (!!result) {   // ✗ avoid
      // ...
    }
```

### 字符串

```js
不要使用多行字符串。
	
```



### 数组

```js
// 使用数组字面量而不是构造器。
    var nums = new Array(1, 2, 3)   // ✗ avoid
    var nums = [1, 2, 3]            // ✓ ok
路径
	使用 __dirname 和 __filename 时尽量避免使用字符串拼接。
        const pathToFile = __dirname + '/app.js'            // ✗ avoid
        const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
 禁止使用稀疏数组（Sparse arrays）。
 	let fruits = ['apple',, 'orange']       // ✗ avoid

```



### 函数

```js
标识调用
    关键字 函数名 参数 函数体花括号 之间都要有括号
    // 函数命名 ：括号与函数名间加空格
    function funName (arg) {}
	// 函数调用 ：标识符与括号间不留间隔。
	console.log('hello')
	// 禁止在代码块中声明函数
	if (authenticated) {
        function setAuthUser () {}    // ✗ avoid
    }
	// 不要将全局对象的属性作为函数调用。
	const math = Math()   // ✗ avoid

参数
	参数与括号之间不需要空格
    	 function funName (arg) {}
	避免使用 arguments.callee 和 arguments.caller。
	不要定义名字相同的参数
    	function sum (a, b, a) {  // ✗ avoid
	
构造函数
	以大写字母开头。
        function Animal () {}
        var dog = new Animal()    // ✓ ok
        
方法
	避免多余的函数上下文绑定。
        const name = function () {
          // 要使用 this.getName()
          getName()
        }.bind(user)    // ✗ avoid
    避免不必要的 .call() 和 .apply()
       sum.call(null, 1, 2, 3)   // ✗ avoid
赋值
	避免对声明过的函数重新赋值
    	function myFunc () { }
 	   myFunc = myOtherFunc    // ✗ avoid
 return
     return 语句中的赋值必需有括号包裹。          
        function sum (a, b) {
          return (result = a + b)   // ✓ ok
        }
自调用匿名函数 (IIFEs) 使用括号包裹。
	const getName = (function () { }())   // ✓ ok
     const getName = (function () { })()   // ✓ ok
```

### 对象

```js
类
	var person = {			// 1. 花括号和类名放在一行
      firstName: "lili",     // 注意冒号-值之间有个空格 ， 最后加逗号
      age: 20				// 最后一个属性-值后面不要逗号
    };						// 右花括号单独放一行

    
声明
	new 创建对象实例后需要赋值给变量
		const character = new Character()   // ✓ ok

方法
// 对象中定义了存值器，一定要对应的定义取值器。
	var person = {
        set name (value) {
            this._name = value
        },
        get name () {         // ✓ ok
            return this._name
        }
    }

属性
	不要定义重复的属性
	var user = {
      name: 'Jane Doe',
      name: 'John Doe'    // ✗ avoid
    }
    避免使用不必要的计算值作对象属性。
    	const user = { ['name']: 'John Doe' }   // ✗ avoid
        const user = { name: 'John Doe' }       // ✓ ok
    属性前面不要加空格
    	user .name      // ✗ avoid
全局对象
	不要对全局只读对象重新赋值。
    window = {}     // ✗ avoid
原型
	使用 getPrototypeOf 来替代 __proto__。
   		const foo = obj.__proto__               // ✗ avoid
		const foo = Object.getPrototypeOf(obj)  // ✓ ok
继承
	使用 this 前请确保 super() 已调用。
    class Dog extends Animal {
      constructor () {
        this.legs = 4     // ✗ avoid
        super()
      }
    }
```

### 类

```js
继承
// 子类的构造器中一定要调用 super ,即存在继承就要用
    class Dog extends Mammal {
      constructor () {
        super()   // ✓ ok
      }
    }
重复赋值
// 避免对类名重新赋值。
    class Dog {}
    Dog = 'Fido'    // ✗ avoid
属性
	不能使用相同名字的属性
    class Dog {
      bark () {}
      bark () {}    // ✗ avoid
    }
```



## 内置对象

### 正则

```js
// 正则中避免使用多个空格。
	const regexp = /test   value/   // ✗ avoid
    const regexp = /test {3}value/  // ✓ ok
    
```





## 运算符

### 格式符

```js
缩进
	使用两个空格进行缩进。
    不要混用空格、tab进行缩进
空格
	任意两个不同单词之间、不同符号之间，都要有空格隔开
        // 其中函数中的括号有例外
        var message = 'hello, ' + name + '!'
        function name (arg) { ... }
    遇到分号时空格要后留前不留
    	for (let i = 0; i < items.length; i++) {...}    // ✓ ok
    圆括号间不留空格
    	getName(name)       // ✓ ok
	除了缩进，不要使用多个空格。
    	const id =    1234    // ✗ avoid
    函数体中单行代码前后要加空格
        function foo () { return true }
    注释首尾留空格。
    	// comment          // ✓ ok
    	/* comment */       // ✓ ok
    行末不留空格
    展开运算符与它的表达式间不要留空白。
    	fn(... args)    // ✗ avoid
        fn(...args)     // ✓ ok                   	
    
 空行
 	不允许有连续多行空行
    文件末尾留一空行。
    
逗号
    逗号后面要加空格
    	var list = [1, 2, 3, 4]
    逗号只能放在行末
    	  var obj = {
            foo: 'foo',
            bar: 'bar'   // ✓ ok
          }
     避免使用逗号操作符。
     	if (doSomething(), !!test) {}   // ✗ avoid
点号
	点号操作符须与属性需在同一行
   // 方法一
    	console.log("hello")
   // 方法二
         console
         	.log("hello")
                             
冒号
	键值对当中冒号与值之间要留空白。，冒号与属性值之间不需要
    var obj = { 'key': 'value' }     // ✓ ok
空白符
	要使用非法的空白符。
制表符
	不要使用制表符。 no-tab(貌似不可行)
```

### 操作符

```js
操作符左右各保留一个空格
```



### 关系运算符

```js
// 相等
	始终使用( ===  ！== ) , 而不使用 (== !=)
 关系运算符的左值不要做取反操作。
	if (!key in obj) {}       // ✗ avoid
 检查 NaN 的正确姿势是使用 isNaN()。
 	if (isNaN(price)) { }       // ✓ ok
```

### 条件运算符

```js
`?` 和 `:` 与他们所负责的代码处于同一行
	方法一 ： 写成一行
    	var location = env.development ? 'localhost' : 'www.api.com
    方法二 ：分行
    	var location = env.development
          ? 'localhost'
          : 'www.api.com'
如果有更好的实现，尽量不要使用三元表达式。
	let score = val ? val : 0     // ✗ avoid
	let score = val || 0          // ✓ ok
请书写优雅的条件语句（avoid Yoda conditions）。
        if (42 === age) { }    // ✗ avoid
  	   if (age === 42) { }    // ✓ ok
```

### 赋值关系值

```js
解构赋值
	不要解构空值
    const { a: {} } = foo         // ✗ avoid
   
```





## 语句结构

### 结尾分号

```js
js断句
	一般
	 	\n 表示语句结束
    不能正常结束
    1. 该语句有未闭合的括号， 数组字面量， 对象字面量 或者其他不能正常结束一条语句的情况（譬如，以 . 或 , 结尾） 
    2. 该语句是 -- 或者 ++ （它会将后面的内容进行自增或减） 
    3. 该语句是 for()，while()，do，if() 或者 else 并且没有 { 
    //  方括号，括号,星号，正则开头的斜杠，减号 ，加号，在
    4. 下一行以 [，(，+，*，/，-，,，. 或者其他只会单独出现在两块内容间的二元操作符。
行末不使用分号 
// 自己补充，尽量不要在行首使用符号
// 不推荐使用首行分号
行首使用分号的情况
	//  下列符号作为一行的开始的时候

	;[1, 2, 3].forEach(bar)
-------------------------------
    // 推荐使用
	var nums = [1, 2, 3]
	nums.forEach(bar)
```



### 流程控制

```js
1. if else
    // 花括号不能省略
    if (condition) {
    // else 关键字要与花括号保持在同一行。
    } else {
        
    }
2. switch
   // 不要使用相同的 case
    	switch (id) {
          case 1:	
          case 1:     // ✗ avoid
        }
   // 一定要使用 break 来将条件分支正常中断。
       switch (filter) {
          case 1:
            doSomething()
            break           // ✓ ok
          case 2:
            doSomethingElse()
        }         
```

### 错误处理

```js
err
	// 不要丢掉异常处理中err参数。
    run(function (err) {
      // 及时抛出错误
      if (err) throw err
      window.alert('done')
    })

catch
   catch 中不要对错误重新赋值。
   try {
      // ...
    } catch (e) {
      e = 'new value'             // ✗ avoid
      const newVal = 'new value'  // ✓ ok
    }
throw
	用 throw 抛错时，抛出 Error 对象而不是字符串。
    	throw new Error('error')    // ✓ ok
```

### 模块化

```js
导入
	// 同一模块有多个导入时一次性写完。不要拆开
	import { myFunc1, myFunc2 } from 'module' // ✓ ok
import, export 和解构操作中，禁止赋值到同名变量。
	import { config as config } from './config'     // ✗ avoid
    import { config } from './config'               // ✓ ok

```



### 关键字

```js
return，throw，continue 和 break 后不要再跟代码。
	function doSomething () {
      return true
      console.log('never called')     // ✗ avoid
    }
finally 代码块中不要再改变程序执行流程。
	try {
      // ...
    } catch (e) {
      // ...
    } finally {
      return 42     // ✗ avoid
    }
```







## 禁止使用

```js
__iterator__
	Foo.prototype.__iterator__ = function () {}   // ✗ avoid
label
	label:
      while (true) {
        break label     // ✗ avoid
      }
禁止使用 with。
	with (val) {...}    // ✗ avoid
禁止多余的构造器。
	class Car {
      constructor () {      // ✗ avoid
      }
    }
Function  构造器
Object	构造器
new	require
Symbol 构造器
禁止使用原始包装器。
	const message = new String('hello')   // ✗ avoid
不要使用八进制字面量
	const octal = 042         // ✗ avoid
字符串字面量中也不要使用八进制转义字符。
	const copyright = 'Copyright \251'  // ✗ avoid
禁止不必要的转义。
	let message = 'Hell\o'  // ✗ avoid
```



















































