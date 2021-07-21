# screen-resize
组件根据浏览器大小缩放

# 使用

npm install screen-resize

## 代码实例
main.js 
```js
import screenResize from 'screen-resize'
Vue.use(screenResize)
```
```html
  <screen-resize>
    <div>
      // ...需要屏幕缩放的内容
    </div>
  </screen-resize>
```

## 后续开发计划
1. 添加可配置参数
2. 添加单元测试
  当前组件未进行单元测试，在项目中使用存在一定风险
