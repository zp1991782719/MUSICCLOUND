<template>
  <div class="zp-w100 zp-h100 ctn zp-df zp-fdc zp-aic zp-jcc">
    <div class="box zp-df zp-fdc zp-aic zp-jcsb">
      <div class="login-top"></div>
      <div class="login-ctn">
        <div class="zp-df zp-aic login-box">
          <i class="iconfont icon-zhanghao"></i>
          <i-input
            :value.sync="username"
            placeholder="请输入手机号或者邮箱"
            size="large"
            style="margin-left:0.3rem;"
          ></i-input>
        </div>

        <div class="zp-df zp-aic login-box">
          <i class="iconfont icon-mima"></i>
          <i-input
            :value.sync="password"
            type="password"
            placeholder="请输入密码"
            size="large"
            style="margin-left:0.3rem;"
          ></i-input>
        </div>
      </div>

      <div class="zp-w100">
        <div @click="toExperience()" class="experience">立即体验</div>
        <i-button
          @click="toLogin()"
          class="zp-asfe"
          type="primary"
          long
          size="large"
          style="opacity:0.8;"
        >登录</i-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",

  mixins: [],

  components: {},

  props: {},

  data() {
    return {
      username: "",
      password: ""
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    toLogin() {
      console.log("toLogin");   
    },

    toExperience() {
      this.$router.push({name:'home'})
    }
  }
};
</script>

<style lang='less' scoped>
.ctn {
  background-image: url("../assets/img/login_bg.png");
  background-size: cover;
  background-position: center;
  .box {
    width: 75%;
    height: 65%;
    color: white;
    .login-top {
      background-image: url("../assets/img/login_user.jpg");
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      margin: 0 auto;
      opacity: 0.9;
    }
    .login-ctn {
      width: 100%;
      .login-box {
        padding: 0.1rem 0;
        margin: 0.3rem 0;
        opacity: 0.6;
      }
    }
    .experience {
      color: red;
      display: inline-block;
      padding: 0.1rem 0;
      margin: 0.2rem 0;
      border-bottom: 1px solid red;
    }
  }
}
</style>
