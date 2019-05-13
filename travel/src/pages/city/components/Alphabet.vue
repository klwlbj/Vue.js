<template>
  <div class="list">
    <ul class="list">
      <li class="item">a</li>
      <li class="item">a</li>
      <li class="item">a</li>
      <li class="item">a</li>
      <li class="item">a</li>
      <li class="item">a</li>
      <li class="item">a</li>
      <li class="item">a</li>
      <li class="item">a</li>
      <li class="item">a</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
