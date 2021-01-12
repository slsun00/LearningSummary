### nmp

*   介绍

    ```js
    node package manager
    	CommonJs 包规范理论是理论 ， NPM 是其中的一种实践 ，包管理工具
    	通过npm可以对node中的包进行上传、下载、搜索等操作
    	npm会在安装完node以后，自动安装
    ```

*   命令

    ```js
    npm -v 查看npm的版本
    npm version 查看所有模块的版本
    npm search 包名 搜索包
    
    
    // 使用 init  install
    npm init -y
    	name 严格来说不能有大写
        entry point  程序的入口，相当于 golang 中的 main 
    npm install 包名 --save    // 安装包并添加到依赖中 *****
    npm install               // 下载当前项目所依赖的包，更新
    npm remove / r 包名 		// 删除包
    
    
    npm install / i 包名		//  安装包 ,貌似默认了
    
    npm install 包名 -g       // 全局安装包（全局安装的包一般都是一些工具）
    ```

### cnpm

```js
// 这个是 淘宝提供的替代 npm
https://developer.aliyun.com/mirror/NPM?from=tnpm
```



















































