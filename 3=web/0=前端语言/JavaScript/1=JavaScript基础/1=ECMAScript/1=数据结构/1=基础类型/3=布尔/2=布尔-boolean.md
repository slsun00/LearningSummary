## 布尔值

* 只有两个固定值
  
  * true   ：真
  
  * false  ：假

  

## 转换

### 假/假值

```js
false 值
	// 代表 空、否定的值转换为 false
	undefined
	null 
	NaN  0( -0 0 +0 )
	false
	''(空字符串)
真值
	其他类型转化为 true
```

### 强制转换

```js
Boolean(oject)  // 输出 true false
Boolean(0)  //false
```

### 隐性转换

```js
!！任何值 ，会对任何值进行转换成 布尔值
!!(10) // true
```



## 布尔对象

### 介绍

*   Boolean 对象表示两个值，不是真就是假

### 声明

```js
var val = new Boolean(value);
	如果 value  省略或者是强制转换中的几种 false 类型，就会初始化为 假
```

### 属性

### 方法

