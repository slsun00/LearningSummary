```go
func BubbleSort(a []int) {
	lenth := len(a)

	// 可以理解成从最后一个位置开始确定元素,最后一个位置的下标不就是 len(a)-1
	for i := lenth - 1; i > 0; i-- {
		// 相邻两个元素比较，正好让 j 停留在 i-1 ,j+1能正好取到 i 位置上的元素
		for j := 0; j < i; j++ {
			if a[j] < a[j+1] {
				a[j], a[j+1] = a[j+1], a[j]
			}
		}
	}
}

func main() {
	var a []int = []int{25, 61, 72, 59, 95, 27, 78, 79, 92, 75, 49, 51, 22, 46, 7, 45, 73}
	BubbleSort(a)
	fmt.Println(a) // [95 92 79 78 75 73 72 61 59 51 49 46 45 27 25 22 7]
}

```









## 跳转

* * [golang知识库总结](https://www.cnblogs.com/shulei/p/13426361.html)













































































