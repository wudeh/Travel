<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="img-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: { // 这个参数是 swiper 插件的参数设置
        pagination: '.swiper-pagination'// 控制是否显示分页标记
      }
    }
  },
  computed: {// 内容超出自动分页
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) { // 如果这个图标是在下一页且下一页图标数组没有创建
          pages[page] = []// 创建新图标数组来存储图标信息
        }
        pages[page].push(item)// 存储图标信息
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container  // 解决点击空白区不能翻页问题
  height: 0
  padding-bottom: 52%
.icons >>> .swiper-pagination-bullet-active   // 让 .icon 中的 .swiper-pagination-bullet-active 都变成白色
  background-color: rgba(0,175,190,.8)
.swiper-pagination
  bottom: 0
.icons
  margin-top: .2rem
  .icon
    position: relative
    float: left
    overflow: hidden
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .img-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
