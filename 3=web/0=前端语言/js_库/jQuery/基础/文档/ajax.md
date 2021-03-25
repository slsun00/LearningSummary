## 使用

## ajax

```java
$.ajax
    url 表示请求的地址
    type 表示请求的类型 GET 或 POST 请求
    data 表示发送给服务器的数据
    	name=value&name=value
    	{key:value}
	success 请求成功，响应的回调函数
    dataType 响应的数据类型
        text 表示纯文本 
        xml 表示 xml 数据 
        json 表示 json 对象
        
        
例子
$("#ajaxBtn").click(function(){ 
        $.ajax({ 
            url:"http://localhost:8080/16_json_ajax_i18n/ajaxServlet", 
            // data:"action=jQueryAjax",
            data:{action:"jQueryAjax"}, 
            type:"GET", 
            success:function (data) { 
                // alert("服务器返回的数据是：" + data); 
                var jsonObj = JSON.parse(data); 
                $("#msg").html("编号：" + data.id + " , 姓名：" + data.name); 
            },
            dataType : "json" 
        }); 
});
```

## get & post

```js
// ajax--get 请求 

url 请求的 url 地址 
data 发送的数据 
callback 成功的回调函数 
type 返回的数据类型


$("#getBtn").click(function(){
    $.get(
        "http://localhost:8080/16_json_ajax_i18n/ajaxServlet",
        "action=jQueryGet",
        function (data) { 
            $("#msg").html(" get 编号：" + data.id + " , 姓名：" + data.name); 
        },
        "json"); 
});
```



## getJSON

```js
// ajax--getJson 请求 
    url 请求的 url 地址 
    data  发送给服务器的数据 
    callback  成功的回调函数


$("#getJSONBtn").click(function(){ 
	$.getJSON(
        "http://localhost:8080/16_json_ajax_i18n/ajaxServlet",
        "action=jQueryGetJSON",
        function (data) { 
            $("#msg").html(" getJSON 编号：" + data.id + " , 姓名：" + data.name
        ); 
    }); 
});
```

## 表单序列化

```js
serialize()可以把表单中所有表单项的内容都获取到，并以 name=value&name=value 的形式进行拼接。

```

