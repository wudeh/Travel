<template>
  <div class="container demo-1">
    <div class="content">
        <div id="large-header" class="large-header">
            <canvas id="demo-canvas"></canvas>
            <div class="logo_box">
                <h3>欢迎你</h3>
                <form action="#" name="f" method="post">
                    <div class="input_outer">
                        <span class="u_user"></span>
                        <input v-model="username" name="username" class="text" style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
                    </div>
                    <div class="input_outer">
                        <span class="us_uer"></span>
                        <input v-model="password1" name="password" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"value="" type="password" placeholder="请输入密码">
                    </div>
                        <div class="layui-input-block">
                          <input @click="change()" type="radio" name="sex" value="普通成员" title="普通成员" :checked="guanliyuan"> &nbsp; &nbsp;普通成员&nbsp;&nbsp;&nbsp;&nbsp;
                          <input type="radio" name="sex" value="管理员" title="管理员">&nbsp;&nbsp;&nbsp;管理员
                        </div>
                    <div @click="login()" class="mb2"><a id = "sub" lay-filter="sub" class="act-but submit" href="javascript:;" style="color: #FFFFFF">登录</a></div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      password1: '',
      username: '',
      guanliyuan: true,
      aaa: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    change(){
      this.guanliyuan = false;
    },
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
    login(){
      // alert('哈哈哈哈');
      
      if(this.guanliyuan){
        console.log('哈哈哈哈哈');
      }
      var name = this.username;
      var pass = this.password1;
      var str = "abc123def";
      var patt1 = /[0-9]+/;
      console.log(str.match(patt1));
      var email = '1650024814@.com';
      var patt = /^.{9,12}$/;
      if(!this.username.match(patt)){
        layui.use('layer', function(){
          var layer = layui.layer;
          layer.msg('用户名长度应为3-12');
        });
      }
      // console.log(name.match(/^\d{6,}$/));
      
  }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // 这个钩子函数是使用 keepalive 会出现的
    // 每次页面跳转会执行
    // 如果城市没变的话就不要 ajax 请求
    // 变了的话发新的 ajax 请求数据
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  
}
</script>

<style>
</style>
