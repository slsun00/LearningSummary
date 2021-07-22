## 文本档

```css
https://github.com/axios/axios
```

## 介绍

*   前端最流行的 ajax 请求库
*   可以理解为 ajax i/o system

## 特点

*   基本 promise 的异步 ajax 请求库
*   浏览器端(发送xmlhttprequets请求)、node 端(http请求)都可以使用
*   支持请求、响应拦截器
*   支持请求取消
*   请求、响应数据转换
*   批量发送多个请求
*   自动解决跨域问题

## api

```js
axios 会将对象转换为 jsoN
```

## json 转换

```js
介绍
	后端返回的都是字符串
 查看
 	通过 调试工具的 Netwprk --> response 网络面板查看原始的返回数据
 发送数据
 	ajax 发送 json 字符串
 注意
 	axios 会把 json 字符串转换为 js 对象
    比较大的数字，会出现不准确的情况
 解决
 	// json-bigint 库
 	 axios 使用 json.parse 把后端返回的数据转为 js 对象
     不让 axios 使用 json.parse 来转换数据 ， 而是使用 json-bigint 来转换数据
 使用
 	axios.create({
        trancsformRequest: [function (data) {
            //......
        }]
    })
```



## 难点

### axios.create(config)

*   根据配置创建一个新的 axios , 也就是每个新的 axios 都有自己的配置

*   新 axios 只是没有取消请求和批量发送请求的方法没其他语法都是一致的

*   设计原因

    ```css
    1. 需求。 项目中部分接口需要的配置与另一部分接口需要的配置不太一样，
    2. 处理	创建 2 个 axios , 内个都有自己特有的配置，应用到不同的要求的接口请求中
    ```

*   ajax 二次封装

    *   对 axios 进行二次分装，就是对 ajax 的二次封装

### 处理链的流程-拦截器

```css
请求拦截器(后添加先执行)
请求
响应拦截器
响应
```

