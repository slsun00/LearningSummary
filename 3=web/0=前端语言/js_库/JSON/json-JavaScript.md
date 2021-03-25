## JavaScript 中的 json

*   JSON 可以直接使用 JavaScript  语法，无需其他软件处理

## 例子

```js
var jsons = { 
    "key2":1234, // Number 
    "key1":"abc", // 字符串类型 
    "key3": true  // boolean
    "key3":[1234,"21341","53"], // 数组 
    "key4":{ // json 类型 
        "key4_1" : 12, 
        "key4_2" : "kkk" 
    },
    "key5":[
            { // json 数组 
                "key5_1_1" : 12, 
                "key5_1_2" : "abc"
            },
             { 
                 "key5_2_1" : 41, 
                 "key5_2_2" : "bbj" 
             }
    	 ]
};
```

## 格式

```js
存在形式
	json 对象
    	对象的形式存在
        操作 json 中的数据的时候使用
    json 字符串：
    	字符串的形式存在
        在客户端和服务器之间进行数据交换的时候使用
        
json 对象
    介绍
        JSON 是 js 的一个对象，里面的 key 就是对象的属性。
    格式
        对象名.属性名
```



## Json 字符串转 js 对象

```js
// 创建JavaScript字符串，格式为 JSON格式的数据
var text = '{"employeess" :[{"firstNasme":"lili"}] }'

// 解析 ，需要字符串作为参数
var obj = JSON.parse(text);

// 页面中使用
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = obj.employees[1].firstName
</script>
```

## js 对象转JSON

```JS
// 将一个 js 对象转换为 JSON 字符串并返回
JSON.stringify(JSObject)
```





## 注意

```js
JSON  在  IE7 以下不兼容
// 可以执行一串字符串形式的 js 代码，并返回执行的结果
// 字符串中含有 {}  ，会将 {}  当成代码块，则需要在字符串前后添加 ( )
// 开发中尽量不要用，但是执行性能差，还有安全隐患
eval()   


var str = '({"naem":"空空"})'；
eval(str)
```

