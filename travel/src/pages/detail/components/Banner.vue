<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg"
        alt
      >
      <div class="banner-info">
        <div class="banner-title">广州长隆旅游度假区(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe66e;</span>
          30
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png",
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    display: flex;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      font-size: 0.24rem;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 0.2rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
