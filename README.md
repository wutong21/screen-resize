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

1. 添加可配置参数 screenWidth、screenHeight 配置当前设计图或最佳适配屏幕的宽高，
   默认为1920*1080
2. 添加单元测试
   当前组件未进行单元测试，在项目中使用存在一定风险


## Demo

https://codesandbox.io/s/objective-hermann-1420kh?file=/src/App.vue

## TIP

1. 建议使用百分比搭配 flex 进行布局
2. 将 最外层 的 margin 设为 0

```css
最外层 {
  margin: 0;
  height: 100vh;
  width: 100vw;
}
```
