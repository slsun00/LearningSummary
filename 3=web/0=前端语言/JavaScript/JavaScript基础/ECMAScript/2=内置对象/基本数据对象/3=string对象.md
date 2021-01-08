## String对象

*   原始值字符串没有属性和方法
*   原始值可以使用 JavaScript 的属性和方法 
    *   因为JS 在执行方法和属性额时候可以把原始值当做对象

## 字符串属性

```js
length 				返回字符串长度
constructor			 返回创建字符串属性的函数
prototype			允许向对象添加属性和方法

var test = "fsf"
console.log(test.length)  // 3
```

## 字符串方法

```js
// 参看字符串函数
```

### 转换为 string

*   toString() 方法

    ```js
    调用被转换数据类型的 toString（） 方法，不会改变原变量，返回转换的结果
    
    var a = 123;
    var b = a.toString()
    // a = a.toString()
    
    // 注意
    	1. null 和 undifined 没有 toString 方法，使用会抛错
    ```

    

*   String() 函数

    ```js
    // 可以将任意类型的值转化为 字符串
    1. 原始类型值
    	数值、boolean、undefined、null
    	但会的是原值 + 加上双引号
    
    
    2. 对象
    	对象 ：一个类型字符串    string({a:1})	 	 // "[object bject]"
        数组 ：该数组的字符串形式	string([1,2,3])      // "1,2,3"
    
    
    转换规则
    	对于 Number Boolean  调用 toString 方法
         对于 undefined null、对象 ， 调用 valueOf 方法输出
    
                                       
    String({a:1})   // "[object bject]"
    String({a:1}.toString())
    ```

*   '+' 号

    ```js
    任意变量 + 字符串 = 字符串的拼接
    
    任意量 + ""（空字符串）   进行转换
    ```

    



## 查找方法

### 字符方法

```js
charAt()
charCodeAt()
formChartCode()



"string".charAt()	
	功能：返回指定索引位置的字符
	参数 ：超出范围，返回空的字符串
    返回值 ：string 中下标为 n 的字符的实际值

"String".charCodeAt()  
	功能 ：返回指定索引位置字符的 Unicode
	参数 ：超出范围，返回 NaN
    返回值 ：string 中下标为 n 的字符的 Unicode 编码,16位值

String().formCharCode()  //静态方法
	返回 ：将指定的 Unicode 值转化为字符串
	参数 ：0 或很多歌整数，代表字符的 Unicode  编码
    返回值 ：由指定编码字符组成的新字符串
    特性	： 静态方法，实为构造函数 String（） 属性
    
---------------------------------------------------------------------------------------
    
String.formcharCode(104,101)    //"he"
	String 对象提供的静态方法，但是不支持大于 0xFFFF 的码点
    JavaScript 只支持两个字节的字符，大于该点的占用四个结点，要拆成两个字节的字符再拼接
    
String.charCodeAt()  
	码点大于 0xFFFF 的（大于两个字节的字符的码点），
    需要连续读取两次 ，charCodeAt(i)  charCodeAt(i+1) 放在一起得到准确的字符

var s = new String("ac")
s.charAt(1) // c
"abc".charCodeAt(1)  // 98 即 b
```

### 位置方法

```js
"string".indexOf()
"string".lastIndexOf()


"string".indexOf(参数1，参数2)
	功能 ：
    	检测指定字符串第一次出现的位置
	参数：
    	参数 1 ：要在查找的子串
        参数 2  ：从该位置向后匹配  负值（视为0） 省略（起始位置） 超出范围（返回-1）
    返回值 
   		 子串首次出现的下标，没有的话为-1
"string".lastIndexOf(参数1，参数2)
	功能 ：
    	检测指定字符串最后一次出现的位置
    参数：
    	参数 1 ：要在查找的子串
        参数 2  ：从该位置向后匹配  负值（视为0） 省略（起始位置） 超出范围（返回-1）
    返回值 
   		子串首次出现的下标，没有的话为-1
```

### 提取分割（匹配） 

