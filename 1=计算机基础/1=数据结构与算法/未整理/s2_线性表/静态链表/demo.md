```go
package main

import (
	"fmt"
)

// 前驱节点和后继节点哪里有问题，不返回地址类型的不行吗

// 数组大小
const maxSize int = 10

type Node struct {
	data interface{}
	cur  int
}

// 使用切片更好，切片可以动态分配，不会产生元素溢出的情况
type Slist [maxSize]Node

func CreateList() Slist {
	var slist [maxSize]Node
	i := 0
	for {
		if i == maxSize-2 {
			slist[maxSize-2].cur = 0
			slist[maxSize-1].cur = 0
			return slist
		}
		slist[i].cur = i + 1
		i++
	}
}

// 显示数组结构
func (this *Slist) ShowList() {

	// 游标
	for _, v := range this {
		fmt.Printf("%5d", v.cur)
	}
	fmt.Println()
	// 数据
	for _, v := range this {
		fmt.Printf("%5v", v.data)
	}
	fmt.Println()
	// 下标
	for k, _ := range this {
		fmt.Printf("%5d", k)
	}
	fmt.Println()

}

// 判断是否为空
func (this *Slist) Is_Empty() bool {
	if this[maxSize-1].cur == 0 {
		fmt.Println("是空表")
		return true
	}
	fmt.Println("不是空表")

	return false
}

// 链表长度
func (this *Slist) Length() int {
	count := 0
	cursor := this[maxSize-1].cur

	// 这个循环计数很值得回味一下
	for {
		if cursor == 0 {
			fmt.Println("长度为：", count)
			return count
		}
		count++
		cursor = this[cursor].cur // 当前位置的游标
	}
}

// 获取指定链表位置的数据，即第几个节点处的数据是什么
func (this *Slist) GeIndexNode(index int) (node *Node, err error) {
	// if index < 1 || index > maxSize-2 {
	if index < 1 || index > maxSize-2 {
		err := fmt.Errorf("index out side of list range ")
		return nil, err
	}
	// 查询的位置在有数据的链表之外
	if index > this.Length() {
		err := fmt.Errorf("所查询的位置没有数据，是空的")
		return nil, err
	}
	// 前面两个条件已经判定这链表是有数据的，不是空链表，
	// 查询的结点也在这个有数据的链表之内，即index 最多也就是链表最后一个元素

	// 确定查询的位置在链表之内，开始遍历循环，寻找查询的位置
	// 头结点记录的游标，通过游标遍历链表
	head := this[maxSize-1]
	cursor := this[head.cur] // 第一个数据节点
	// 查询的时候，一般是从 1 开始计数的，count 遍历了几个元素
	count := 1
	for {
		// 遍历数组，通过 cursor = 0 判断链表是否结束
		if count == index {
			fmt.Println("查询的数据", cursor.data)
			return &cursor, nil
		}
		count++
		cursor = this[cursor.cur]
	}
}

// 查询数据
// 获取指定数据在链表的第几个位置
// 兼顾查询元素是否存在该链表

func (this *Slist) GetElemNum(data interface{}) int {

	cursor := this[maxSize-1].cur // 头结点
	count := 1                    // 记录处于第几个位置,习惯数位置从 1 开始
	for {

		// 先判断数据，然后进行当前游标判断，决定要不要退出
		if this[cursor].data == data {
			return count
		}

		if cursor == 0 {
			return -1
		}
		count++
		cursor = this[cursor].cur
	}
}

// 获得元素的前驱节点，返回一个节点
//da 改成 data  会出现参数重复，是什么情况
func (this *Slist) GetPrevNode(data interface{}) (node *Node, err error) {

	// 有前驱元素的肯定最少有两个元素
	// prev 记录前面的，cursor 记录当前的
	prevNode := this[maxSize-1]   // 头节点
	curNode := this[prevNode.cur] // 第 头节点
	for {
		// 当前节点的数据是否是要找的数据
		if curNode.data == data {
			return &prevNode, nil
		}
		// 查看当前是不是链表结尾
		if curNode.cur == 0 {
			err := fmt.Errorf("链表中没有此数据")
			return nil, err
		}
		// prevNode 记录前面一个节点
		prevNode = curNode
		curNode = this[prevNode.cur]
	}
}

// 获取后继元素
func (this *Slist) GetNextNode(data interface{}) (node *Node, err error) {

	// next 表示后继元素
	// cursor 表示当前游标
	curNode := this[maxSize-1]    // 从头结点开始，也是当前位置开始
	nextNode := this[curNode.cur] // 创建一次，记录当前节点的下一个节点

	for {

		// 查看next 是否是链表最后一个元素
		// 正好是链表最后一个节点的 data
		if curNode.cur == 0 {
			err := fmt.Errorf("已经到达链表结尾，没有相应的后继节点")
			return nil, err
		}

		// 判断当前元素是否是要找的元素
		if curNode.data == data {
			return &nextNode, nil
		}

		// 当前节点后移动一个位置
		curNode = this[curNode.cur]
		nextNode = this[curNode.cur]

	}
}

//删除节点，回收到备用链表,利用数据删除
// （不能随意删除第几个节点吧，不太好，删除数据所在结点）

func (this *Slist) DeleteNode(data interface{}) {

	// 获取该节点前面的结点,始终会有前节点的，因为有头节点
	prevNode, err := this.GetPrevNode(data)
	if err != nil {
		fmt.Println("查无此数据 err=", err)
	}
	// 删除元素的节点
	temp := prevNode.cur // 删除节点的下标
	curNode := this[prevNode.cur]

	// 从主链进行摘除
	prevNode.cur = curNode.cur

	// 回收到备用链表
	curNode.cur = this[0].cur
	this[0].cur = temp
}

// 增加节点
// 数据位置存放的位置，以备用链表，插入到链表什么位置再说
// 空表链表的剔除是一样的，不管在哪里删除数据
// 结尾添加
func (this *Slist) Append(data interface{}) {

	curNode := this[maxSize-1]
	for curNode.cur != 0 {
		curNode = this[curNode.cur]
	}
	// 第一个可以插入的空白数据节点
	firstCur := this[0].cur
	this[firstCur].data = data

	// 空白链表剔除
	this[0].cur = this[firstCur].cur

	// 数据链表的相接
	temp := curNode.cur // 提前拿出来，防止接上新数据点后，找不到了
	curNode.cur = firstCur
	this[firstCur].cur = temp
}

// 中间插入
func (this *Slist) Insert(data interface{}, index int) {
	// 中间插入，就需要找到这个节点前面的结点
	preNode, err:= this.GetNextNode(index - 1)
	if err != nil {
		fmt.Println("出现错误 err:=",err)
		return
	} 

	// 第一个可以插入的空白数据节点
	firstCur := this[0].cur
	this[firstCur].data = data

	// 空白链表剔除
	this[0].cur = this[firstCur].cur

	// 直接从要插入的点的前一个点
	temp := preNode.cur // 提前拿出来，防止接上新数据点后，找不到了
	preNode.cur = firstCur
	this[firstCur].cur = temp

}

// 头部插入
// 其实三个插入的方式是一样的

// 遍历有数据的链表
func (this *Slist) TravelList(){
	
	curNode := this[maxSize-1]
	for  {
		if curNode.cur == 0 {
			return
		}
		curNode = this[curNode.cur]
		fmt.Println("%5v",curNode.data)
	}
}

// 回收链表
// 找到数据链表的第一个数据的下标和最后一个位置的下标
func (this *Slist) FreeList(){

	curNode := this[maxSize-1] // 头节点

	for {
		if curNode.cur == 0 { // 它的游标是零，就说明链表结尾了
			curNode.cur = this[0].cur
			this[0].cur = this[maxSize-1].cur
			this[maxSize-1].cur = 0
			return
		}
		curNode = this[curNode.cur]

	}	

}

func main() {
	s := CreateList()
	s.Length()

}

```

