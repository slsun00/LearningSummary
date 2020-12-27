```go
package main

import(
	"fmt"
	"errors"
)

type Node struct {
	data interface{}
	next *Node
	prev *Node
}

type List struct {
	len  int
	head *Node
	last *Node
}

// 创建节点
func CreateNode(data interface{}) *Node {
	return &Node{
		data : data,
		next : nil,
		prev : nil,
	}
}

// 创建链表，链表初始化
func CreateList() *List {
	head := CreateNode(nil)
	head.prev = head
	head.next = head
	return &List{
		len  :  0,
		head : head,  // 头结点，是在链表中的
		last : head,  // 记录 最后一个节点
	}
}

// 判空
func (this *List) IsEmpty() bool{
	if this.len == 0 {
		return true
	}
	return false
}

// 添加数据
// 结尾添加
func (this *List) Append(data interface{}){
	node := CreateNode(data)
	// if ok:=this.IsEmpty();ok{
	// }

	// ndoe 挂上前面的节点
	this.last.next = node
	node.prev = this.last

	// node 挂上后面的节点
	node.next = this.head
	this.head.prev = node

	// 尾节点设置成最后一个节点
	this.last = node

}

// 查找元素,返回节点
func (this *List) SearchNode(data interface{}) (*Node,error) {
	curNode := this.head // 头节点

	for {
		// 第一次进入判断是否为空链表
        // 之后的每次都是判断是否到了链表结尾
		if  curNode.next == this.head {
			return nil,errors.New("没有此元素")
		}
        // 移动节点
		curNode = curNode.next
		
		if curNode.data == data {
			return curNode,nil
		}
	}

}

// 按值删除节点
func (this *List) DeleteNode(data interface{}) bool {
	
	curNode := this.head // 头节点

	for {
		// 第一次进入判断是否为空链表
        // 之后的每次都是判断是否到了链表结尾
		if  curNode.next == this.head {
			return false
		}
		// 节点往后移动
		curNode = curNode.next
		
		if curNode.data == data {
			// 当前节点前一个元素
			prev := curNode.prev
			// 当前节点后一个元素
			next := curNode.next
			// 当前节点前后两个元素接起来
			prev.next = next
			next.prev = prev
			this.len--
			return true
		}
	}
}

// 修改节点的值
func (this *List) Updata (srcdata,desdata interface{}) bool {
	
	// 查找数据节点
	curNode, err := this.SearchNode(srcdata)
	if err != nil {
		return false
	}
	
	// 修改数据
	curNode.data = desdata
	return true
}

// 遍历链表
func (this *List) Travel(){
	
	// 头节点
	curNode := this.head
	// 开始遍历
	for {
        // 第一次进入判断是否为空链表
        // 之后的每次都是判断是否到了链表结尾
		if curNode == this.head {
			return 
		}
		curNode = curNode.next
		fmt.Printf("%5v",curNode.data)
	}
}

```

