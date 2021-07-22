## 介绍

```js
Jsonp(JSON with Padding) 是 json 的一种"使用模式"，
	可以让网页从别的域名（网站）那获取资料，即跨域读取数据
    是一种无需考虑跨域问题即可传送 JSON 数据的方法
	不同于 JSON，其并不是一种数据交换格式，而只是一种绕过跨域的技巧,信息传递双方约定的方法
```

## 原理

*   介绍

    ```js
    
    一般来说我们约定通过一个参数来告诉服务器 JSONP 返回时应该调用的回调函数名，然后拼接出对应的 js
    
    // 为了克服跨域问题，利用没有跨域限制的 script 标签加载预设的 callback 将内容传递给 js。
    从另一个域请求文件会引起问题，由于跨域政策。
    从另一个域请求外部脚本没有这个问题。
    JSONP 利用了这个优势，并使用 script 标签替代 XMLHttpRequest 对象。
    	<script src="demo_jsonp.php">
    ```

    



## 请求封装



## 其他

```js
1、ajax和jsonp这两种技术在调用方式上“看起来”很像，目的也一样，都是请求一个url，然后把服务器返回的数据进行处理，因此jquery和ext等框架都把jsonp作为ajax的一种形式进行了封装；

2、但ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加<script>标签来调用服务器提供的js脚本。

3、所以说，其实ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取。

4、还有就是，jsonp是一种方式或者说非强制性协议，如同ajax一样，它也不一定非要用json格式来传递数据，如果你愿意，字符串都行，只不过这样不利于用jsonp提供公开服务。

总而言之，jsonp不是ajax的一个特例，哪怕jquery等巨头把jsonp封装进了ajax，也不能改变着一点！

 
```



## 需整理

```js
https://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html
```

