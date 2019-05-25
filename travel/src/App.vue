<template>
  <div id="app">
    <keep-alive exclude="Detail"><!-- detail页面不缓存 -->
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
