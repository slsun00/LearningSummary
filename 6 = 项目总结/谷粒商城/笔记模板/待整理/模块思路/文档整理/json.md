## 前端

```java
数组、对象 转为 json
发送 json
    // 准备要发送的数组 var array = [5,8,12]; 
    // 将 JSON 数组转换成 
    // JSON 字符串  "[5,8,12]"
    // JSON 对象  "{"":""}"
    // 都是一样的，用来装换成字符串
    var arrayStr = JSON.stringify(array);

    // 通过 ajax 进行传递
    $.ajax({ 
        "url":"send/array/plan/three.html", 
        "type":"post", 
        "data":arrayStr,
        "contentType":"application/json;charset=UTF-8"
        // 告诉服务器端当前请求的请求体是 JSON 格式
        }）

    // 步骤
    首先准备好要发送的 JSON 数据 
        JSON 对象 
        JSON 数组 
        将 JSON 对象或 JSON 数组转换为 JSON 字符串
         var arrayStr = JSON.stringify(array);  
    将 JSON 字符串
        直接赋值给 data 属性 "data":arrayStr 
        必须要设置 
            contentType "contentType":"application/json;charset=UTF-8"        

```

## 后端
```java

// 进行判断  util 包
    是否是 ajax 请求，
     貌似没啥大的用处，开发一定是确定了是 ajax 请求

// 接收 JSON
    @RequestBody  // jackson 依赖的注解
        直接将传过来的 json 字符串转为 java 的对象、数组
        传统发送请求参数方式不方便发送的数据，使用 JSON 请求体的方式发送。
            特别是要发送复杂对象的时候。

// 返回 json 
    1. 方法上添加 responseBody 直接将返回的对象，转为 JSON 返回到前端
        
	2. 使用 gosn 生成，然后返回        





```