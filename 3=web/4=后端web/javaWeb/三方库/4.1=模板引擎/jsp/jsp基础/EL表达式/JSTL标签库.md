## 介绍

```java
介绍
	全称是指 JSP Standard Tag Library JSP 标准标签库。
	是一个不断完善的开放源代码的 JSP 标 签库。
作用
	EL 表达式主要是为了替换 jsp 中的表达式脚本，
    标签库则是为了替换代码脚本。这样使得整个 jsp 页面 变得更佳简洁。    
```

## 组成

```java
	功能范围 		 URI 								  前缀 
    核心标签库--重点 	http://java.sun.com/jsp/jstl/core 		c 
	格式化 		  http://java.sun.com/jsp/jstl/fmt 		  fmt 
	函数  		   http://java.sun.com/jsp/jstl/functions   fn 
	数据库(不使用)  	http://java.sun.com/jsp/jstl/sql		 sql 
	XML(不使用)  	   http://java.sun.com/jsp/jstl/xml			x
```



## 使用

```java
1. 先导入 jstl 标签库的 jar 包
    taglibs-standard-impl-1.2.1.jar 
    taglibs-standard-spec-1.2.1.jar
2. 使用 taglib 指令引入标签库
    // CORE 标签库
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```



## 核心标签库

#### set

```java
<c:set />
    ：set 标签可以往域中保存数据
格式
    域对象.setAttribute(key,value); 
		scope 属性设置保存到哪个域 
            page 表示 PageContext 域（默认值） 
            request 表示 Request 域 
            session 表示 Session 域 
            application 表示 ServletContext 域 
        var 属性设置 key 是多少 
        value 属性设置值
例子
	<c:set scope="session" var="abc" value="abcValue"/>            
```

#### if

```java
<c:if />
    签用来做 if 判断
语法例子
    // test 属性表示判断的条件（使用 EL 表达式输出）
	<c:if test="${ 12 == 12 }">
		<h1>12 等于 12</h1> 
    </c:if>
```

#### choose

```java
<c:choose> <c:when> <c:otherwise>标签
   多路判断。跟 switch ... case .... default 非常接近
注意
   不能使用  html 注释， 要用 jsp 标签
   when 标签的父标签必须是 choose 标签
语法例子
<c:choose> 
   
    <c:when test="${ requestScope.height > 190 }"> 
        <h2>小巨人</h2> 
    </c:when>   
    <c:otherwise> 
        <c:choose> 
            <c:when test="${requestScope.height > 160}"> 
                <h3>大于 160</h3>
            </c:when>
        </c:choose> 
    </c:otherwise>
</c:choose>
```

#### forEach

```java
语法实例
    <table border="1"> 
        <c:forEach begin="1" end="10" var="i"> 
            <tr>
                <td>第${i}行</td> 
            </tr> 
        </c:forEach>
    </table>
解释
	begin 属性设置开始的索引 
     end 属性设置结束的索引
     var 属性表示循环的变量(也是当前正在遍历到的数据)  
            
// 遍历数组
<% request.setAttribute("arr", new String[]{"18610541354","18688886666","18699998888"}); %>
	<c:forEach items="${ requestScope.arr }" var="item"> 
        ${ item } <br> 
    </c:forEach> 
解释
    for (Object item: arr) 
    items 表示遍历的数据源（遍历的集合） 
    var 表示当前遍历到的数据
// 遍历 map
<%request.setAttribute("map", map); %>
    <c:forEach items="${ requestScope.map }" var="entry"> 
        <h1>${entry.key} = ${entry.value}</h1> 
    </c:forEach>   

// 遍历 list
        
        
<c:forEach begin="2" end="7" step="2" varStatus="status" items="${requestScope.stus}" var="stu"> 
    <tr>
    	<td>${stu.id}</td> 
    	<td>${stu.username}</td> 
    	<td>${stu.password}</td> 
    </tr> 
</c:forEach>   
解释
    items 表示遍历的集合 
    var 表示遍历到的数据 
    begin 表示遍历的开始索引值 
    end 表示结束的索引值 
    step 属性表示遍历的步长值 
    varStatus 属性表示当前遍历到的数据的状态
```

