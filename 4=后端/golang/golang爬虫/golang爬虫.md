## 普通爬取

```go
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strconv"
)

func working(start, end int) {
	fmt.Printf("正在爬取第 %d 页到第 %d 页", start, end)
	for i := start; i <= end; i++ {
		url := "https://tieba.baidu.com/f?kw=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F&ie=utf-8&pn=" + strconv.Itoa((i-1)*50)
		result, err := httpget(url)
		if err != nil {
			fmt.Println(err)
			continue
		}
		// fmt.Println("result: ", result)
		f, err := os.Create("第" + strconv.Itoa(i) + "页" + ".html")
		if err != nil {
			fmt.Println("oscreate err", err)
			return
        }
        f.WriteString(result)
        f.Close()
	}

}

func httpget(url string) (result string, err error) {
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	buf := make([]byte, 4096)
	// 循环读取网页数据给调用者
	for {
		n, err := resp.Body.Read(buf)
		if n == 0 {
			fmt.Println("读取完成")
			break
		}
		if err != nil && err != io.EOF {
			return "", err
		}
		result += string(buf[:n])
	}
	return result, nil
}

func main() {

	var start, end int
	fmt.Println("请输入爬取的起始页码")
	fmt.Scan(&start)
	fmt.Println("请输入爬取的结束页码")
	fmt.Scan(&end)

	working(start, end)

}

```



## 并发爬取

```go
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strconv"
)

func working(start, end int) {
	fmt.Printf("正在爬取第 %d 页到第 %d 页", start, end)

	page := make(chan int )
	for i := start; i <= end; i++ {
		go spiderpage(i, page)

	}

	for i := start; i <= end; i++ {
		fmt.Println("爬去完成的网页", i)
		<- page
	}

}

func httpget(url string) (result string, err error) {
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	buf := make([]byte, 4096)
	// 循环读取网页数据给调用者
	for {
		n, err := resp.Body.Read(buf)
		if n == 0 {
			fmt.Println("读取完成")
			break
		}
		if err != nil && err != io.EOF {
			return "", err
		}
		result += string(buf[:n])
	}
	return result, nil
}

func spiderpage(pageindex int, page chan int) {
	url := "https://tieba.baidu.com/f?kw=%E7%BB%9D%E5%9C%B0%E6%B1%82%E7%94%9F&ie=utf-8&pn=" + strconv.Itoa((pageindex-1)*50)
	result, err := httpget(url)
	if err != nil {
		fmt.Println(err)
	}
	// fmt.Println("result: ", result)
	f, err := os.Create("第" + strconv.Itoa(pageindex) + "页" + ".html")
	if err != nil {
		fmt.Println("oscreate err", err)
		return
	}
	f.WriteString(result)
	f.Close()
	page <- pageindex
}

func main() {

	var start, end int
	fmt.Println("请输入爬取的起始页码")
	fmt.Scan(&start)
	fmt.Println("请输入爬取的结束页码")
	fmt.Scan(&end)

	working(start, end)

}

```























