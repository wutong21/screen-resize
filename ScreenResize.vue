<template>
  <div
    class="screen-resize"
    :style="`transform: scale(${width}, ${height})`"
  >
    <template>
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "ScreenResize",
  props: {
    screenWidth: {type: Number, default: 1920},
    screenHeight: {type: Number, default: 1080},
  },
  data() {
    return {
      width: 1,
      height: 1,
    };
  },
  created(){
    this.renderResize()
  },
  methods: {
    renderResize() {
      const that = this;
      const dom = document.getElementsByClassName("screen-resize")[0];
      let standardWidth = this.screenWidth;
      let standardHeight = this.screenHeight;
      let clientWidth = document.body.clientWidth;
      let clientHeight = document.body.clientHeight;
      that.width = clientWidth / standardWidth;
      that.height = standardHeight / clientHeight;
      window.addEventListener("resize", () => {
        clientWidth = document.body.clientWidth;
        clientHeight = document.body.clientHeight;
        that.width = clientWidth / standardWidth;
        that.height = standardHeight / clientHeight;
      });
    },
  },
};
</script>

<style>
.screen-resize {
  transform-origin: left top;
  overflow: hidden;
}
</style>