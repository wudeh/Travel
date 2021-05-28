<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of imgs" :key="item">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: { // 这个参数是 swiper 插件的参数设置
        pagination: '.swiper-pagination', // 控制是否显示分页标记
        loop: true, // 控制是否轮播循环
        autoplayDisableOnInteraction: false,
        paginationType: 'fraction',
        // 下面两个参数的意思是当 swiper 监听到父元素或自己 dom 结构变化
        // 自己就刷新一次，解决自身宽度计算不正确的问题
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: #000
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
