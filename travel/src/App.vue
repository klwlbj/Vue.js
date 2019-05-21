<template>
  <div id="app">
    <keep-alive>
      <router-view/>
      <!-- 显示当前路由地址所对应的内容 -->
    </keep-alive>
  </div>
</template><!-- .vue结尾，单文件组件 -->


<script>
export default {
  name: "App"
};
</script>

<style>
</style>
