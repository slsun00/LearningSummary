

## == 前端拦截器 ==

## axios

### cookie

```java
import cookie from 'js-cookie'

// 请求拦截器
// 此时login.js中不用传递header信息    
service.interceptors.request.use(
  config => {
    // debugger
    if (cookie.get('guli_token')) { // 如果cookie中包含guli_token
      // 则发送后端api请求的时候携带token
      config.headers['token'] = cookie.get('guli_jwt_token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
    
service.interceptors.response.use(
    response => {
    /**
       * code为非20000是抛错 可结合自己业务进行修改
       */
    const res = response.data
    if (res.code === 20000) { // 成功
        return response.data
    } else if (res.code === 23004) { // 获取用户信息失败
        // 清除cookie
        cookie.set('guli_jwt_token', '', { domain: 'localhost' })
        return response.data //不显示错误信息
    } else {
        return Promise.reject('error')
    }
}
```



### vue-store

```java
import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
import {getToken} from '@/utils/auth'


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 20000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
	// 请求错误跳转到登陆界面，这个该怎么设置呢？？？？      
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    // debugger
    if (res.code !== 20000) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

```