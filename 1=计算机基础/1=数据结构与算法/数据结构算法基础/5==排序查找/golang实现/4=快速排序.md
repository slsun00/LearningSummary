## 普通实现

```go
// 分治 + 递归

func quickSort(arr []int,first,last int) {
	
    // 以第一个元素为基准
    flag := first 
    left := first	//数据头部
    right := last	// 数据尾部
    
    // 维持整个数组循环
    for left < right {
        
        // flag 右边进行循环，碰到小交换，结束循环
        for left < right { 									
            if arr[flag] > arr[right] {						
                arr[flag], arr[right] = arr[right],arr[flag] 			
                flag = right   // flag 随着变化
				break		 // 跳出一直在右边比较的循环
            } else arr[flag] <= arr[right] {
                right--
            }
        }
        
        // flag 左边循环，碰到大的交换，结束循环
        for left < right {
            if arr[flag] < arr[first] {
                arr[flag] , arr[first] = arr[first],arr[flag]
                flag = left
                break
            } else if {
               left++ 
            }
        }
    }
    
    // 递归处理剩余的
    quickSort(arr,first,flag-1)   // 递归左边的
    quickSort(arr,flag+1,last)	  // 递归右边的
    
}
```

