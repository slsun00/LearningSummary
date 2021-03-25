## java: 错误: 无效的源发行版：15

```java
原因
    出现该问题的原因是项目Project当中的jdk与电脑当中的jdk版本不一致造成的。
    
本机的jdk版本：
    命令提示输入：java -version
解决
    file  -- > project structure -->
    	project --> 
    		project sdk -->8
    		language level --> 8
    		project ... output --> project项目/out
    	moudles --> 
    		sources --> language level --> 8 
    		dependencies --> Module SDK --> 8
	file --> settings -->
    		Build,eccution... --> project bytecode version --> 8
    
```







































