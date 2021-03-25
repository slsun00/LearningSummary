## 介绍

* 是日期时间格式化的抽象类
* 通过该类可以帮助我们完成日期和文本之间的转换，即：date 和 string  之间的转换
* 格式化
    * 按照指定格式， 从 date 对象转化为 String 对象
* 解析
    * 按照指定格式， 从 string 对象转化为 Date 对象

## 构造方法

```java
DateFormate 是抽象类， 不能直接使用， 所以常用子类 java.text.SimpleDateFormate 来格式化
常用方法
    String formate(Date date); // 按照指定的模式， 把 Date 日期 ，格式化为符合模式的字符串
	Date parse(String source); // 把复合模式的字符串解析为 Date 日期
日期格式
    见 SimpleDateFomate
    
使用
	Date date = new Date();
    SimpleDateFormte sdf = new SimpleDateFormate("yyyy年MMMMM月dd日 GGG hh:mm aaa");
	sdf.formate(date);
```