```go
"string".match()
"string".search()
"string".replace()
"string".split()


"string".match(参数字符串)
	功能
		找到一个或者多个正则表达式
		在 string  中寻找参数字符串，匹配到第一个就返回，匹配不到就返回 null
	参数
		要进行模式匹配的正则表达式
		非正式表达式：传给 RegExp() 构造函数，并转为正则表达式对象
	返回值
		存放匹配结果的数组,该数组有两个属性，一个index 和 input
			index 匹配字符串开始的位置
			input 原始字符串

		有全局标记 g ，执行全局检索
			找就返回一个数组,找不到就返回 Null
			数组
				所有匹配的子串
			缺点
				1.没有派生属性，不提供子表达式匹配文本信息，不声明每个匹配子串的位置
			弥补
				使用 RegExp.exec()
		无全局标记 g ,执行一次
			找到就返回一个数组，找不到就返回 Null
			数组
				第 0 个元素，匹配的文本
				其他元素 ， 与正则子表达式匹配的文本
			属性
				input		调用该方法的字符串对象
				index		匹配为本起始字符串在字符串中的位置
				lastIndex	配备为本的末尾字符在字符串中的位置
			
"string".search(参数字符串)
	功能
		检索字符串中与正则表达式匹配的子串，返回索引
	参数
		与 match 相同
	返回值
		字符串中第一个与正则表达式相匹配的子串的起始位置，找不到就返回 -1
	特性
		忽略全局标记 g 和 lastIndex() 属性

"string".replace(参数1，参数2)
	功能
		替换一个与正则表达式匹配的子串
	参数
		参数 1 ：源字符串，旧值
		参数 2 ：替换文本或函数 ，新值
	特性
		如果参数 1 是字符串则只进行一次匹配替换，若替换所有子串则必须制定全局标记 g
		如果参数 2 仅为字符串，则可以使用特殊字符序列 :正则表达式的 构造函数属性

"string".split(参数1，参数2)
	功能
		根据指定分割符将字符串分割成多个子串，并返回成数组
	参数
		参数 1 ： 指定的分隔符  （必选）
			空字符串 ：返回数组为源字符串的每一个字符
			省略      ：源字符串
			分隔符     ：两边各拆出来一个字符，没有的就用空字符代替 （|a）= ("",a)
		参数 2 ： 限定返回数组的最大成员数 （可选）
```



## 操作方法

### 拼接方法

```js
+ 
concat()



+ 加号
	字符串 + 字符串

"string".concat(varue,...)
    功能
         两者多个字符串拼接
    参数
         要拼接到 string 上的的一个或者多个值
         不是字符串的会转化为字符串
    返回值
         拼接上的新字符串
    特性
         功能与 + 相同
         原始字符串实际值并没有被真正修改
            
var s1 = "a"
var s2 = "b"
s1.concat(s2) //ab
s1		     //a
```

### 截取方法

```js
"string".slice()
"string".substring()
"string".substr()

=======================================================

"test".slice(参数1，参数2)
	功能
    	提取字符串的片段，并在新的字符串中返回被提取的部分
	参数
        参数 1 截取的开始位置
        参数 2 截取的结束位置（不包含） ，省略的话，默认到最后
        负值 ：实际索引就是 长度 + 负值索引 （就是倒数）
        参数2 > 参数1 ，返回空字符串
    源数据
    	没有变 ，相当于把符合条件子串复制一份出来

"test".substring(参数1，参数2)
   功能
   		提取字符串中两个指定索引号之间的字符
   参数
        参数 1 截取的开始位置
        参数 2 截取的结束位置（不包含） ，省略的话，默认到最后
        负值 ：自动将负数转化为 0
        参数2 > 参数1 ，自动调换连个参数的位置
    源数据
    	没有变 ，相当于把符合条件子串复制一份出来
        
"test".substr(参数1 ，参数2)
	功能
    	从其实索引号提取字符串中指定书目的字符
	参数
        参数 1 截取的开始位置
        参数 2 截取子串长度 ，省略的话，默认到最后
        负值 ：
        	第 1 个参数 ：表示倒数极端的字符位置
        	第 2 个参数 ：自动将负数转化为 0
    源数据
    	没有变 ，相当于把符合条件子串复制一份出来
```

### 空格处理

```js
"string".trim（）			两端空格 ，不改变源字符串，返回一个新的字符串
	空格 、制表符、换行符、回车符
"string".trimLeft()		清除前置空格
"string".trimRight()		清除后缀空格
```



### 比较方法

```js
"string".localCompare( 参数字符串 )
	功能
    	用本地特定顺序比较两个字符串
    参数
    	与源字符串比较的字符串、
    返回值 ：说明比较结果的数字
    	负数 ：原字符串  < 参数字符串
		0   ：原字符串  = 参数字符串
	    正数 ：原字符串  > 参数字符串
	特性
    	考虑下自然语言顺序 ： 'B'.localcompare('a') //1        ???/
```



## 编码方法

```js
字符串常规编码与解码
	escape()
	unescape()
URI 字符串编码与解码
	encodeURI()
	decodeURI()
URI 组件编码与解码
	encodeURIComponent()
	decodeURIComponent()
```



## 大小写转化

```js
大写转换
	"string".toUpperCase()			// 全部转化为大写
	"string".toLocaleUpperCase()
小写转换
	"string".toLowerCase()			// 全部转化为小写
	"string".toLocaleLowerCase()
代码转换
	用 js 动态格式化 html , 不具语义性 ，舍弃
    
    
转化布尔值 数组
String.prototype.toUpperCase.call(true)  // "TRUE"
String.prototype.toUpperCase.call(["a","b"])  // "A,B"
```

