<template>
  <div class="home zp-fs16">
    <header class="zp-df zp-jcsb zp-aic header">
      <div><i class="icon-fenlei iconfont"></i></div>
      <div class="zp-f1 zp-df zp-jcsa header-box">
        <template v-for="(head,key) in headList">
          <div class="zp-f1" :key="head.id" @click="changeHeadIndex(head,key)">
            <div :class="{'select-head':key==headIndex,'zp-fs20':key==headIndex}" style="width:1rem;height:1rem;margin:0 auto;border-radius:50%;">{{ head.name }}</div>
          </div>
        </template>
      </div>
      <div><i class="icon-sousuo iconfont zp-fs22"></i></div>
    </header>
    <main>
      <components :is="headList[headIndex].url"></components>
    </main>
    <footer></footer>
    <div style="width:50px;height:50px;background-color:red;position:relative;animation:mymove 2s;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import cloud from '@/views/cloud/index.vue'
import find from '@/views/find/index.vue'
import my from '@/views/my/index.vue'
import video from '@/views/videoa/index.vue'

export default {
  name: "Home",
  components: {
    cloud,find,my,'top-viedo':video
  },
  data(){
    return {
      headIndex:0,
      headList:[
        {id:'1',name:'我的',url:'my'},
        {id:'2',name:'发现',url:'find'},
        {id:'3',name:'云村',url:'cloud'},
        {id:'4',name:'视频',url:'top-viedo'}
      ]
    }
  },
  created(){
    
  },

  methods:{
    changeHeadIndex(head,key){
      this.headIndex = key
    }
  }
};
</script>


<style lang="less" scoped>
  .home{
    width: 100%;
    height:100%;
    padding-top:0.2rem;
    box-sizing: border-box;
    .header{
      padding:0 0.2rem;
      height:1rem;
      line-height:1rem;
      .header-box{
        padding:0 0.2rem;
      }
    }
  }
  .select-head{
    animation: mymove 2s;
  }

  @keyframes mymove
  {
    0%{
      background-color:#dddddd;
    }
    100%{
      background-color:white;
    }
  }
</style>
