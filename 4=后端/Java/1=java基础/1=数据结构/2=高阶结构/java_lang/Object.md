## 介绍

* Object 是类层次的根结构
* 所有类都使用 Object 作为 超父类
* 所有对象(包括数组)，都实现了这个方法



## 方法

### 常用方法

```java
// Object 类是所有对象的⽗类，它⾥⾯包含⼀些所有对象都能够使⽤的⽅法

hashCode()：⽤于计算对象的哈希码
equals()：⽤于对象之间⽐较值是否相等
toString(): ⽤于把对象转换成为字符串
clone(): ⽤于对象之间的拷⻉
wait(): ⽤于实现对象之间的等待
notify(): ⽤于通知对象释放资源
notifyAll(): ⽤于通知所有对象释放资源
finalize(): ⽤于告知垃圾回收器进⾏垃圾回收
getClass(): ⽤于获得对象类
```



### tostring(): String

```java
直接打印对象的名字， 其实就是调用对象的 toString ， 
直接打印堆内存中的地址值 ， 所以用到的时候，需要打印对象，就需要重写该方法

让其能显示对象的内容
例子
    public Person {
    	String name;
    	@Override
    	public String tostring(){
            return "Person(name:" + name + "}"
        }
	}
```

### equals(obj): boolean

```java
Person 类继承了 Object ，可以使用 Object 的equals 方法
源码
    public boolean equals(Object obj) {
        return (this == obj);
    }

    对于 ==
        值类型 ：直接使用字面量
        医用类型 ： 地址值 ; 没有意义， 所以需要重写
    this
        方法的调用者， 谁调用该方法就是谁

    
重写
   问题
        隐含一个多态， 无法使用子类特有的内容（属性、方法）
   解决
        向下转型 ， 
    重构
    // 快捷键直接插入重构 
    public Person {
    	String name;
    	@Override
    	public boolean equals(Object obj){
            // 如果传入的是自身，直接返回 true
            if (obj == this) {
                return true;
            }
            // 增加一个判断， 传递的参数 Obj 如果是 null ，直接返回  null
            if (obj == null) {
                return false;
            }
           // 向下强制转型 , 增加一个判断， 防止类型转换异常
            if (obj instanceof Person) {
               Person p = (Person)obj; 
               return this.name.equals(p.name);
            }
		   return false;
        }
	}  
```

