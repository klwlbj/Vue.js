<template>
  <div class>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
          title: "长隆野生动物世界",
          desc: "熊猫三胞胎与您共享欢乐时光"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
          title: "长隆野生动物世界",
          desc: "熊猫三胞胎与您共享欢乐时光"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
          title: "长隆野生动物世界",
          desc: "熊猫三胞胎与您共享欢乐时光"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
          title: "长隆野生动物世界",
          desc: "熊猫三胞胎与您共享欢乐时光"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
  background-color: white;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
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

  .item-button {
    line-height: 0.44rem;
    background: #ff9300;
    padding: 0 0.1rem;
    border-radius: 0.06rem;
    margin-top: 0.16rem;
    color: #ffffff;
  }
}
</style>
