## 1. 基础知识

```go
http 请求和响应是根据 Request 结构体来处理的

http 请求 是利用的 request 结构图
http 响应 是利用的 requestWriter 结构体

```



## 2. http -请求

### 请求行

### 请求头 

*    URL

```go
// request 结构体中的 URL 字段用于表示请求行中包含的 URL
URL 基本格式
scheme://[userinfo@]host/path[?query][#fragment]
scheme:opaque[?query][?fragment]

// 例子
浏览器输入 ：http://localhost:8080/hello?username=admin&password=123456
服务器     ： http.HandleFunc("/hello",handler)
其中 func handler(w http.ResponseWriter,r *http.Rquest)

// patn 字段
r.URL.Path : 得到 /hello ( 即URL )

// RawQuery 字段
r.URL.RawQuery : username=admin&password=123456
```

*   信息

```go
type Header map[string][]string
	func Get Set Add Del Write

// 请求头中所有信息
r.Header

// 获取某个具体属性的值，
r.Header["Accept-Encoding"]  // 得到一个字符串切片
r.Header.Get("Accept0Encoding")  // 得到一个字符串的第一个值，多值逗号分开
```



### 请求体的信息

```go
// request 结构体中的 Body 字段，该字段类型是 io.ReadCloser 接口
```

#### 表单操作内容 - get /post

*   概念

    ```go
    GET 请求没有请求体，需要在 html 页面中创建一个 form 表单，
    通过指定 method = "post" 来发送 POST 请求
    ```

*   获取请求体信息  - - 表单中的信息

*   表单信息

    ```go
    // 表单信息
    <form action = "http://localhost:8080/getbody" method="POST">
    	用户名 ：<input type="text" name="username"><br/>
    	密码 ： <input type="password" name="password" <br/>
    	<input type="submit">
    </form>
    ```

*   获取表单信息

    ```go
    // 服务器应设置的代码
    
    func Handler(w http.ResponseWriter,r *http.Request) {
        // 获取内容长度
        length := r.ContentLength
        // 创建字节切片，存储信息
        body := make([]byte,length)
        // 读取请求体的内容读取到 body 中
        r.Body.Read(body)
        fmt.Fprintln(w,"请求体的内容是："，string(body))
    }
    func main(){
        http.HandlerFunc("/getbody",handler)
        http.ListenAndServe(":8080",nil)
    }
    
    ---------------------------------------------------------------
    // 浏览器输入 
    	填写好username 和 password , 点击 submit 就得到结果
    // 结果
    	请求体中的内容是：username=hanzong&password=666666
    ```

#### 请求参数 - url和表单

*   使用

    ```go
    Request 中的字段以及方法
    获取
    	请求 URL 后面的请求参数
    	form 表单中提交的请求参数
    // 字段
    Form 		PostForm 		MutipartForm
    FormValue 	PostFormValue
    
    ```

*   form

    ```go
    Form
    // URl 字段的 query 参数和 POST 或 PUT 的表单数据
    // 能得到表单中的请求参数 和 URL 里面的请求参数 ，如果两者的参数名称是一样的，两者都输出。表单参数位于输出结果前面
    
    func handler(w http.ResponseWriter,r *http.Request){
        // 获取请求体内容的长度
        len := r.ContentLength
        // 创建切片保存
        body := make([]byte,len)
        // 读取的内容到新建的 body 中
        // Body 只能解析一次，解析后 body 中内容为空，
    	// 如果和解析表单同时存在，就会导致，解析表单是空的切片
        r.Body.Read(body)
        // 显示请求体中的内容
        fmt.Fprintlln(w,"请求体中的内容"，string(body))
        // 解析表单
        r.ParseForm()
        // 获取请求参数：请求参数已经存在了 r.Form 中 r.Form[]??
        fmt.Fprintln(w,"请求的参数为"，r.Form)
        // r.ParseForm 和 r.form 是配套使用的，客户端使用，会忽略请求体中的本字段,使用 Body 替代
            
    }
    
    PostForm
    // 只获取表单中的数据
    // postform 只支持 application/x-www-form-urlencoded编码 ，
    // 这是 form 表单 enctype 属性默认值 ,文件用下面那个
    
        // 获取请求参数：请求参数已经存在了 r.PostForm 中
        fmt.Fprintln(w,"请求的参数为"，r.PostForm)
    
    multipartform
    // 实现上传文件 ：form 表单的 enctype 属性值设置为 multipart/form-data 
        // 获取请求参数：请求参数已经存在了 r.MultipartForm 中
        fmt.Fprintln(w,"请求的参数为"，r.MultipartForm)
    ```

