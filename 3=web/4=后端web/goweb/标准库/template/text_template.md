### 模板关联

```GO
每一个模板在创建时都要用一个字符串命名。同时，每一个模板都会和0或多个模板关联，并可以使用它们的名字调用这些模板；这种关联可以传递，并形成一个模板的名字空间。

一个模板可以通过模板调用实例化另一个模板；参见上面的"template" action。name必须是包含模板调用的模板相关联的模板的名字
```

### 模板嵌套、包含动作

```go
当解析模板时，可以定义另一个模板，该模板会和当前解析的模板相关联。模板必须定义在当前模板的最顶层，就像go程序里的全局变量一样。
这种定义模板的语法是将每一个子模板的声明放在"define"和"end" action内部


```

## 动作

### 分类

```go
条件动作 	if   
迭代动作     range
设置动作   	with
包含动作    template
定义动作    define
块动作     block
```

### 格式

```go
 {{ 和 }} 作为左右标签，没有其他的标签符号

. 来访问当前位置的上下文   // .  就是当前页面由后端穿过来的数据 ，输出子元素

$ 来引用当前模板根级的上下文  //，  $ 表示当前页面

// 这个就是在 range 中使用循环以外的变量，可以实现跳出当前上下文，使用别处(后台)的上下文
$. 引用模板中的根级上下文     

// ------------------
// dot 先从模板中找上一级，找不到就到后端去找，
{{range .arrs1}}   // 上一级是 后端的arrs, 
	{{.name}}     //上一级是 arrs
{{end}}

// $ 这个找到最后，只能在当前模板中找，不想 dot 最终能找到 后端
{{range $i,$v  := .arrs2}}  // 上一级就是当前模板，不会找到后端
	{{$i}}  // 上一级是 range 中的 $i
	{{$.name}}  // 一个循环里面使用根级的数据(后端)，因为循环里使用 dot ,上级是 range
{{end}}
```



### 注释

```go
注释
    {{/* a comment */}}
     执行的时候被忽略，可以多行，按时不能嵌套。必须紧贴分解符始止
    
    {{ pipline}}
    pipeline 的值的默认文本会被拷贝到输出里

```

###   if - else

```go
// 条件动作

{{ if arg }}  // 如果 arg 非 empty 出 T1 执行结果，不改变 dot 的值
    T1   
{{ else }} // 如果 arg 是 empty ,输出 T0 ，else 语句可省略
    T0 
{{end}}


// if - else 链条 else action 里面可以包含另一个 if
{{ if arg1 }}  // 如果 arg 非 empry 出 T1 执行结果，不改变 dot 的值
    T1   
{{ else if arg2}} // 如果 arg 是 empty ,输出 T2 ，省略则不输出
    T2 
...
{{end}}

// ------------------------------------
```

###    range - 遍历  

```go
// 迭代动作
arg  : 数组 切片 字典  通道
    arg 长度为 0 ，不会有输出

{{range arg}}   //  arg 非 empty ，
    遍历的元素是 {{.}}  // dot 依次被设置为 arg 的每个成员元素，并执行语句
    执行的字段 {{.name}} 指定字段名输出

{{else}}       // arg 为empty,  不修改 dot 的值，执行下面语句
    <li> </li>
{{end}}


// 遍历 map 数组 ，就是服务端发过来的是一个 map ，在html 界面直接遍历
// 只有一个 参数就是 value 的值
{{range $index ,$value := .}}
    index 下表索引  value  值
{{end}}
```

### with - else

```go
// 设置动作 

{{ with arg }}   // arg 不是 empty ,将  dot 设置为 arg ，执行下面语句，但不修改外面的 dot
  	这里语句中的 dot 仍旧是 with 语句中 dot 的上下文

{{else}}        // arg 为 empty ,不改变 dot 执行下面语句
   显示的是后天穿过来的真实数据 ：{{.}}

// 把后台传过来的值进行修改


```

###  template

* 包含动作
* 允许用户在一个模板里面包含另一个模板

```go
{{template "name“ arg}}
    执行名为 name 的模板，并提供参数 arg 
        arg 省略 则为 nil 
        arg .   当前页面中得到的数据，传入 name 模板
        
        （就是执行 name 模板的时候，同时传入 name 的需要的参数）
    模板不存在输出为 ”“
    name 的双引号别丢了


```

###  define

