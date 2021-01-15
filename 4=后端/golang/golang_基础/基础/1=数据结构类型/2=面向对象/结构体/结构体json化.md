## 介绍

*   JSON (JavaScript 对象表示法)
*   一种简单的数据交换格式

## 结构体处理

### json 标签

*    结构体保存为 json 格式数据，默认使用结构体的字段名称
*   自定义 json 格式数据的字段名称
    *    添加一个 `json:" "`签，(注意有一对反引号没有显示出来，看下面例子)
    *   在`" "`中可以填入我们指定的内容

```go
type Message struct {
    Name string  `json:"name"`
    Body string  `json:"body"`
}
// 此结构体转换成 json 格式数据后的字段名就是 name 而不是Name

// 特殊用法
  
	Name string  `json:"-"`					该字段本报忽略
	Name string  `json:"name"`				该字段在 json 里使用 name 作为键名
	Name string  `json:"name，omitempty"`	该字段在 json 里使用 name 作为键名，并省略掉空值
	Name string  `json:"，omitempty"`         该字段在 json 键名使用默认值，如果为空就省略掉
		//  omitempty 前面的逗号不能省略
```







## 编码  / 序列化

*   **序列化**
    
*   **仅首字母大写的字段才可以被序列化，导出到 JSON 输出中**
    
*   可以表示为有效 JSON 数据结构

    *   Json 仅支持字符串作为键值
    *   map 类型必须采用格式 ： map[string]T ( T  json 包支持数据类型  )
    *   指针被编码为其指向的值（nil 会转为 null**）**

*   不能作为 Json 数据

    *   通道、复数、函数类型，不能被编码
    *   循环数据会导致 Mashal 无限循环

*   demo

    ```go
    // 实例化结构体
    m := Message{
        "lili",
        "hello",
    }
    
    // Marshal(v interface{}) ([]byte, error)
    b, err := json.Marshal(m)
    if err!=nil {
        fmt.Println("编码失败")
        return
    }
    fmt.Println(b)
    ```

    

## 解码 / 反序列化

*   demo

    ```go
    //go的 k 结构体存储反序列化来的数据
    var k Message
    
    // Unmarshal(data []byte, v interface{}) error
    err = josn.Unmashal(b,&k)
    if err != nil {
        fmt.Println("b中有合法的 json 数据，可以放入 k中")
    }
    ```

*   json 的数据结构 和 go 提供的结构不符合

    ```go
    var b = []byte(`{"Name":"Bob","Food":"Pickle"}`)
    var m Message
    err := json.Unmarshal(b, &m)
    // food 字段将会被忽略，只填充 name 字段
    // 可以用来从 json 数据中筛选特点的字段（b m 共同有的字段）
    ```

## 查询数据结构

*   go 的 json 包，使用 map[sting]interface{} 和 interface{} 存储 json 数据对象和数组
*   反序列化是将 json 数据放入到一个 inteface{} 值中

### 1.  jsons  与 go 数据对应关系

| go      | Json     |
| ------- | -------- |
| bool    | booleans |
| float64 | numbers  |
| string  | strings  |
| nil     | null     |



*   demo

    ```go
    // 该方法可以安全访问 
    
    
    // json 数据格式
    b := []byte(`{"Name":"Wednesday","Age":6,"Parents":["Gomez","Morticia"]}`)
    // 空接口存放 unmarshal 数据
    var f interface{}
    err := json.Unmarshal(b, &f)
    if err != nil {}
    // f = map[string]interface{}{"Name":"Wednesday","Age":6,"Parents":["Gomez","Morticia"]}

    // 将存储数据的 k , 通过断言转换成 map[string]interface
    m := k.(map[string]interface{})
    
    //遍历 m ,进行断言，判断数据类型
    for k, v := range m {
        switch vv := v.(type) {
        case string:
            fmt.Println(k, "is string", vv)
        case float64:
            fmt.Println(k, "is float64", vv)
        case []interface{}:
            fmt.Println(k, "is an array:")
            for i, u := range vv {
                fmt.Println(i, u)
            }
        default:
            fmt.Println(k, "is of a type I don't know how to handle")
        }
    }
    ```
    
    

















































































































































































































































































