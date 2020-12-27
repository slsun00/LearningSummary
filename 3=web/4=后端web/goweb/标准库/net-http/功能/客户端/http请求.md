## 4.获取HTTP 请求

### 请求URL

```go
func handlerURL(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "发送请求的请求地址是：", r.URL.Path)
    fmt.Fprintln(w, "发送请求的请求地址的查询字符串是：", r.URL.RawQuery)

}

func main() {
    // 指定处理指定请求的处理器
    http.HandleFunc("/url", handlerURL)
    
    // 指定路由
    http.ListenAndServe(":8080", nil)
}
```

### 请求头的信息

```go
func handlerHeader(w http.ResponseWriter, r *http.Request) {
    
    fmt.Fprintln(w, "请求头中的所有信息有：", r.Header)
   	//  得到所有的 header 信息
    
	fmt.Fprintln(w, "请求头中的Accept-encoding %v 信息有：", r.Header["Accept-Encoding"])
     // [gzip, deflate, br] , 得到的是一个字符串切片
    
	fmt.Fprintln(w, "请求头中的Accept-encoding %v 属性值为：", r.Header.Get("Accept-Encoding"))
    // gzip, deflate, br , 得到的是字符串形式的值，多个值使用逗号分隔 
	// 常用的一个，就是防盗链，
}


func HeaderDemo() {
    http.HandleFunc("/hollo", handlerHeader)
    http.ListenAndServe(":8080", nil)
}


1. 使用 request 结果中的 header 字段获取
2. header 类型为 header类型。
3. header类型是一个 map[string][]string
```

### 请求体中的信息

```go
//  由于GET请求没有请求体，所以我们需要在HTML页面中创建一个form表单，通过指定method=”post”来发送一个POST请求。 

func handlerBody(w http.ResponseWriter, r *http.Request) {
    //获取请求体内容的长度
    len := r.ContentLength
    //创建byte切片
    body := make([]byte, len)
    //=====================================================
    //将请求体中的内容读到body中
    // body 只能解析一次，解析后 body 中内容为空，
	// 如果和解析表单同时存在，就会导致，解析表单是空的切片
    r.Body.Read(body)
    //在浏览器中显示请求体中的内容
    fmt.Fprintln(w, "请求体中的内容有：", string(body))
	//====================================================
}

func BodyDemo() {
    http.HandleFunc("/body", handlerBody)
    http.ListenAndServe(":8080", nil)
}
```

### 请求参数

```go
REQUEST 结构图的字段以及方法获取 URL 后面的请求参数以及 form 表单中提交的请求参数
url.values map[string][]string
```



*   form 字段

    ```go
    // 如果对 form 表单做一些修改，在action属性的URL后面也添加相同的请求参数
    func handler(w http.ResponseWriter, r *http.Request) {
        //解析表单
        r.ParseForm()
        //获取请求参数
        fmt.Fprintln(w, "请求参数为：", r.Form)
    }
    
    //================================================
    1) 类型是url.Values类型，Form是解析好的表单数据，包括URL字段的query参数和POST或PUT的表单数据
    2) Form字段只有在调用Request的 ParseForm 方法后才有效。在客户端，会忽略请求中的本字段而使用Body替代
    3) 获取的表单中提交的请求参数（username和password）
    4) 对form表单做一些修改，在 action 属性的 URL 后面也添加相同的请求参数
    	表单中的请求参数username和URL中的请求参数username都获取到了，
    	而且表单中的请求参数的值排在URL请求参数值的前面
    
    在执行r.Form之前一定要调用ParseForm方法
    ```

*   postform 字段

    ```go
    // 类型也是 url.Values 类型,只获取表单中的请求参数
    
    func handler(w http.ResponseWriter, r *http.Request) {
        //解析表单
        r.ParseForm()
        //获取请求参数
        fmt.Fprintln(w, "请求参数为：", r.PostForm)
    }
    
    // ==============================
    1) postForm字段只支持application/x-www-form-urlencoded编码，如果form表单的enctype属性值为multipart/form-data，那么使用PostForm字段无法获取表单中的数据，此时需要使用MultipartForm字段 
    2) form表单的enctype属性的默认值是application/x-www-form-urlencoded编码，实现上传文件时需要讲该属性的值设置为multipart/form-data编码格式
    ```

    

