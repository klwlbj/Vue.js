<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <!--尽让这里可以滚动-->
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <!--二次循环-->
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";

export default {
  name: "CityList",
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        // console.log(this.$refs[this.letter])
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
      // console.log(this.letter);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  // background red
  .title {
    line-height: 0.54rem;
    background-color: #eeeeee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        text-align: center;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        margin: 0.1rem;
        border: 0.02rem solid #ccc;
      }
    }
  }
}

.item-list {
  .item {
    line-height: 0.76rem;
    // color #666
    padding-left: 0.2rem;

    .border-bottom {
      &:before {
        border-color: #ccc;
      }
    }
  }
}
</style>