*   value

    ```go
    FormValue
    // 快速获得一个请求参数，会自动调用 ParseForm 和 ParseMultipart
    
    func handler(w http.ResponseWriter,r *http.Response){
        // 自动解析，获取请求参数
        // username 就是你查询的参数，得到其对应的值
        fmt.Fprintln(w,"q请求参数为："，r.FormValue("username"))
    }
    
    MultipartForm
    // 对于上传文件 ，获取对应的表单数据，
    // 需要使用 ParseMutipartForm 方法 和 MultipartForm 字段
    
    func handler(w http.ResponseWriter,r *http.Request) {
        // 解析表单,缓存大小
        r.ParseMultiForm(1024)
        r.MultipartForm.File["phote"][0]
        file,err := fileHeader.Open()
        if err == nil {
            data,err := ioutil.ReadAll(file)
            if err == nil {
                // 打印变淡数据
                fmt.Fprintln(w,string(data)
            }
        }
    }
    ```

    

## 3. http-响应

```go
// 主要是利用 http.ResponseWriter 接口

注意看下报文信息
报文信息注意 ： Content-Type
```

*    给客户端响应一个字符串

     ```go
     //  处理器端中的代码
     
     func handler(w http.ResponseWriter, r *http.Request) {
         w.Write([]byte("你的请求我已经收到"))  // 浏览器中的结果 : 你的请求我已经收到
     }
     ```

*   给客户端响应一个 HTML 页面

    ```go
    // 处理器端中的代码
    
    func handler(w http.ResponseWriter, r *http.Request) {
        html := `<html>
        <head>
            <title>测试响应内容为网页</title>
            <meta charset="utf-8"/>
        </head>
        <body>
            我是以网页的形式响应过来的！
        </body>
    </html>`
        w.Write([]byte(html))
    }
    ```

*    给客户端响应JSON格式的数据

     ```go
     // 处理器端代码
     
     func handler(w http.ResponseWriter, r *http.Request) {
         //设置响应头中内容的类型
         w.Header().Set("Content-Type", "application/json")
         user := User{
             ID:       1,
             Username: "admin",
             Password: "123456",
         }
         // 将user转换为json格式
         json, _ := json.Marshal(user)
         // 将 json 格式的数据响应给客户端看
         w.Write(json)
     }
     // 浏览器中的结果  {"ID":1,"Username":"admin","Password":"123456"}
     ```

*    让客户端重定向

     ```go
     // 处理器端代码 重定向redire
     func handler(w http.ResponseWriter, r *http.Request) {
         // 设置响应头中的 location 属性 ，必须要在WriteHeader之前进行，
         // 所以下面两个代码顺序不能更改
         w.Header().Set("Location", "https://www.baidu.com")
         w.WriteHeader(302)
     }
     ```



## 4. 模板引擎—处理响应数据

### 1.模板引擎使用步骤

*    语法分析 
     *    对文本格式的模板源进行语法分析，创建一个经过语法分析的模板结构，
     *    模板源既可以是一个字符串，也可以是模板文件中包含的内容 
*    数据传递
     *   经过语法分析的模板
     *   将 responsewriter 和模板所需要的动态数据传递给模板引擎，被调用的模板引擎会把经过语法分析的末班和传入的数据结合起来，生成最终的 HTML , 并将这些 HTML 传递给 ResponseWriter.

### 2.创建模板文件

```go
<html> 
    <head>
        <meta charset="UTF-8"/>
    </head>
    <body>
        我是模板文件内容
        后台传过来的数据是：{{.}}  //浏览器中显示 ：Hello World!
    </body>

</html>
```

### 3.处理器中触发模板引擎

```go
通过模板处理的数据给浏览器

//==============================================
// 一个页面
func handler(w http.ResponseWriter, r *http.Request) {
    // 语法分析，解析模板文件
    // 语法分析可用 must 自动处理异常  t := template.Must(template.parseFiles("index,html"))
    t, _ := template.ParseFiles("index.html")
    
    // 传递数据，执行模板  [ˈeksɪkjuːt]
    t.Execute(w, "Hello World!")
}

//==============================================
// 多个页面
func handler(w http.ResponseWriter, r *http.Request) {
    // 语法分析，解析模板文件
	t := template.Must(template.parseFiles("index,html","index2.html"))
    // 传递数据，执行模板 指定的页面模板
    t.ExecuteTemplate(w, "index2.html"," index2.html 中的 Hello World!")
}
```

