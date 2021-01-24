## 零值 nil

### 介绍

*   也叫 空值
*   类似于 其他语言中的 null（NULL） ，但是有不同

### 特点

*   nil 标识符间不能进行比较

    ```go
    // nil 进行比较，编译不通过
    nil == nil
    
    
    // 不同类型的 nil 不能进行比较
        var m map[int]string
        var ptr *int
        fmt.Printf(m == ptr) // invalid operation: arr == ptr (mismatched types []int and *int)
    
    
    // 相同类型的 nil 也不能比较
    	var s1 []int
        var s2 []int
        fmt.Printf(s1 == s2) //invalid operation: s1 == s2 (slice can only be compared to nil)
    ```

*    nil   可与  不可比较类型的空值 比较

     ```go
         var s1 []int
         fmt.Println(s1 == nil)   //true
     ```

     

*   nil 不是关键字或保留字

    ```go
    也就是我们可以定义一个叫 nil 的变量  // 可通过编译，不提倡这样做
    var nil int
    ```

    

*   nil 没有默认类型

    ```go
    func main() {
        fmt.Printf("%T", nil)
        print(nil)	// use of untyped nil
    }
    ```

    

*   不同类型的指针是一样的

    ```go
    func main() {
        var arr []int
        var num *int
        fmt.Printf("%p\n", arr) // 0x0
        fmt.Printf("%p", num) // 0x0
    }
    ```

    

*   不同类型的 nil 占用内存的大小可能是不一样的

    ```go
    1. 一个类型的所有的值的内存布局都是一样的，nil 也不例外，
    2. nil 的大小与同类型中的非 nil 类型的大小是一样的
    3. 不同类型的 nil 值的大小可能不同
    
    var p *struct{}
    fmt.Println( unsafe.Sizeof( p ) ) // 8
    var s []int
    fmt.Println( unsafe.Sizeof( s ) ) // 24
    var m map[int]bool
    fmt.Println( unsafe.Sizeof( m ) ) // 8
    var c chan string
    fmt.Println( unsafe.Sizeof( c ) ) // 8
    var f func()
    fmt.Println( unsafe.Sizeof( f ) ) // 8
    var i interface{}
    fmt.Println( unsafe.Sizeof( i ) ) // 16
    
    // 具体的大小取决于编译器和架构，上面打印的结果是在 64 位架构和标准编译器下完成的，对应 32 位的架构的，打印的大小将减半。
    ```

    