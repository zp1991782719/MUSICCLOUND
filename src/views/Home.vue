<template>
  <div class="home zp-fs16">
    <header class="zp-df zp-jcsb zp-aic header">
      <div><i class="icon-fenlei iconfont"></i></div>
      <div class="zp-f1 zp-df zp-jcsa header-box">
        <template v-for="head in headList">
          <div :key="head.id">{{ head.name }}</div>
        </template>
      </div>
      <div><i class="icon-sousuo iconfont zp-fs22"></i></div>
    </header>
    <main>
      <components></components>
    </main>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {

  },
  data(){
    return {
      headList:[
        {id:'1',name:'我的'},
        {id:'2',name:'发现'},
        {id:'3',name:'云村'},
        {id:'4',name:'视频'}
      ]
    }
  },
  methods:{
    
  }
};
</script>


<style lang="less" scoped>
  .home{
    width: 100%;
    height:100%;
    .header{
      padding:0.2rem;
      .header-box{
        padding:0 0.2rem;
      }
    }
  }
</style>
