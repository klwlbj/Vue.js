<template>
  <div class="header">
    城市选择
    <router-link to="/"><div class="iconfont header-back">&#xe624;</div></router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: white;
  background-color: $bgColor;
  font-size: 0.32rem;

  .header-back {
    text-align: center;
    top: 0;
    left: 0;
    width: 0.64rem;
    fontsize: 0.4rem;
    position: absolute;
    color white
  }
}
</style>
