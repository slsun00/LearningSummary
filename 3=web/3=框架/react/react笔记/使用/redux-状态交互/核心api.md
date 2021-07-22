### ***\*8.2.1. createStore()\****

1) 作用: 

创建包含指定reducer的store对象

2) 编码:

import {createStore} from 'redux'

import counter from './reducers/counter'

const store = createStore(counter)

### ***\*8.2.2. store对象\****

1) 作用: 

redux库最核心的管理对象

2) 它内部维护着:

​		state

​		reducer

3) 核心方法:

​		getState()

dispatch(action)

​		subscribe(listener)

1) 编码:

​		store.getState()

​		store.dispatch({type:'INCREMENT', number})

​		store.subscribe(render)

### ***\*8.2.3. applyMiddleware()\****

1) 作用:

应用上基于redux的中间件(插件库)

2) 编码:

import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'  // redux异步中间件

const store = createStore(

 counter,

 applyMiddleware(thunk) // 应用上异步中间件

)

### ***\*8.2.4. combineReducers()\****

1) 作用:

合并多个reducer函数

2) 编码:

export default combineReducers({

 user,

 chatUser,

 chat

})