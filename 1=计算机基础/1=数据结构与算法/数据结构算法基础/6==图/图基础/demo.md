```go
type MNode struct {
    data 	    interface{} 	// 顶点数据
    isVisited 	bool			// 是否被访问过
}
type MMap struct {
    capacity	int		// 容量
    vertexCount	int		 // 已添加的顶点数
    vertexArry	[]MNode  // 一维数组
    arcNum		[][]int  // 二维数组
    
}

```

