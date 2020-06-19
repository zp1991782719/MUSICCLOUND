<template>
  <div class="zp-w100 zp-h100 ctn zp-dfl zp-aic zp-jcc">
    <div class="box">
      <div class="login-top"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',

    mixins: [
    ],

    components: {

    },

    props: {

    },

    data() {
      return {

      }
    },

    computed: {

    },

    watch: {

    },

    created() {

    },

    mounted() {

    },

    destroyed() {

    },

    methods: {

    }
  }
</script>

<style lang='less' scoped>
  .ctn{
    background-image: url('../assets/img/login_bg.png');
    background-size:cover;
    background-position: center;
    .box{
      width:75%;
      height:60%;
      .login-top{
        background-image: url('../assets/img/login_user.jpg');
        width:2rem;
        height:2rem;
      }
    }
  }
</style>
