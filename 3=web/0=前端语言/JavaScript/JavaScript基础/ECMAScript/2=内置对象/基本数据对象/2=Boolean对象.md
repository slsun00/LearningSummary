## 布尔对象

### 介绍

*   Boolean 对象表示两个值，不是真就是假

### 声明

```js
var val = new Boolean(value);
	如果 value  省略或者是强制转换中的几种 false 类型，就会初始化为 假
```

### 属性

```js
constrctor		返回创建这个对象的布尔函数的一个引用
prototype		原型属性允许您添加对象的属性和方法
```

### 方法

```js
valueOf()		返回布尔对象的原始值
toString()		根据对象的值返回 "真" 或 "假"
toSource()		返回一个包含布尔对象来源的一个字符串，可以用这个字符串来创建一个等效的对象
```

