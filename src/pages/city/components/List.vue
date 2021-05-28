<template>
<div class="list" ref="wrapper">
     <!-- 这个多出来的 div 是 better-scroll 插件要求的结构 -->
  <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{ this.currentCity }}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item of hotCities" :key="item.spell" @click="handleCityClick(item.name)">
          <div class="button">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{ key }}</div>
      <div class="item-list" v-for="innerItem of item" :key="innerItem.name" @click="handleCityClick(innerItem.name)">
        <div class="item border-bottom">{{ innerItem.name }}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// 使用 better-scroll 插件实现超出部分滑动效果，并实现弹出动画效果
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      // 这个意思是把 vuex 中的 city 值映射到新增计算属性 currentCity 中
      // 等于多了一个 currentCity 属性，方便直接调用
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 调用 vuex 中的 actions 中的 changeCity 方法，通过 dispatch 调用
      this.changeCity(city)
      this.$router.push('/')
    },
    // 把 vuex 中 mapMutations 里的changeCity 方法映射到这个组件中
    // 相当于这个组件有了 changeCity 方法
    // 这个的话调用 this.changeCitycity) 就相当于 this.$store.commit('changeCity', city)
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      // 这里通过 ref 是循环渲染出来的，这样获取到的是数组不是对象，所以加了个 [0]，得到字母
      if (this.letter) { // 滑动到最后 Z 字母下面会出问题，做个判断
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
.title
  line-height: .54rem
  background: #eee
  padding-left: .2rem
  color: #666
  font-size: .26rem
.button-list
  overflow: hidden
  padding: .1rem .6rem .1rem .1rem
  .button-wrapper
    float: left
    width: 33.33%
    .button
      margin: .1rem
      padding: .1rem 0
      text-align: center
      border: .02rem solid #ccc
      border-radius: .06rem
.item-list
  .item
    line-height: .76rem
    padding-left: .2rem
</style>
