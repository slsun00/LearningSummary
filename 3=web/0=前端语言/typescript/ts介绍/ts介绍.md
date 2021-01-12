## 介绍

*   TS 是微软开发的一款开源编程语言
*   是 javascript 的超集 ，遵循 ES5、ES6 规范 ，扩展了 Js 语法

## 官网

```ts
//https://www.tslang.cn/docs/handbook/basic-types.html
// 版本检测
 
```

## 开发环境配置

```js
1. 安装 Node.js
2. npm 安装 type script 
3. 版本检测
	tsc -v
4. 创建 .ts 文件夹
5. 在 ts 文件文件夹执行编译命令
	tsc xxx.ts
```



## 编译选项

### 介绍

```ts
// 编译成 es5 
// 项目目录生成一个 tsconfig.json 配置文件 ，
// 目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录
// tsconfig.json 是 ts 编译文件 ，ts 编译器可以根据它的信息来对代码进行编译
	tsc --init 
    tsc xx.ts -w  // 监听 xx.ts 文件，实时进行编译
    tsc   -w //    监听改文件目录下所有的文件
	lib			// 指定项目中使用的库 ，代码运行所包含的库，前端一般不用设置
    outDir		// 用来指定编译后文件需要放置的目录
    outFile		// 将编译后的文件，合并成一个文件（注意是全局作用域的中的代码 模块化的有问题）
    allowjs		// 是否对 js 文件进行编译
    checkjs		// 检查 js 是否符合规范
    
    removeComments  // 是否清除注释
    noEmit		  // 不生成编译后的文件
    noEmitOnError   // 当有错的时候，不生成编译文件
    
    alwaysStrict    // 设置编译后的文件是否使用严格模式
    noImplicitAny   // 不允许隐式的 any 类型
    noImplicitThis		// 不允许不明确类型的this
    
    strictNullChecks     // 严格检查空值
    
    strict				// 所有严格检查的开关
```

### compilerOPtions

```js
// compilerOptions 编译器选项 
	target   设置ts代码被编译成的目标版本
    moudle	 指定使用模块化的规范 ES2015(es6) commonJS
```



### include

```js
// include
	定义希望被编译文件所在的目录
    默认值
    	"include": [
            // 只编译 src 文件夹中的文件
            // 根目录下的 src 文件夹下的  任意目录(**) 中的任意文件(*)
            "./src/**/*"
        ]
```

### exclude

```js
 // exclude
    定义需要排除在外的目录
    "exclude": [
        // 根目录中 src 文件夹中的文件 都不编译
         "./src/**/*"
    ]
	默认值
    	node_moudules  bower_components  jspm_packages
```

### files

```js
// files
   指定被编译文件的列表，只有需要编译的文件少是才会用到
   "files": [
       // 只有下面写出的文件才会被编译
       "index.ts",
       "test.ts"
   ]

```



### extends

```js
// extends
    d定义被继承的配置文件
```





## vscode 配置

```js

    
// tsconfig.json文件  修改为 ./js 保存
      "outDir": "./js", /* Redirect output structure to the directory. */
//  监视
      终端 -- 运行任务 -- typescript -- tsc:监视-tsconfig.json
          
```

