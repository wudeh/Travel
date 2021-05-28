<template>
  <div class="wrapper">
    <!-- v-if 的作用是当数据传送过来才显示轮播图 -->
    <swiper :options="swiperOption" v-if="showList">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <!-- Optional controls -->
    <!-- 这个 div 是分页标记，就是轮播图下面有几个小圆点的那个 -->
    <!-- 把 class 传进去就会显示分页标记 -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: { // 这个参数是 swiper 插件的参数设置
        pagination: '.swiper-pagination', // 控制是否显示分页标记
        loop: true, // 控制是否轮播循环
        autoplay: 3000,
        speed: 500,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showList () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active   // 让 .wrapper 中的 .swiper-pagination-bullet-active 都变成白色
  background-color #fff
.wrapper
  overflow hidden
  width: 100%
  height: 0
  // 这里教程中的图片和官网上的图片宽高已经不一样了
  padding-bottom 26.6666666%
  // .swiper-pagination-bullet-active 这里写样式让分页标记变色是没用的
  //   background red !importtant     因为分页标记的颜色是由插件组件控制的，不是我写的组件控制的，不信去掉注释试试】0000000
  .swiper-img
    width: 100%
</style>
