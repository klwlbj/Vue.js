<template>
  <div class> <!--样式仿recommend模块-->
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array //接收
  },
  data() {
    return {
      // recommendList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
      //     title: "长隆野生动物世界",
      //     desc: "熊猫三胞胎与您共享欢乐时光"
      //   },
      //   {
      //     id: "0002",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
      //     title: "长隆野生动物世界",
      //     desc: "熊猫三胞胎与您共享欢乐时光"
      //   },
      //   {
      //     id: "0003",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
      //     title: "长隆野生动物世界",
      //     desc: "熊猫三胞胎与您共享欢乐时光"
      //   },
      //   {
      //     id: "0004",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
      //     title: "长隆野生动物世界",
      //     desc: "熊猫三胞胎与您共享欢乐时光"
      //   }
      // ],
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  // margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}

.item-info {
  padding: 0.1rem;
}

.item-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 33.9%;
}

.item-img {
  width: 100%;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  ellipsis(); // 引入~styles/mixins.styl的ellipsis()
}

.item-desc {
  color: #ccc;
  ellipsis(); // 引入~styles/mixins.styl的ellipsis()
  line-height: 0.4rem;
}
</style>
