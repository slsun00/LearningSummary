## 概述

```js
前后端分离 
  
  前端发送请求， 从后盾拿到数据  --->   将数据更新到 data
  vue 使用 data 中的数  --> 自动跟新到表单
```



## == 前端 ==

## axios

### 实例封装(工具)

```java
// 文件目录 common/utils/axios/request.js
// 创建axios实例
const service = axios.create({
//   baseURL: process.env.BASE_API, // api 的 base_url
  baseURL: baseURL,
  timeout: 5000 // 请求超时时间
})

// request拦截器
// service.interceptors.request.use()

// response 拦截器
service.interceptors.response.use(
  response => {

    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
```

## 请求发送接收

### 路径参数

#### 前端

```js
  getCourseInfoById(id) {
    return request({

       /*
       	请求路径上就是
       	/admin/edu/course/course-info/id
       */ 

      url: `/admin/edu/course/course-info/${id}`,
      method: 'get'
    })
  },
      
      
// 接收      
```

#### 前端接发

##### js

```java
import courseApi from '@/api/course'
/*
	html 中是通过 操作  data 中的数据进行数据渲染的
*/ 
// data
  data() {
    return {
      saveBtnDisabled: false, // 按钮是否禁用
      courseInfo: {// 表单数据
        price: 0,
        lessonNum: 0,
        // 以下解决表单数据不全时insert语句非空校验
        teacherId: '',
        subjectId: '',
        subjectParentId: '',
        cover: '',
        description: ''
      },

      teacherList: [], // 讲师列表
      subjectList: [], // 一级分类
      subjectLevelTwoList: [] // 二级分类
    }
  },    
    
    
// methods    
    // 根据id获取课程基本信息
	// 将
    fetchCourseInfoById(id) {
      courseApi.getCourseInfoById(id).then(response => {
        this.courseInfo = response.data.item

        // 课程类别渲染
        subjectApi.getNestedTreeList().then(response => {
          this.subjectList = response.data.items

          // 判断 this.subjectList下哪个一级类别是当前绑定的一级类别
          this.subjectList.forEach(subject => {
            if (subject.id === this.courseInfo.subjectParentId) {
              // 找到对应一级类别的二级类别列表
              this.subjectLevelTwoList = subject.children
            }
          })
        })
      })
    },    
```

##### html

```html
<template>
  <div class="app-container">

    <!-- 课程信息表单 -->
    <el-form label-width="120px">

      <el-form-item label="课程标题">
        <el-input v-model="courseInfo.title" placeholder=" 示例：机器学习项目课：从基础到搭建项目视频课程。专业名称注意大小写"/>
      </el-form-item>

      <!-- 课程讲师 -->
      <el-form-item label="课程讲师">
        <el-select v-model="courseInfo.teacherId" placeholder="请选择">
          <el-option
            v-for="teacher in teacherList"
            :key="teacher.id"
            :value="teacher.id"
            :label="teacher.name" />
        </el-select>
      </el-form-item>

      <!-- 所属分类 -->
      <el-form-item label="课程分类">
        <!-- 一级分类 -->
        <el-select
          v-model="courseInfo.subjectParentId"
          placeholder="请选择"
          @change="subjectChanged">
          <el-option
            v-for="subject in subjectList"
            :key="subject.id"
            :value="subject.id"
            :label="subject.title" />
        </el-select>

        <!-- 二级分类 -->
        <el-select
          v-model="courseInfo.subjectId"
          placeholder="请选择">
          <el-option
            v-for="subject in subjectLevelTwoList"
            :key="subject.id"
            :value="subject.id"
            :label="subject.title" />
        </el-select>

      </el-form-item>

      <el-form-item label="总课时">
        <el-input-number :min="0" v-model="courseInfo.lessonNum" controls-position="right" placeholder="请填写课程的总课时数"/>
      </el-form-item>

      <!-- 课程简介-->
      <el-form-item label="课程简介">
        <tinymce :height="300" v-model="courseInfo.description"/>
      </el-form-item>

      <!-- 课程封面 -->
      <el-form-item label="课程封面">
        <el-upload
          :show-file-list="false"
          :on-success="handleCoverSuccess"
          :before-upload="beforeCoverUpload"
          :on-error="handleCoverError"
          class="cover-uploader"
          action="http://localhost:8120/admin/oss/file/upload?module=cover">
          <img v-if="courseInfo.cover" :src="courseInfo.cover">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
      </el-form-item>

      <el-form-item label="课程价格">
        <el-input-number :min="0" v-model="courseInfo.price" controls-position="right" placeholder="免费课程请设置为0元"/> 元
      </el-form-item>
    </el-form>

    <div style="text-align:center">
      <el-button :disabled="saveBtnDisabled" type="primary" @click="saveAndNext()">保存并下一步</el-button>
    </div>
  </div>
</template>
```

