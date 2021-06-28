

### 命令

```js
npm -v 查看npm的版本
npm version 查看所有模块的版本
npm search 包名 搜索包


// 使用 init  install

    entry point  程序的入口，相当于 golang 中的 main 
npm install 包名 --save    // 安装包并添加到依赖中 *****
	--save-dev		// 开发依赖
npm install               // 下载当前项目所依赖的包，更新
npm install axios@2.1.x
npm remove / r 包名 		// 删除包


npm install / i 包名		//  安装包 ,貌似默认了

npm install 包名 -g       // 全局安装包（全局安装的包一般都是一些工具）
```



## init -- package.json

```java
npm init -y 
    使用默认值来超速初始化
npm init
    // 弹出列表
    package name:                      
        你的项目名字叫啥
    version:                          
        版本号
    description:                       
        对项目的描述
    entry point:                      
        项目的入口文件（一般你要用那个js文件作为node服务，就填写那个文件）
    test command:                     
        项目启动的时候要用什么命令来执行脚本文件（默认为node app.js）
    git repository:                    
        如果你要将项目上传到git中的话，那么就需要填写git的仓库地址（这里就不写地址了）
    keywirds：                       
        项目关键字（我也不知道有啥用，所以我就不写了）
    author:                         
        作者的名字（也就是你叫啥名字）
    license:                        
        发行项目需要的证书（这里也就自己玩玩，就不写了）
    

    
npm init <initializer>   
    npm@6.1.0 里增加了 
    // pm init thinkjs 的话 npm 会补全模块名为 create-thinkjs 并执行 npx create-thinkjs
```



## install -- package-lock.json

```java
// 具体安装， 这个要根据官网的情况来安装
// 这里的安装只是给参考
npm install moduleName 
    安装模块到项目node_modules目录下。
    不会将模块依赖写入devDependencies或dependencies 节点。
    运行 npm install 初始化项目时不会下载模块

npm install -g moduleName 
    npm install --global moduleName 
    // 不推荐全局安装 webpack。
    // 这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。 
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





## 需要整理

```java
刚刚试了下 npm install 在空白目录中会生成package-lock.json
如果是想生成package.json，需要通过npm init来操作
```

