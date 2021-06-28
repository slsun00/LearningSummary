

## BF算法

```java
public static int BF(String S, String T) {
    char[] s = S.toCharArray();  // 长串
    char[] t = T.tocharArray();  // 模式串
   
    int i = 0; // 长串下标指针
    int j = 0; // 模式串下标指针
    while (i < s.length()) {
        if ( j == t.length ) {
            return  i - j;
        }
            
        if (s[i] = t[j]) {
            i++;
            j++;
        } else {
            i = i - j + 1;  // 回溯, 这个是归纳出来规律
            j = 0;
        }
    }
}




```



```java
public static int BF(int[] S, int[] T ) {
    int i = 0;
    int j = 0;
    while (s[i] != '\0' && t[j] != '\0') {
        if (s[i] == t[j]) {
            i++;
            j++;
        } else {
            // 模式串的边表
            i = i - j + 1 ;
            j = 0
        }
    }    
    //  
    if (t[j] == '\0') {
        return i - j;
    } else {
        return -1
    }
}
```

