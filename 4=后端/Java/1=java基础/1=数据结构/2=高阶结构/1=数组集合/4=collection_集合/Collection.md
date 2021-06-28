## 常用方法

```java
add()
clear()
remove()
contains()
isEmpty()
size()
toArray()
```

## == 工具类 == 

## collections

## 常用方法

```java
介绍
    集合工具类，用来对集合进行操作
addAll
shuffle
sort  
    // 按照默认规则排序 ，排序的集合里面存储的元素，必须实现 comparable 接口
    // 重写接口中的方法 compareTo 定义排序的规则 ，自己写规则
    // 排序规则 ： 自己（this) - 参数 升序； 参数 - 自己(this)  降序；
    
    Comparable : 自己(this)和别人(参数) 比较，自己需要实现 Comparable 接口，重写比较的规则 compareTo 方法
    Comparator : 相当于找一个第三方的裁判，比较两个
        
Collections.sort(list, new Compatator<Integer>(){
    @Override
    public int compare(Integer o1, Integer o2){
        return o2-o1; // 降序。 反之为升序
    }
})
```

