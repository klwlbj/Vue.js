<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-reconmend :recommendList="recommendList"></home-reconmend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeReconmend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeReconmend,
    HomeWeekend
  },
  data() {
    return {
      // city: "",
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"]) //展开运算符，插入数组
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc); //获取时带城市参数
    },
    getHomeInfoSucc(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        // this.city = res.data.city;
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo(); //仅第一次运行
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo(); //非首次运行地址不同时再去获取json文件
    }
  }
};
</script>

<style lang="">
</style>