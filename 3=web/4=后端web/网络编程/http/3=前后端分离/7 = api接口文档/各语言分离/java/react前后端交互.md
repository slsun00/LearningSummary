## 概述

```js
前后端分离 
	
  我从后端拿的数据  -- 》 state 
  setState  -- 》 表单    // 自动更新到表单
```

## axios 的 data 和 param

```java
```





## == 前端 ==

## axios

### 实例封装(工具)

```java
// 文件目录 common/utils/axios/request.js
// 创建axios实例
const service = axios.create({
//   baseURL: process.env.BASE_API, // api 的 base_url
  baseURL: baseURL,
  timeout: 5000 // 请求超时时间
})

// request拦截器
// service.interceptors.request.use()

// response 拦截器
service.interceptors.response.use(
  response => {

    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
```

## 请求发送接收

### 路径参数

#### 前端

```js
  getCourseInfoById(id) {
    return request({

       /*
       	请求路径上就是
       	/admin/edu/course/course-info/id
       */ 

      url: `/admin/edu/course/course-info/${id}`,
      method: 'get'
    })
  },
      
      
// 接收      
```

#### 前端接发

```java

```



### data

#### 前端

```js
// api/test.js

import request from '../common/utils/axios/request'

const testApi = {

  saveCourseInfo(courseInfo) {
    return request({
      url: '/admin/edu/course/save-course-info',
      method: 'post',
      data: courseInfo     // 注意这个在后端是啥到哪里去了
    })
  },

 // params

}
```

#### 前端接发

```java

```



### params

#### 前端

```java
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/edu/course/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
```

#### 前端接发

```java

```

