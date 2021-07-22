# screen-resize

组件根据浏览器大小缩放

# 使用

npm install screen-resize

## 代码实例

main.js

```js
import screenResize from "screen-resize";
Vue.use(screenResize);
```

.vue

```html
<screen-resize>
  <div>// ...需要屏幕缩放的内容</div>
</screen-resize>
```

## 后续开发计划

1. 添加可配置参数
2. 添加单元测试
   当前组件未进行单元测试，在项目中使用存在一定风险

## TIP

1. 建议使用百分比搭配 flex 进行布局
2. 将 body 的 margin 设为 0

```css
body {
  margin: 0;
  height: 100vh;
  width: 100vw;
}
```
