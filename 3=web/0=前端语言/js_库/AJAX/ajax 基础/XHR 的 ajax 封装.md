## 介绍

*   是一个简单版本的 axios

## 特点

*   函数的返回值是 promise , 成功的结果为 response ,异常的结构为 error

*   能处理多种类型的请求 ：get post put delete

*   函数的参数为一个配置对象

    ```js
    {
        url:'', // 请求地址
        method:'', // 请求方式  get post put delete
        params:{}, // get delete请求的 query 参数
        data:{},    // post delete 请求的请求体参数
    }
    ```

*   响应 json 数据自动解析为 js

## 编码实现



### 发送请求

```js
function axios({
    url,
    method='GET',
    params={},
    data={}      
}) {
    // 返回一个 promise 对象
    return new Promise((resolve,reject) => {
        // 执行异步 ajax 请求
        // 创建 xhr 请求
          const request = new XMLHttpRequest()
        // 打开连接（初始化请求，没有请求
            request.open(method,url,true)
        // 发送请求
        	request.send()
        
        // 请求成功 调用 resolve()
        	
        // 请求失败 调用 reject() 
    })
}



// 调用 axios
// 执行 get 请求 ， 从服务器获取数据
function testget() {
    axios({
        url:'http://localhost:8080/posts',
        method:'GET',
        params:{
            id:1
        }
    }).then (
    	response => {
            console.log(response)
        },
        err => {
            alert(error.message)
        }
    )
}

// 执行 post 请求 ， 服务器保存数据
function testpost() {
    axios({
        url:'http://localhost:8080/posts',
        method:'POST',
		data:{
            "id": 1,
      		"body": "some comment",
      		"postId": 1
        }
    }).then (
    	response => {
            console.log(response)
        },
        err => {
            alert(error.message)
        }
    )
}
```

### post  get 携带参数数据

```js
function axios({
    url,
    method='GET',
    params={},
    data={}      
}) {
    // 返回一个 promise 对象
    return new Promise((resolve,reject) => {
        
        // 处理 query 参数 (拼接到 url 上) id=1&xxx=abc
        let queryString = ''
        object.key(params).forEach(key => {
            queryString += `${key}=$params[key]}$`
        })
        if ( queryString ) {
            // 去除最后的 $
            queryString = queryString.substring(0,queryString.length-1)
            // 拼接到 url 中 , 不太严谨
            url += '? ' + queryString
        }
        
        // 执行异步 ajax 请求
        // 创建 xhr 请求
          const request = new XMLHttpRequest()
        // 打开连接（初始化请求，没有请求
            request.open(method,url,true)
        // 发送请求
        	if (method === 'GET') {
                request.send()
			} else if (method === 'POST') {
                // 告诉服务器请求体的参数是 json 格式的 
                request.seetRequstHeader('Content-Type','application/json;charset=utf-8')
                // 发送 json 格式请求体参数
                request.send(JSON.stringify(data))
            }
        	
        // 绑定状态改变的监听
        request.onreadystatechange = function () {
            // 如果请求没有完成，直接结束
            if ( request.readyState !== 4 ) {
                return 
            }
            
            // 响应状态码在 [200,300) 表示成功
            const {status,statusText} = request
            if (status>=200 && status<=299) {
                // 请求成功
                // 准备结果数据对象 reponse
                const response = {
                    data :JOSN.parse(request.response)
                    stauts,
                    statusText
                }
               // 请求成功 调用 resolve()
                resolve(response)
            } else {
               // 请求失败 调用 reject() 
                reject(new Error('requet error status is ' + status))
            }
		}
        

    })
}

```





### put delete 请求

```js
// 执行 put 请求 ， 服务器跟新数据
function testput() {
    axios({
        url:'http://localhost:8080/posts/1',
        method:'put',
        // 传的是请求体，穿的是 data
		data:{
            "id": 1,
      		"body": "some comment",
      		"postId": 1
        }
    }).then (
    	response => {
            console.log(response)
        },
        err => {
            alert(error.message)
        }
    )
}

// 执行 delete 请求 ， 服务器保存数据
function testdelete() {
    axios({
        url:'http://localhost:8080/posts/1',
        method:'PDELETE',
    }).then (
    	response => {
            console.log(response)
        },
        err => {
            alert(error.message)
        }
    )
}


------------------------------------------------
function axios({
    url,
    method='GET',
    params={},
    data={}      
}) {
    // 返回一个 promise 对象
    return new Promise((resolve,reject) => {
        
        // 处理method 转化为大写
        method = method.toUpperCase()
        
        // 处理 query 参数 (拼接到 url 上) id=1&xxx=abc
        let queryString = ''
        object.key(params).forEach(key => {
            queryString += `${key}=$params[key]}$`
        })
        if ( queryString ) {
            // 去除最后的 $
            queryString = queryString.substring(0,queryString.length-1)
            // 拼接到 url 中 , 不太严谨
            url += '? ' + queryString
        }
        
        // 执行异步 ajax 请求
        // 创建 xhr 请求
          const request = new XMLHttpRequest()
        // 打开连接（初始化请求，没有请求
            request.open(method,url,true)
        // 发送请求
        	if (method === 'GET' || method === 'DELETE') {
                request.send()
			} else if (method === 'POST' || method === 'PUT') {
                // 告诉服务器请求体的参数是 json 格式的 
                request.seetRequstHeader('Content-Type','application/json;charset=utf-8')
                // 发送 json 格式请求体参数
                request.send(JSON.stringify(data))
            }
        	
        // 绑定状态改变的监听
        request.onreadystatechange = function () {
            // 如果请求没有完成，直接结束
            if ( request.readyState !== 4 ) {
                return 
            }
            
            // 响应状态码在 [200,300) 表示成功
            const {status,statusText} = request
            if (status>=200 && status<=299) {
                // 请求成功
                // 准备结果数据对象 reponse
                const response = {
                    data :JOSN.parse(request.response)
                    stauts,
                    statusText
                }
               // 请求成功 调用 resolve()
                resolve(response)
            } else {
               // 请求失败 调用 reject() 
                reject(new Error('requet error status is ' + status))
            }
		}
        

    })
}

```

































