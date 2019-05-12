<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入
    </div>

    <div class="header-right">
      <router-link to="/city">{{this.city}}</router-link>
      <span class="iconfont">&#xe62d;</span>
    </div>

    <!-- 引入iconfont图标 -->
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  height: $headerHeight;
  background: $bgColor;
  color: #fff;
}

.header-left {
  margin: auto;
  margin-left: 0.2rem;
  width: 0.64rem;
  float: left;
  color: white;

  .back-icon： {
    text-align: center;
    font-size: 0.4rem;
  }
}

.header-right {
  width: 1.24rem;
  float: right;
  margin: auto;
  text-align: center;
  a {
    color: white;
  }
}

.header-input {
  flex: 1;
  padding-left: 0.2rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  height: 0.64rem;
  margin-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ddd;
}
</style>