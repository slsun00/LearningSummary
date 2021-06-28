## npm

### 介绍

```js
node package manager
	CommonJs 包规范理论是理论 ， NPM 是其中的一种实践 ，包管理工具
	通过npm可以对node中的包进行上传、下载、搜索等操作
	npm会在安装完node以后，自动安装
```

### 命令

```js
npm -v 查看npm的版本
npm version 查看所有模块的版本
npm search 包名 搜索包


// 使用 init  install
npm init -y
	name 严格来说不能有大写
    entry point  程序的入口，相当于 golang 中的 main 
npm install 包名 --save    // 安装包并添加到依赖中 *****
	--save-dev		// 开发依赖
npm install               // 下载当前项目所依赖的包，更新
npm install axios@2.1.x
npm remove / r 包名 		// 删除包


npm install / i 包名		//  安装包 ,貌似默认了

npm install 包名 -g       // 全局安装包（全局安装的包一般都是一些工具）
```

## cnpm

```js
// 这个是 淘宝提供的替代 npm
https://developer.aliyun.com/mirror/NPM?from=tnpm
```

## npm命令

### init

```java
npm install moduleName 
    安装模块到项目node_modules目录下。
    不会将模块依赖写入devDependencies或dependencies 节点。
    运行 npm install 初始化项目时不会下载模块

npm install -g moduleName 
    # -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
    1. 安装模块到全局，不会在项目node_modules目录中保存模块包。
	2. 不会将模块依赖写入devDependencies或dependencies 节点。
	3. 运行 npm install 初始化项目时不会下载模块
    
npm install -save moduleName 
    # -save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
    1. 安装模块到项目node_modules目录下。
    2. 会将模块依赖写入dependencies 节点。
    3. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
    4. 运行npm install --production或者注明NODE_ENV变量值为production时，会自动下载模块到node_modules目录中。


npm install --save-dev moduleName 
    # -save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖
    1. 安装模块到项目node_modules目录下。
    2. 会将模块依赖写入devDependencies 节点。
    3. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
    4. 运行npm install --production或者注明NODE_ENV变量值为production时，不会自动下载模块到node_modules目录中。


```



## json 文件

```java
{
  "name": "electron",
  "version": "1.0.0",
  "description": "",
    // 表示的脚本为应用的启动脚本，它将会在主进程中执行
    // 如果 main 字段没有在 package.json 中出现，
    // 那么 Electron 将会尝试加载 index.js 文件（就像 Node.js 自身那样）
  "main": "index.js",  
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
      // start 脚本来指引 node 去执行当前的 package：
      // 就是运行的时候使用的命令
      // "start": "electron ."
    "start": "node."
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```



















































