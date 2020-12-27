## go 中的模板

* go 中的模板都是文本文档（web 应用的是 HTML ），它们都潜入了一些称为动作(action)的指令

* 模板就是嵌入动作的文本，动作在模板文件中 ，模板引擎通过分析和执行这些文本来生出另一些文本
  
  ```go
  1. 模板文件可以有任意多个，任意文件后缀名，但是类型必须是可读的文件格式
  
  模板调用
      //  语法分析，创建一个新的同样名字的模板，然后调用它的 PaeseFiles 方法，
      //  传入单个文件时返回一个模板，多个文件，返回一个模板集合
       // 返回分析好的模板 err   return *Template 
      t，_ := template.ParseFiles("tmpl.html")
      // 将数据应用(apply) 带模板里面 ：“hello" ,生成的  HTML传给 w
      t.Execute(w , "hello")
  ```

* 执行模板
  
  ```go
  t.Execute(w,"hello")  只执行第一个模板
  t.ExecuteTemplate(w,"h2.html","hello")  选择指定的模板执行
  ```

## 使用

```go
定义
解析
渲染
```

### 定义模板文件

* 需要按照相关语法去编写

### 解析模板文件

* 定义好了模板文件之后，可以使用下面的常用方法去解析模板文件，得到模板对象

```go
// t, err := template.ParseFiles("./hello.tmpl")  ./ hello.tmpl 中的 . 是指 exe 所在的文件
func (t *Template) Parse(src string) (*Template, error)
func ParseFiles(filenames ...string) (*Template, error)
func ParseGlob(pattern string) (*Template, error)

func New(name string) *Template函数创建一个名为name的模板
```

### 模板渲染

* 就是使用数据去填充模板，当然实际上可能会复杂很多。

```go
// data 要传入的数据 Execute 执行
func (t *Template) Execute(wr io.Writer, data interface{}) error

// 对于多个文件
func (t *Template) ExecuteTemplate(wr io.Writer, name string, data interface{}) error
```
