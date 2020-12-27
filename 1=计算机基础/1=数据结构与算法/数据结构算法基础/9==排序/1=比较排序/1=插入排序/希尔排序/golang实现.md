```go
func sort(a []int) {

	gap := len(a) / 2

	//步长控制
	for gap > 0 {
		
		// 向后取元素
		for i := gap; i < len(a); i++ {

			j := i
			//  向前比较元素
			for j >= gap {
				if a[j] < a[j-gap] {
					a[j], a[j-gap] = a[j-gap], a[j]

				}
				// 优化，已经判断出来不是了，就不要往下比较了
				// if a[j] >=  a[j-gap] {
				//  	j = j - gap
				// 		return
				// }

				j = j - gap
			}
		}

		gap = gap / 2
	}
}

func main() {
	var a []int = []int{25, 61, 72, 59, 95, 27, 78, 79, 92, 75, 49, 51, 22, 46, 7, 45, 73}
	sort(a)
	fmt.Println(a) // [7 22 25 27 45 46 49 51 59 61 72 73 75 78 79 92 95]
}  
```

