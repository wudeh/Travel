<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
    景点详情
      <router-link to="/">
        <div class="header-left">
          <div class="iconfont header-fixed-icon">&#xe624;</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {// 这个数值是控制头部渐隐渐现效果的
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        // 滚动到 140 像素时透明度最大
        let opacity = top / 140
        this.showAbs = false
        this.opacityStyle = { opacity }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 给 window 添加一个滚动事件
    // 页面一滚动,handleScroll 就会执行
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 页面跳转的时候执行
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  text-align: center
  border-radius: .4rem
  background: rgba(0, 0, 0, .8)
  .header-abs-back
    color: #ffffff
    font-size: .4rem
.header-fixed
  z-index 2
  position: fixed
  left: 0
  top: 0
  right: 0
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  text-align: center
  font-size: .32rem
  color: #fff
  .header-left
    position: absolute
    top: 0
    left: 0
    width: .64rem
    float: left
    .header-fixed-icon
      text-align: center
      font-size: .4rem
      color: #fff
</style>