*   formvalue

    ```go
    func handler(w http.ResponseWriter, r *http.Request) {
        //获取请求参数
        fmt.Fprintln(w, "请求参数username的值为：", r.FormValue("username"))
    }
    //===========================================
    a) 可以通过FormValue方法快速地获取某一个请求参数，该方法调用之前会自动调用ParseMultipartForm和ParseForm方法对表单进行解析
    ```

    

*   postformvalue

    ```go
    func handler(w http.ResponseWriter, r *http.Request) {
        //获取请求参数
        fmt.Fprintln(w, "请求参数username的值为：", r.PostFormValue("username"))
    }
    
    //============================
    a) 可以通过PostFormValue方法快速地获取表单中的某一个请求参数，该方法调用之前会自动调用ParseMultipartForm和ParseForm方法对表单进行解析 
    ```

    

*   multipartform

    ```go
    func handler(w http.ResponseWriter, r *http.Request) {
        //解析表单
        r.ParseMultipartForm(1024)
        //打印表单数据
        fmt.Fprintln(w, r.MultipartForm)
    }
    //=======================================
        1)为了取得multipart/form-data编码的表单数据，我们需要用到Request结构的ParseMultipartForm方法和MultipartForm字段，我们通常上传文件时会将form表单的enctype属性值设置为multipart/form-data 
        2)MuiltipartForm字段的类型为 *multipart.Form，multipart包下Form结构的指针类型    
    ```

*   获取上传的文件

    ```go
    // MultipartForm 方法
    func handler(w http.ResponseWriter, r *http.Request) {
        //解析表单
        r.ParseMultipartForm(1024)
    
        fileHeader := r.MultipartForm.File["photo"][0]
    
        file, err := fileHeader.Open()
    
        if err == nil {
            data, err := ioutil.ReadAll(file)
            if err == nil {
                fmt.Fprintln(w, string(data))
            }
        }
    }
    
    
    // FormFile  快速的获取被上传的文件 
    // 只能处理上传一个文件的情况 , 在 net/http 包
    
    func handler(w http.ResponseWriter, r *http.Request) {
    
        file, _, err := r.FormFile("photo")
    
        if err == nil {
            data, err := ioutil.ReadAll(file)
            if err == nil {
                fmt.Fprintln(w, string(data))
            }
        }
    
    }
    ```


## 总结

```go
// r *http.Request  就是客户端发送过来的请求 ，所以通过 request 的字段进行 request 分析
// 可以查文档，查看 这个结构体里面有什么内容
func handlerHeader(w http.ResponseWriter, r *http.Request) {}

type request struct {
    URL *url.URL        // r.URL.Path  r.URL.RawQuery
    Header Header		// 请求头信息
    
    ContentLength int64     // 请求体内容长度 ，注意条件
    Body io.ReadCloser  	// r.Body.Read([]byte) 读取到 []byte 中
}



例如 ：http://localhost:8080/hello?username=admin&password=123456

请求 URL
    1.path 字段
        获取请求的 URL 
        通过 r.URL.Path 只能得到 hello
    2.RawQuery 字段
        获取请求的 URL 后面 ？ 后面的查询字符串
        通过 r.URL.RawQuery : username=admin&password=123456

请求头
    3. Header
        type Header map[string][]string
        r.Header						// 所有的请求头
        r.Header["Accept-Encoding"] 	  // 得到的是一个字符串切片
        r.Header.Get("Accept-Encoding")	  // 得到的是字符串形式的值，多个值使用逗号分隔

请求体
	body    
		// body 只能解析一次，解析后 body 中内容为空，
		// 如果和解析表单同时存在，就会导致，解析表单是空的切片
```

