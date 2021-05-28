<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  text-align: center
  font-size: .32rem
  color: #fff
  .header-left
    position absolute
    top: 0
    left: 0
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
      color: #fff
</style>
