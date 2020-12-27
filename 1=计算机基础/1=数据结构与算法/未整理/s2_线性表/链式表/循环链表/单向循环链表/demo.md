```go
package main

type Node struct {
	data interface{}
	next *Node
}

type List struct {
	len  int
	head *Node
}

// 创建节点
func CreateNode(data interface{}) *Node {
	return &Node{
		data: data,
		next: nil,
	}
}

// 创建链表，链表初始化
func CreateList() *List {
	return &List{
		len:  0,
		head: nil,
	}
}

// 添加数据
// 结尾添加
func (this *List) Append(data interface{}9){
	node := CreateNode(data)
}
```



## 约瑟夫

```go
package main

import "fmt"

type Node struct {
	num  int
	next *Node
}

type List struct {
	head *Node
	len  int
}

func CreateNode() *Node {
	return &Node{
		num:  0,
		next: nil,
	}
}

// // 初始化链表
// func NewList() *List{
// 	return &List{
// 		head : nil,
// 		len : 0,
// 	}
// }

// 初始化创建 num 个字节
func CreateList(num int) *List {

	if num < 1 {
		fmt.Println("最少要")
		return nil
	}

	// 创建一个链表，里面最少有一个元素
	list := &List{
		len:  1,
		head: &Node{1, nil},
	}

	// 表示已经添加了
	index := 1
	cur := list.head // 这里已经是第一个数据点儿了
	for {
		if index == num {
			cur.next = list.head
			return list
		}

		// 下面要进行第几个元素的添加
		index++

		// 创建节点
		node := CreateNode()
		node.num = index

		// 链表接上新增加的节点
		cur.next = node
		cur = node
		list.len++
	}
}

// 判空
func (this *List) IsEmpty() bool {
	// if this,head == nil{}
	if this.len == 0 {
		return true
	}
	return false
}

// 遍历链表
func (this *List) Travel() {
	curNode := this.head
	if ok := this.IsEmpty(); ok {
		fmt.Println("空链表无法遍历")
		return
	}
	// 非空链表遍历

	for {
		// 非空。先打印

		if curNode.next == this.head {
			// 打印最后一个元素
			fmt.Printf("%5v", curNode.num)
			return

		}
		// 打印最后一个元素之前的元素
		fmt.Printf("%5v", curNode.num)
		curNode = curNode.next
	}
}

// 删除第
func (this *List) DeleteNode(num int) {

}

// 约瑟夫算法
func (this *List) jose(num int) {
	curNode := this.head
	count := 0
	for {
		if this.len == 1 {
            // 使用 this.head.num 打印出来是 1 ，到底是哪里出问题了？
            // 应该是头结点没有移动，导致 head 还是指向原先的 num = 1??????
			fmt.Printf("幸存者 %v", curNode.num)
			return
		}

		// 找到要删除的元素前面的节点
		for i := 1; i < num-1; i++ {
			curNode = curNode.next
		}
		// 要删除的节点
		delNode := curNode.next
		count++
		fmt.Printf("第 %d 个出局的人 %d ", count, delNode.num)
		fmt.Println()
		curNode.next = delNode.next
		// 数据长度减少一个
		this.len--
		// 下一个从新开始数的人
		curNode = delNode.next
	}

}

func main() {
	l := CreateList(8)
	l.Travel()
	fmt.Println("------------------------------")
	l.jose(3)
}

// 结果
    1    2    3    4    5    6    7    
8------------------------------        
第 1 个出局的人 3
第 2 个出局的人 6
第 3 个出局的人 1
第 4 个出局的人 5
第 5 个出局的人 2
第 6 个出局的人 8
第 7 个出局的人 4
幸存者 7
```

