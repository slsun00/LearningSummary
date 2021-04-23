```go
package main

import "fmt"

// 3-节点插入有问题，等下在整理吧，一个 bug 改一天，2333.。。。
type Node struct {
	data     int
	fatherNode    *Node   // 父亲节点
	lchild    *Node   //  左孩子
	rchild    *Node   // 右孩子
	color     string   //红色的节点为 false
	count     int
}


type Tree struct {
	root   *Node
}


//var (
//	fatherNode  Node
//	uncleNode Node
//	ancestorNode Node
//)

// 节点构建
func createNode(value int) *Node {
	return &Node{
		data : value,
		fatherNode: nil,
		lchild: nil,
		rchild: nil,
		color: "red",
		count: 1,
	}

}

// 红黑树构建
func Createtree() *Tree {
	return &Tree{
		root :  nil,
	}
}

func (n *Node) appendNode (node *Node) (curNode *Node) {

	curNode = n

	// 插入节点位置 的父节点
	var fatherNode *Node
	// 插入节点应该位于父节点的左右节点
	var site string
	// 找到插入的位置
	for curNode != nil {

		if node.data < curNode.data  {
			fatherNode = curNode
			curNode = curNode.lchild
			site = "left"
		}else if curNode.data < node.data {
			fatherNode = curNode
			curNode = curNode.lchild
			site = "right"
		}else if curNode.data == node.data {
			curNode.count++
			return curNode
		}
	}
	// 添加新的元素
	switch  site {
	case "left" :
		node.fatherNode = fatherNode
		fatherNode.lchild = node
	case "right" :
		node.fatherNode = fatherNode
		fatherNode.rchild = node
	}

	fmt.Println("33",node)
	return node
}

// 节点类型判断
func (n *Node) judge() (nodeNum int) {


	// n 的 父节点
	fatherNode := n.fatherNode

	// 当前节点为根结点
	if fatherNode == nil {
		 nodeNum = 0
		 return
	}

	// 祖先结点
	ancestorNode := n.fatherNode.fatherNode
	// 祖先结点为空，相当于这棵树只有两层
	if ancestorNode == nil {
		nodeNum = 2
		return
	}

	// 叔节点
	var uncleNode *Node
	// 两层以上的树
	if fatherNode.data > ancestorNode.data {
		uncleNode = ancestorNode.lchild
	} else if fatherNode.data < ancestorNode.data {
		uncleNode = ancestorNode.rchild
	}



	// 返回当前节点的类型
	if fatherNode.color == "black" {
		nodeNum = 2
	// 3-节点
	} else if uncleNode == nil || uncleNode.color == "black" {
		nodeNum = 3
	// 4-节点
	} else if   uncleNode.color == "red" {
		nodeNum = 4
	}

	fmt.Println("num",nodeNum)
	return nodeNum
}

// 节点染色
func (n *Node) nodedye(nodeNum int) (topNode *Node) {
	switch nodeNum {
	case 0 :
		// 到根节点了
		topNode = n.fatherNode
	case 2 :
		topNode = n.twoNodeDye()
	case 3 :
		topNode = n.threeNodeDye()
	case 4 :
		topNode = n.fourNodeDye()
	default:


	}
	return topNode
}

// 插入2-结点
func (n *Node) twoNodeDye() (topNode *Node) {
	return n.fatherNode
}
// 插入3-结点
func (n *Node) threeNodeDye() (topNode *Node) {
	// 当前节点
	curNode := n
	// 父节点
	fatherNode := n.fatherNode

	// 兄弟结点
	var brotherNode *Node
	if curNode.data < fatherNode.data {
		brotherNode = fatherNode.rchild
	} else if curNode.data > fatherNode.data {
		brotherNode = fatherNode.lchild
	}

	// 祖先结点
	ancestorNode := n.fatherNode.fatherNode
	// 当前 、 父节点 、祖先节点 排序 ，然后单独调整兄弟结点和祖先结点的关系

	topNode = threeNodeChange(curNode,brotherNode,fatherNode,ancestorNode)

	return topNode
}

func threeNodeChange(curNode,brotherNode,fatherNode,ancestorNode *Node) (topNode *Node) {

	// 祖先的父亲
	ancFatherNode := ancestorNode.fatherNode

	// cur < father < ancestor
	if curNode.data < fatherNode.data && fatherNode.data < ancestorNode.data {
		fatherNode.rchild = ancestorNode
		ancestorNode.lchild = brotherNode

		fatherNode.color = "black"
		ancestorNode.color = "red"

		topNode = fatherNode

		//  father < cur < ancestor
	} else if curNode.data > fatherNode.data && curNode.data < ancestorNode.data {
		fatherNode.rchild = curNode.lchild
		ancestorNode.lchild = curNode.rchild
		curNode.lchild = fatherNode
		curNode.rchild = ancestorNode

		curNode.color = "black"
		ancestorNode.color = "red"

		topNode = curNode

		//   ancestor < cur < father
	} else if curNode.data < fatherNode.data && curNode.data > ancestorNode.data {
		ancestorNode.rchild = curNode.lchild
		fatherNode.lchild = curNode.rchild
		curNode.lchild = ancestorNode
		curNode.rchild = fatherNode

		curNode.color = "black"
		ancestorNode.color = "red"


		topNode = curNode

		//   ancestor < father < cur
	} else if curNode.data > fatherNode.data && fatherNode.data > ancestorNode.data {
		ancestorNode.rchild = brotherNode
		fatherNode.lchild = ancestorNode

		fatherNode.color = "black"
		ancestorNode.color = "red"

		topNode = fatherNode
	}

	// 节点变换后接入原来的树
	if ancFatherNode != nil {
		if ancFatherNode.data > ancestorNode.data {
			// 左节点 lchid
			ancFatherNode.lchild = topNode
			topNode.fatherNode = ancFatherNode
		} else if ancFatherNode.data < ancestorNode.data {
			// 右节点 rchild
			ancFatherNode.rchild = topNode
			topNode.fatherNode = ancFatherNode
		}
	} else if ancFatherNode == nil {
		topNode.fatherNode = nil
	}

	return topNode
}

// 插入4-结点
func (n *Node) fourNodeDye () *Node {
	ancestorNode :=  n.fatherNode.fatherNode

	ancestorNode.color = "red"
	if ancestorNode.fatherNode == nil {
		ancestorNode.color = "black"
	}
	ancestorNode.lchild.color = "black"
	ancestorNode.rchild.color = "black"
	return ancestorNode
}

// 添加元素
func (t *Tree) Add(data int) {

	node := createNode(data)
	var curNode *Node
	if t.root == nil {
		t.root = node
		node.color = "black"
		return
	} else{
		curNode = t.root.appendNode(node)
	}


	// 红节点的 topNode 都是父节点
	var topNode *Node
	//topNode := curNode.fatherNode
	for {
		// 节点判断
		nodeNum := curNode.judge()
		// 节点染色、变换
		topNode = curNode.nodedye(nodeNum)

		if topNode.fatherNode == nil {
			t.root = topNode
			return
		} else if topNode.color == "black" {
			return
		}
	}

}


func main(){
	rbtree := Createtree()
	rbtree.Add(5)
	rbtree.Add(1)
	rbtree.Add(6)
	fmt.Println(rbtree.root.data)
	fmt.Println(rbtree.root.color)
	fmt.Println(rbtree.root.lchild)
	//fmt.Println(rbtree.root.rchild)


}














//
//
//
//
//
//func (n *Node) dye() {
//	// 因为染色的时候，需要判断其祖先结点、父节点、叔节点构成了什么类型的结点
//	// 但是树高只有一层、两层的时候是没有子节点的，所以要分开讨论
//
//	// 一层
//	if n.father == nil {
//		n.color = "black"
//		return
//	} if n.father.father == nil {
//		// 插入的是第2层的 ，不需要操作
//		return
//	} else {
//		// 插入的是第3层，就出现了2-3-4树的最小判断单元，进行判断
//		node.judge()
//		//三层以上的
//		curNode = n
//		// 父节点
//		fartherNode = n.father
//		// 祖先节点
//		ancestorNode := father.farther
//
//		// 2-节点
//		if fartherNode == "black"{
//			// 不做变动
//			return
//			// 3-节点
//		} else if fartherNode == "red" && brotherNode == "black" {
//			// 找到中间节点，提升为父节点，两边节点变化，子分支划分
//			// 中间节点升为父节点，其余两个节点为子节点，注意原子节点分配
//			// 新 父 祖 叔
//			// 父 新 祖 叔
//			// 叔 祖 新 父
//			// 叔 祖 父 新
//
//			// 祖节点的父节点，需要指向该节点没注意这个实在 3-节点存在的情况下
//			ancTemNode := ancestorNode.father
//			// 新 父 祖 叔
//			if fatherNode.data < ancestorNode.data {
//				if curNode.data < fatherNode.data {
//					if ancTemNode.data > ancestorNode.data {
//						ancTemNode.lchild = fatherNode
//						ancestorNode.rchild = ancTemNode.lchild
//						temp := fatherNode.rchild
//						fatherNode.rchild = ancestorNode
//						ancestorNode.lchild = temp
//					}
//
//				} else if curNode.data > fatherNode.data {
//
//				}
//			} else if fatherNode.data > ancestorNode.data {
//				if curNode.data < fatherNode.data {
//
//				} else if curNode.data > fatherNode.data {
//
//				}
//			}
//
//			// 4-节点
//		} else if fartherNode == "red" && brotherNode == "red" {
//
//
//			// 判断红色节点是否存在接着一个红色节点，接着进入循环
//		}
//
//
//
//
//	}
//
//
//
//
//	if fartherNode.data > fartherNode.farther.data{
//		uncleNode = fartherNode.farther.lchild
//	} if fartherNode.data < fartherNode.farther.data{
//		uncleNode = fartherNode.farther.rchild
//
//
//		// 2-节点
//	} else if midNode.color == "black" {
//
//		// 3- 节点
//		// 4- 节点
//	} else {
//		for node.color != "black" {
//			// 3-节点 、4-节点判断
//		}
//	}
//
//
//
//	for  node.color != true {
//		faNode :=
//		// 找到兄弟节点，方便判断类型
//		if faNode.data > n.data {
//			brotherNode = faNode.rNode
//		} else if faNode < n.data {
//			brotherNode = faNode.lNide
//		}
//
//		// 变色调整
//		if brotherNode.color == true {
//			// 进去二节点调整
//		} else if brotherNode == false {
//			// 进入三节点调整
//		}
//	}
//}
```

