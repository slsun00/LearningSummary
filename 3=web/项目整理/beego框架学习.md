## 零星识别

```js
mian -- routers -- router.go  的 init 函数 。路由
	路由  中 URL 映射的是处理器函数  ——— controller
    
    
其中有一个函数

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {  // 这个对应的是浏览器的 get 请求 
func (c *MainController) Post()   // 前端发送的 post 请求，就会映射到这个 Post 上
  这个要跟 beego.Ctroller 的源码一致，
  RestFul 风格， 前端发送的什么请求，后端对应的什么函数
  
  
  一个 URL ———— 一个controller  --- 对应多种请求方式
  前端发送的 url  , 找到对应的额 controller  , 根据 url 的请求方式，到controller中找对应的方法
  
  使用的时候，也要注意一个 Url 对应一个 controller  , 即你要设置一个结构体，此结构体重有个匿名的 beego,controller , 结构体的方法 对应 utl 的方法，对应的结构体的引用要使用指针
    
  
  c.TplName  默认路径是views 中的  "index.tpl" 即：这个文件默认在 views 文件夹中
  		只能指定一个目录为模板目录 .只能指定一个目录为模板目录
	   1.  beego.SetViewsPath("更给后的模板所在的文件夹")  // 
    	2. 配置文件中设置  viewspath = 更给后所在的文件夹
    	3. beego.ViewsPath = "myviewpath"

    
    
```



## 数据输出

```js
user.html  相关 controller
func xxx Get(){
    // 结构体
    user := xxx{name:3}
    u.Data["User"]= user
    
    //数组
    arr := []int{}
    u.Data["Arr"] = arr
    u.TplName = "user.html"
}


// user.html  . 接收到的就是 u.Data  User : 结构体 user
// 
{{.user.name}}

//
{{range .Arr}}
// 当前传入的是 arr 的元素
{{.}}
{{end}}
```



## 静态文件

```js
默认 static 目录是静态处理的目录
```



## 获取请求数据

```js
c.GetString("id")  //  /path/?id=2
c.Input().Get("id")  // /path/?id=2
c.Ctx.Input.Param(":id")  // /path/?2
	这种传参的，在 router 中设置的就是 /path/?:id   格式固定
    
    
    
// 根据 Get 提示，可以得到很多的数据类型
    
    form 和表单中的 value 和 struct 的字段不一致，大小写，需要用 form ，或者用 _  省略
```

## xsrf防护

```js
// beego.run 之前设置
beego.BConfig.WebConfig.EnableXSRF=true
配置文件中设置
```

## view

```jd
1. beego.Bconfig.WebConfig.TemplateLeft
2. beego.TemplateLeft
```

## beego orm

### 模型定义

```js
模型	struct    	 表名
字段	struct_字段	列名

// 模型
	用作数据库数据转换和自动建表
// 模型名字和表名映射规则
    大写字母转为小写
    除了开头的大写字母，其余大写字母转为小写以后，前面都会加上 _ 
    原名称中的 _ 会保留
    AuthorUser   author_user
    Author_User  author__user
```



## 日志

```js
设置了日志级别，输出的日志是当前的级别 + 比自身高的级别
```

### 日志规范

```js
1. 不在日志中记录无用的信息
2. 能在一行显示的不要多行
3. 临时日志，开发人员为了方便调试
4. 日志格式规范，使用同一格式
5. 该打日志的地方不能少
```



### 约定

```js
日志的配置信息
使用环境的不同读物不同的配置信息 （运行模式：runmode)
本地环境日志级别使用 debug 级别，方便调试
生产环境日志级别最好不要使用太低的级别，会打印很多无用信息
```

### 必须要打日志的地方

```js
1. 抽象对象(继承)
	通用语言说
    父类 ：
    	func_name = None
		func_name()
	子类
    
    funct_name = testLog

// 就是子类继承父类的东西，出现错误，在子类中要把具体使用的什么父类的字段方法写出类

2.io 操作
	本地文件的操作 ：打印路径
    数据库的链接 ： 打印 IP 端口号 ： 库名
    请求接口 ：打印请求的方法、url 请求体 请求头
    
3. 控制语句
	中断语句 ：打印导致中断的原因
    循环语句 ： 打印过程进度信息
    分支语句 ； 打印源数据，以及满足了什么条件
    
4. 回调函数
	需要有异常的捕获，要有异常的信息
    如 celery 的回调函数
```





![image-20201124011932050](../../img_source/image-20201124011932050.png)







## 百度

```js
日志
xsrf 防护
cookie  session  token 
	应该在 cookie 里面设置什么信息？
    
    
// 文件判断怎么处理？这个是自动处理的，需要自己再写一个文件处理函数吗？？
    
```

