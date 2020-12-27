

*   对于两种形式还是不理解怎么操作
    *   基本形式和元素外置形式。这两种貌似还是不清楚怎么操作的
*   对于一体式和分离式。也是有问题，不明白两种方式是怎么进行操作的
    *   一体式： 一个数组的前三个元素放置长度等信息
    *   分离式：      数组只放置数据信息

```go
package main

import (
	"errors"
	"fmt"
)

// 有问题 Append

// 容量
const maxSize int = 20

// 这里使用切片，可以动态分配，防止出现数据溢出的情况
type List struct {
	Element   []interface{} //存储线性表元素的数组
	len       int           // 链表长度
	maxLength int
}

// 初始化线性表
func CreateList() *List {
	return &List{
		maxLength: maxSize,
		len:       0,
		Element:   make([]interface{}, 0, maxSize),
	}
}

//判断是否为空
func (this *List) IsEmpty() bool {
	if this.len == 0 {
		fmt.Println("空的")
		return true
	}
	fmt.Println("非空")
	return false
}

// 链表是否满了
func (this *List) IsFull() bool {
	if this.len == this.maxLength {
		fmt.Println("满了")
		return true
	}
	fmt.Println("没有满")
	return false
}

// 判断索引是否 是否越界，越界为 true
// 下标从 0 开始的 ，位置从 1 开始的 即 location = index +1
func (this *List) IndexOver(index int) bool {
	if index < 0 || index > this.len-1 {
		return true
	}
	return false
}

// 获取相关位置的数据
func (this *List) GetNode(location int) (interface{}, error) {
	index := location - 1
	if ok := this.IndexOver(index); ok {
		return nil, errors.New("索引不在线性表范围内")
	}
	return this.Element[index], nil
}

// 删除指定位置 node 数据 。之后的元素前移
func (this *List) DeleteNode(location int) (interface{}, error) {

	//位置索引
	// location = index + 1
	index := location - 1

	// 虽然下面的索引可以判断出来是否是空链表
	// 如果用索引的话，会增加索引的查找理解逻辑难度，
	// 所以一个函数就设置一个功能，防止增加理解逻辑
	if ok := this.IsEmpty(); ok {
		return nil, errors.New("空表，没有可删除的数据")
	}
	// 索引是否合理
	if ok := this.IndexOver(index); ok {
		return nil, errors.New("删除的索引不在线性表范围内")
	}

	delNode := this.Element[index]

	// 遍历链表，后面的元素进行向前移动
	for {
		if index == this.len-1 {
			this.Element = this.Element[:this.len-1] // 为啥要这样？防止碎片化吗？
			this.len--
			return delNode, nil
		}
		this.Element[index] = this.Element[index+1]
		index++ // index 就是在 index+1 的位置
	}
}

// 弹出末尾元素
func (this *List) Pop() (interface{}, error) {
	if ok := this.IsEmpty(); ok {
		return nil, errors.New("空表没有数据可以删除")
	}
	popNode := this.Element[this.len-1]
	this.Element = this.Element[:this.len-1]
	this.len--
	return popNode, nil
}

// 添加元素
// 末尾添加
func (this *List) Append(data interface{}) error {
	if ok := this.IsFull(); ok {
		return errors.New("线性表已经满了，无法添加数据")
	}
	// 使用this.Element[this.len] = data  感觉更好哈
	this.Element = append(this.Element, data)
	this.len++
	return nil
}

// 中间位置添加
func (this *List) Insert(data interface{}, location int) error {

	index := location - 1
	// 不满就确保了至少有一个位置
	if ok := this.IsFull(); ok {
		return errors.New("线性表已满，无法添加数据")
	}

	if ok := this.IndexOver(index); ok {
		return errors.New("插入点过界")
	}
	// 可以设置一个中间变量进行交换
	// 这里让所有的元素都后移
	// 后移：新建一个空的 node ,然后把数据一个个往后移动，直到要插入的位置
	this.Append("") // 因为增加了一个空的，防止后面访问越界

	j := this.len - 1 // 游标，从最后一个元素下标开始
	for {
		if j == index {
			this.Element[j] = data
			this.len++
			return nil
		}
		// 前一个元素给后面的一个
		this.Element[j] = this.Element[j-1]
		j-- // 此时 j 在 j-1 上
	}
}

// 遍历打印
func (this *List) Travel() {
	fmt.Println(this.Element)
	// for _, value := range this.Element { // 遍历切片
	// 	fmt.Println(" ", value)
	// }
}

//
func main() {
	l := CreateList()
	l.Append(666)
	l.Append(333)
	l.Travel()
	l.Insert(111, 2)
	l.Travel()

}

```

