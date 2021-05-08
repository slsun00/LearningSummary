## 介绍

```java
对于多层次 if-else switch-case 的改进
    将选择条件+执行代码块抽象为一个类， 将所有的类都抽象为一个接口
    
策略模式
    // 先确定类，然后确定方法
    状态类之间没有影响， 各个类相互独立
    拟采用 a 销售策略，你就不能使用 b 销售策略
状态模式
    // 先确定方法，然后确定类，通过类改变方法 
    在方法中设定状态类， 类的行为是基于它的状态改变的
    一个行为在不同的状态模式下
    状态类之间有影响，比如：电梯开着状态，就只能关闭
责任链模式
    
    
    
    // 一个方法    ====    一个状态
    类  --- 不同的状态   --   方法根据不同类的状态，进行运行
 			不同的状态类   -- 实现所有的方法  --    
    
    
    // 个人理解
    // 策略模式
    	状态之间没有相互影响
            switch (key):	状态接口
                case value_1:	状态类
                    执行代码		行为
                case value_2:	状态类	
                    执行代码		行为
                case value_3:	状态类
                     执行代码		行为

    // 先有行为后有状态		----------     状态模式
    	状态之间有相互影响   
			swi                            
         // 一种状态对应一种行为        
                运行
                    >停止 X开门 X关门        
                停止
                    关门	>开门	>运行        
                开门
                    》关门	X停止	X运行        
                关门
                    》开门	》运行	》停止   
                    
                    
// 策略模式，                    
interface State {
	run()            
}            

class V1 implements State{
    @Override
    run()
}

class V2 implements State{
    @Override
    run()
}

class context {
     public final static V1 state_1 = new V1();
     public final static V2 state_2 = new V2();
     private State state;
        getState(State)
        setState(State)        
        public run(){
            this.state.run();
        }        
    
}

main() {
    context = new Context();
    context.setState(state_v1);
    context.run()
}
    

    
    
state
    startState
    stopState
context
    state
    此类中利用面向接口向上转型，来完成
  
    
    将原来的 if 条件语句变成了 set get 语句

// 运行 --》 停止 --》 开门 --》 关门     
        
//和 责任链比较类似
        责任链： 链式多次执行
        状态模式：
    
        
switch(key)  	interface     
    case 1 : 	状态   类
        执行代码：  行为 方法

    case 2 :   	set         
        switch(key):
			case 2:
			case 3:
			case 4:
	case 3:     set       
        switch(key):
			case 2:
			case 3:
			case 4:
     case 4:     set       
        switch(key):
			case 2:
			case 3:
			case 4:

switch (key)
    case 1:
		行为
            case 2: 
		子女工期
```

