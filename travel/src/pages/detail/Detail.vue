<template>
  <div>
    <detail-banner>dddd</detail-banner>
    <detail-header>ddd</detail-header>
    <div class="content">
      <detail-list :list="list">ddd</detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人五馆联票",
              children:[{
                title:'first',
              }]
            },
            {
              title: "成人2馆联票"
            },
            {
              title: "成人3馆联票"
            }
          ]
        },
        {
          title: "学生票"
        },
        {
          title: "老人票"
        },
        {
          title: "儿童票"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
