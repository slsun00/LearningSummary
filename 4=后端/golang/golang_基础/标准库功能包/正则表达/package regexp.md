# 1.package regexp

* 位置：golang标准文库的 regexp 包
* 采用RE2语法，与python一致

## 概念

*   正则表达式
    *   普通字符（例如字符 a 到 z）以及特殊字符（称为"元字符"）构成的文字序列
    *   可以是单个的字符、字符集合、字符范围、字符间的选择或者所有这些组件的任意组合。



# golang

```go
// 表达式无法解析，就会产生panic,
// It simplifies safe initialization of global variables holding compiled regular expressions. 
func MustCompile(str string) *Regexp

```