```go
// 定义动作
布局 layout
    指的是Web设计中可以重复应用在多个页面上边的固定模式
    为了构建协调一致的用户界面，需要 web 展示相似的界面


// 定义动作
{{ define "action" }}
{{end}}

// 复用使用
{{template "action"}}

// 解析
当前页面解析以后，执行的时候后要指定你自定义的模板
t.ExecuteTmpalte(w,"action","")


// 在不同模板文件中定义同名的模板 ，执行哪个模板就看解析的是哪个源文件
{{define "model"}}
    {{template "content"}}  // htnl1 html2 中均定义的有
   
{{end}}

//html1 html2 都不没有解析，那就执行块动作
{{block "content" .}}  // template 执行不了，就说明模板不存在，执行下边的
{{end}}
```

###  block

```go
// 块动作
go 1.6引入

允许用户定义一个模板，并立即使用，相当于设置了一个默认的模板    

{{block arg}}
    模板 arg 找不到，就显示此处语句
{{end}}
```



## 参数

### 空 empty

```js 
empty  --  就相当于正常的 false
    false 、0 、 任意类型的 nil 、 interface
    任意长度为 0 的 字符串、数组、切片、字典

```

### 数据类型

```go
go中的 
    布尔值 字符串 字符 整型 浮点数 虚数 复数  ===》无类型字面常数
    nil                                   ===》 go 的无类型 nil 值



{{"string"}} // 一般 string ，支持转义
{{`raw string`}} // 原始 string ， 不会转义
{{'a'}} // byte  , 只是显示出来 ascii 码
{{print nil}} // nil 也被支持  ，只是使用 {{nil}} 会报错


// 支持以下类型 、 返回值是以下类型的值
变量 ： 
    变量名 结果为变量的值        $name

结构体 ：
    字段名 ：以句点开始,支持链式调用   .Field  .Filed1.Filed2

字典 ：
    键名：以句号开始（支持链式）   .key
    键也必须是字母和数字构成的标识字符串，但不需要以大写字母起始；

方法
    无参数方法：以句号开始        .Method
    方法的返回值                .Method()
         该方法必须有1到2个返回值，如果有2个则后一个必须是error接口类型；
         如果有2个返回值的方法返回的error非nil，模板执行会中断并返回给调用模板执行者该错误；

// 可以同个类型，也可以不同类型进行配合链式调用
方法 字段 键 配合 Field1.Key1.Method1.Field2.Key2.Method2；
变量上使用        $x.Field1.Key1.Method1.Field2.Key2.Method2；



函数
    无参数的函数名，如：fun
    执行结果是调用该函数的返回值 ，对返回值的要求和方法一样  

// -------------------------------------
 上面某一条的实例加上括弧（用于分组）
  执行结果可以访问其字段或者键对应的值：
      print (.F1 arg1) (.F2 arg2)
      (.StructValuedMethod "arg").Field

//总结
arguments 可以是任何类型
    如果是指针，在必要时会自动表示为指针指向的值；
    如果执行结果生成了一个函数类型的值，如结构体的函数类型字段，该函数不会自动调用，但可以在if等action里视为真。                如果要调用它，使用call函数

Argument
    执行结果是argument的执行结果
.Method [Argument...]
    方法可以独立调用或者位于链式调用的末端，不同于链式调用中间的方法，可以使用参数；
    执行结果是使用给出的参数调用该方法的返回值：dot.Method(Argument1, etc.)；
functionName [Argument...]
    执行结果是使用给定的参数调用函数名指定的函数的返回值：function(Argument1, etc.)；
```

## 变量 $

```go
// 格式
$variable := pipeline
    $variable 变量名，声明变量的 action 不会产生任何输出

0 可视子字母、数字、构成的字符串 ， 也可是 空的
1. 变量的作用域直到声明它的控制结构 ( if with range ) 的  end 为止
2. 不在控制结构里声明，会直接到模板结束
3. 子模板的调用不会从调用它的位置（作用域）继承变量
4.模板开始执行时， $ 会设置传递给 Execute 方法的参数，即： dot 的初始值
```

## 管道

```go
// 可以是上下文的变量输出
{{.Age}}

// 是多个有序串联起来的参数、函数、方法 ， 工作方式和 Unix 的管道相似
{{p1 | p2 | p3}}  
{{ 123 | sprintf "%.2f" }}
    允许用户将一个参数传递给另一个参数，各个参数之间用 | 分割
    在一个链式的pipeline里，每个command的结果都作为下一个command的最后一个参数。
    pipeline最后一个command的输出作为整个管道执行的结果。
    command的输出可以是1到2个值，
        如果是2个后一个必须是error接口类型。
        如果error类型返回值非nil，模板执行会中止并将该错误返回给执行模板的调用者。


// 注意
    不使用管道符的command序列也可以视为一个管道
```

