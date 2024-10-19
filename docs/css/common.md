# Common CSS

代码位置：<https://github.com/windyeasy/common-frontend-code/blob/master/uni-vue3-template/src/assets/css/common.css>

## 代码

```css
/* common css */

/* 常用主题色 */
:root {
  --color-primary: #409eff;
  --color-success: #67c23a;
  --color-info: #909399;
  --color-warning: #e6a23c;
  --color-danger: #f56c6c;
}

/* 字体颜色 */
.c-primary {
  color: var(--color-primary);
}

.c-success {
  color: var(--color-success);
}

.c-info {
  color: var(--color-info);
}

.c-warning {
  color: var(--color-warning);
}

.c-danger {
  color: var(--color-danger);
}

.c-white {
  color: #fff;
}

/* 背景颜色 */
.bg-primary {
  background-color: var(--color-primary);
}

.bg-success {
  background-color: var(--color-success);
}

.bg-info {
  background-color: var(--color-info);
}

.bg-warning {
  background-color: var(--color-warning);
}

.bg-danger {
  background-color: var(--color-danger);
}

.bg-white {
  background-color: #fff;
}

/* 粗体 */
.fb {
  font-weight: bold;  
}

/* 常用字体颜色 */

.c-333 {
  color: #333;
}

.c-666 {
  color: #666;
}

.c-999 {
  color: #999;
}

/* 常用背景颜色 */
.bg-f5f5f5 {
  background-color: #f2f2f2;
}

.bg-f5f5f5 {
  background-color: #f5f5f5;
}

.bg-fff {
  background-color: #fff;
}

/* flex start */

/* flex水平居中 */
.f-c {
  display: flex;
  justify-content: center;
}

/* flex向两边扩展 */
.f-b {
  display: flex;
  justify-content: space-between;
}

/* flex垂直水平居中 */
.f-c-c {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* flex元素 */
.f-1 {
  flex: 1;
}

/* flex end */

/* overflow */
.o-hidden {
  overflow: hidden;
}
```

## 使用

### 方式一

- 创建一个CSS文件将代码拷贝到文件里面
- 在项目里面引入这个文件

### 方式二

- 在代码位置单独下载这个文件，在项目中
- 在项目里面引入这个文件
