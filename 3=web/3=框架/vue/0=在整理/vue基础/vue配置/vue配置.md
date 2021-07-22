## 注意

```js
git bash 进行项目创建，如果出现无法选择的情况，建议使用 cmd 或者 powershell
```



## vue 变化

```js
vue2 flow-type
vue3 TypeScript

```



## webpack

```js
runtime-only build
	代码中不可以用任何的 template
runtime-compiler 
	代码中有 template , 因为有 compiler 进行编译

webpack 配置 vue
    配置resolve

.vue 文件封装
	vue-loader
	vue-template-compiler
	// 貌似还需要 plugin
```

## cli

### 介绍

```js
cLI
	command-Line Interface   命令行界面、俗称脚手架
    快速搭建 Vue 开发环境以及对应的 webpack 配置
功能
	脚手架工具使用了 webpack 模板, 
版本
	cli2 基于 webpack3
    cli3 基于 webpack4  , 
        移除 配置文件根目录下的 build、config 等目录  // 0 配置
        移除 static 文件夹
        新增 public 文件夹，并且将 index.html 移动到 public 中
        新增  UI 命令
```

### 安装注意

```js
安装vue-cli报错（t提示版本已弃用）
	// 换用 cnpm 安装就行了

键盘的上下箭头移动，空格勾选

1. 换用 淘宝镜像，使用cnpm安装，如果出现错误，就是用 cnpm 安装
    清除缓存
    npm cache verify
    npm cache clean
    npm cache clean --force
    
```

### 安装选择配置

```js
// cli 的安装配置过程不太一样，但是给出的选项都差不多，功能都是一样的
// 空格选择，回车选择结束

// cli2
    vue init webpack project
        vue init webpack  // 固定的写法其中 webpack 的参数写法是有固定的，
        project // 创建一个文件夹，存放之后的项目内容，该名称会作为默认的项目名称，不能含有大写字母
    // 指令配置
        project name  // 项目名称，不能含有大写 , 直接巧合回车，则默认使用 project 作为项目名称
        project description  // 项目描述信息，就是 vue ，可以自己写描述信息
        author  // 作者信息，默认从 git 中获取，可以自己输入
        vue build 
            runtime + compiler   
            runtime-only        // 选这个就行
        vue-router			// 路由
        eslint				// 代码检验工具
            eslint规范 ，      // 还有很多其他的规范，选择 standard 规范
            none 		// 自己配置的样式
        unit 		// 单元测试
        e2e tests	// end to end 端到端测试，
        yes ues NPM  // 使用 npm 管理项目
        
        
// cli3
// cli4 
      default (babel, eslint)		// 默认勾选 babel、eslint，回车之后直接进入装包
	> Manually select features		// 自定义勾选特性配置，选择完毕之后，才会进入装包
    
 // 手动选择配置
	babel  ES6 转为 ES5 
    processive web App(pwd) suport   先进的app，用的不多
     history mode for router
     	此模式情况下，url 比较好看 ，可以选上
     css pre-processor
		采用熟悉的 less
     linter/formatter 代码校验格式规范 代码格式化
     	eslint-standard config
     什么情况下触发代码格式校验(都选上最好)
     	lint on save 保存的时候触发
        Lint and fix on commit：每当执行 `git commit` 提交的时候
    placing config for babol ...  生成相关配置的配置信息
		in package.json   // 放置在package.json文件中
		in dedicated config files  //  生成单独的文件 ，优先选择
    save as a present for future project  // 相当于创建个以后用的模板 ， 不需要 no
    
    
    等待安装结束
     	
    
1. vuecli 在创建项目的时候，会自动化帮你初始化可git库，并且基于初始值默认执行了一次提交
```

### 删除文件

```css
// 需要删除 vue 默认生成文件
1 删除初始化的默认文件
2 重新调整目录结构
调整 -------------------------------------

components
	删除 hellowoeld 文件

views:app.vue 
	template 
		内部删除
		保留 #app 标签
	style 
		里面的东西删除
	script
        注意保留路由出口清除自带样式，补上 script 
        import helloword  注释或者删除掉
        expert default 中的 components 中的 helloword 删除
/*如果你顺带下载le router 还需要清除router中的内筒*/
router  index.js
	路由清除，

assets
	logo 删除吧，不删除也行
views:home.vue
	
```

### 目录划分

*   src 目录

    ```js
    
    ```
    
    

### 运行

```js
cli2
  cd tabbar
  npm run dev
```

### 注意

```js
.git 文件，是 git 的配置未见，
node_modules  是 node 的配置文件，
	这两个是忽略的
```

### 别名配置

```js
// cli3
新建一个 vue.config.js文件

module.exports = {
	configureWebpack: {
		// extensions: []  可以省略的文件后缀
		alias: {
			// '@' : 'src', 默认的
			'assets':'@/assets',
			'common':'@/common',
			'componets':'@/componets',
			'network':'@/network',
			'views':'@/views',
		}
	}
}
```



### 风格控制

```js
// 创建 .editorconfig
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

```

### 浏览器适配

```js
// 创建 .browserslistrc
> 1%
last 2 versions
not dead
```





## vue - router

### 安装

```js
安装
	直接安装就行，没有什么配置的
使用
	导入路由对象，
    调用 Vue.use(VueRouter)
	创建路由实例 ， 传入路由映射配置
    Vue 实例中挂载创建的路由实例
```





































































































































