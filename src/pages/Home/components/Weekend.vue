<template>
  <div>
    <div class="title">周末推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.imgUrl">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
        <p class="item-title">{{ item.title }}</p>
        <p class="item-desc">{{  item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height: .8rem
  background: #eee
  text-indent: .4rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-info
  padding: .2rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    font-size: .24rem
    color: #616161
    ellipsis()
</style>
