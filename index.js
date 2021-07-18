import Vue from 'vue'
import ScreenResize from './ScreenResize.vue'

ScreenResize.install = (Vue) => {
    Vue.component(ScreenResize.name, ScreenResize)
}

export default ScreenResize