## NULL

- 介绍

    - mull 只有一个值，表述空值，定义一个空对象指针
-  属于一个对象类型，JavaScript 归为一类特殊值
    - 唯一值 ：null 

### 类型

#### 类型检查

```js
typeOf null;  // 类型为 Object

```

#### 检查避开 null

```js
typeOf 检测 null 的值为对象类型，所以要自定义下函数，避开因为 null 值影响基本烈性检测
function typeOf(o) {
    return (o === null)? "null" : (typeOf o)
}
typeOf(null)  // null


// 定义备用空对象，非对象
if (men == null ) {
    men = {
        // 初始化 men
    }
}
```



### 使用

```js
// 初始赋值
	// 初始赋值为 null , 说明将要赋值对象，就不需要用构造函数了
    var a = null;
    a = []   // a 就可以设置任意类型的对象 
// 结束赋值
	// 让对象成为垃圾对象，可以释放内存
	a = null;   
```



## undefined

*   undefined 是 Undefined 类型的唯一值
*   表示未定义的值，以下默认为
    *   变量声明未赋值、
    *   输定定义为设置值的时候
    *   函数来说，如果没有明确的返回值，则默认返回值

### 来源

```js
undefined 派生自 null 都便是空缺的值，转化为 布尔值均为 false ,所以相等
	undefined == null ;  // true

两者是不同的类型
	null === undefined   // false
	typeOf null			//object
	typeOf undefined 	// undefined

undefined 隐含着意外的空值，而 null 隐含着意料之中的空值。
设置一个变量、参数为空值时，建议使用 null，而不是 undefined。
```





















































































































