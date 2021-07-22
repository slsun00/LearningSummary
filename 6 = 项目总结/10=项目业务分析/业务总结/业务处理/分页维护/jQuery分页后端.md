## =========ajax=======

## 任务清单

```java
分页显示
    分页导航条
    	带关键词分页：关键词查询
	    不带关键词分页：
增
    新增 Admin
删
    单条删除 Admin
    1. 逻辑删除
    2. 删除的是当前账户
改
    更新 Admin
查  
    带关键词查询
    不带关键词查询
```



## 基础分页

### 业务流程

```java
1. 查询条件
    1. 关键词、页数、每页条数
    2.        页数、每页条数 
2. 后端
    1.查询 mapper
	    // 面向接口编程：书写查询接口 + xml 配置（书写sql语句）
    	接口： 不用实现
    	xml : 配置 PageHelper ，
	2. 执行分页 handler service
        handler
            // 调用 service
            1. 初始分页数据信息
            2. 
	    service            
            1. 开启分页，
            2. 执行 mapper 中的接口进行查询
            3. 封装 PageInfo， 存入 modelMap
3. 前端    
    1. 插件
    2. 结果展示: 遍历封装进来的的 pageInfo
        requestScope.pageInfo.list
    遍历结果
```

### 后端

### 前端

#### jsp

```java
```



## 分页导航条

### 业务流程

```java

```

### 后端

### 前端





## 问题

```java
分页中
    modelMap 是怎么回事儿？
```

