## golang

### for 循环

```go
func InsertionSort(a []int) {
    
	length := len(a)   
    // 找到位置，该位置的数据和前面的数据进行比较
    for i , _ := range a {
		temp := a[i]
			
        // 这里是做到碰到要复制的位置的前一个位置跳出循环，
		for j := i-1； a[j] > temp && j>=0 ；j-- {		
            // 数据后移
			a[j+1] = a[j]
		}
        // 将 temp 放在需要放置的位置 
		a[j+1] = temp
	}
}
```



