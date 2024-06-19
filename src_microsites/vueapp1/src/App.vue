<template>
  <div id="app" class="fullscreen-container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style>
/* 确保iframe撑满其父容器 */
.fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden; /* 隐藏滚动条 */
}
</style>