## 函数

### 基础

```go
1. Go的模板引擎函数都是受限制的:
    尽管这些函数可以接受任意多个参数约输人，
    但它们只能返回一个值，或者返回一个值和一个错误
```

### 自定义模板函数

```go
1. 创建一个名为 FuncMap 的映射，
    映射的键 ： 函数的名字，
    映射的值 ： 实际定义的函数
2. 将 FuncMap 与模板进行绑定


// --------------------------------------------------------------------------
    func formatDate(t time.Time) string {
        layout := "2006-01-02"
        return t.Format(layout)
    }
	// 以下是在处理器中运行的
    // 映射
    funcMap := template.FuncMap{
        "fdate" : formatDate,
    }
    // 模板创建 ,将 funcMap 传递给模板 ，即完成绑定
    t := template.New("tmpl.html").Funcs(funcMap)

	// 模板分析
    t,- = t.ParseFiles("tmpl.html")
    t.Execute(w,time.Now())


// 使用
管道
    <div> the date/time is {{ . | fdate }} </div>
函数调用  : dot 作为参数传给 fdate
    <div> the date/time is {{ fdate . }} </div>
```

### 全局函数

```go
print		 即   fmt.Sprint
printf		 即   fmt.Sprintf
println		 即   fmt.Sprintln

（）括号
	改变优先级别

and
    函数返回它的第一个empty参数或者最后一个非空参数；
    就是说"and x y"等价于"if x then y else x"；所有参数都会执行；
	只要一个为空，则整体为空，不为空，则返回最后一个

or
    返回第一个非empty参数或者最后一个参数；
    亦即"or x y"等价于"if x then x else y"；所有参数都会执行；
	多个值的，只要有一个非空，就返回第一个非空的值，否则返回空

not
    返回它的单个参数的布尔值的否定

len
	返回它的参数的整数类型长度 {}
	支持 string slice array map chan 
	{{.arr | len}}  

index
    执行结果为第一个参数以剩下的参数为索引/键指向的值；
    如"index x 1 2 3"返回x[1][2][3]的值；每个被索引的主体必须是数组、切片或者字典。


html
    返回其参数文本表示的HTML逸码等价表示。

urlquery
    返回其参数文本表示的可嵌入URL查询的逸码等价表示。
	特殊符号，需要使用 URL 编码

js
    返回其参数文本表示的JavaScript逸码等价表示。
call
    执行结果是调用第一个参数的返回值，该参数必须是函数类型，其余参数作为调用该函数的参数；
    如"call .Y 1 2"等价于go语言里的dot.Y(1, 2)；

	.Y 需要时函数类型，
	call 调用的函数，返回值个数有限制
		1 个 
		2 个  ，第 2 个需要是 error 接口类型 ， 返回值的方法返回的error非nil，模板执行会中断

   


//-----------------------------------------------------------------------------------
{{print "aaa"}}  

    t.Data["func_test"] = test
    func test() string {return "hello" }
//    前端
    {{call .func_test}}
```

### 二元比较运算符

```go
// 布尔函数会将任何类型的零值视为假，其余视为真。
// 一般配合在 if 中使用

eq      如果arg1 == arg2则返回真
ne      如果arg1 != arg2则返回真
lt      如果arg1 < arg2则返回真
le      如果arg1 <= arg2则返回真
gt      如果arg1 > arg2则返回真
ge      如果arg1 >= arg2则返回真




// 适用
比较函数只适用于基本类型（或重定义的基本类型，如"type Celsius float32"）。
它们实现了go语言规则的值的比较，但具体的类型和大小会忽略掉，
    任意类型有符号整数值都可以互相比较；
    任意类型无符号整数值都可以互相比较；等等。
    但是，整数和浮点数不能互相比较。

//=------------------------------------------------------------
{{if eq .age 18}}    // if age == 18
{{end}}

// 注意
// eq（只有eq）可以接受2个或更多个参数，它会将第一个参数和其余参数依次比较，返回下式的结果
//这里需注意，不做惰性运算，所有参数都会执行
    eq arg1 rg2 arg3 arg4 ...
	即 ： arg1 和 2 3 4 .. 分别进行比较
```
