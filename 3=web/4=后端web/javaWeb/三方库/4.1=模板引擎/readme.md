## 模板引擎

```java
介绍
    向模板中传递需要的占位符数据
    模板 + 数据 ==> 渲染成字符串
模板
    准备呈现给用户的视图页面
    <html>
    	<body>
    		<p>hello ${name}</p>
    	</body>
    </html>
数据
    // 提供数据有多种方式
    request.setAttribute("name", "lisi")
    model.addAttribute("name","zhangsan")
    
模板引擎
    处理模板和数据的程序，就是个字符串查找替换
    1. 获取模板，
    2. 把模板中的特定符号，替换为数据。
    3. 生成输出结果文件
    
输出结果
    <html>
    	<body>
    		<p>hello lisi</p>
    	</body>
    </html>
    
例子 
    ${modelClass}，这次要生成Menu，就传Menu，下次要建good，就传Good
    
```

## 代码生成器

```java
原理
    1. 编写一个模板，比如要生成XXXService.java，service里面所有代码讲模块部分全部用占位符/变量名代替
    		MenuService 改成 ${modelClass}Service
    2. 通过模板引擎，将替换好的占位符的模板输出为具体的字符串
    		MenuService.java、MenuController.java 等
    
理解
    模板中的占位符都是在代码中实现好的，所以在模板中直接用
    代码中引入的有模板的路径
// 代码中
        //引入一个模版，通过模版路径
		Template serviceVm = ve.getTemplate("/WebContent/WEB-INF/vm/service.vm");
		
		//定义占位符变量，给个值
		String modelClass = "Menu";
		String modelName = "menu";
		//生成的代码放置的目录==项目目录
		String rootPath = "C:/Users/Administrator/Desktop/shop/"; 
		
		//变量放到上下文对象里
		VelocityContext ctx = new VelocityContext();
		ctx.put("modelClass", modelClass);
		ctx.put("modelName", modelName);

// 模板中
import com.zq.model.${modelClass};
 
public interface ${modelClass}Service {}
```

