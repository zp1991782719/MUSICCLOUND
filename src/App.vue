import { default } from './components/HelloWorld.vue';
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default{
    name:'app',
    data(){
      return {
        list:['login']
      }
    },

    created(){
      // this.$http.get_('/top/playlist?limit=10&order=new').then( res => {
      //   console.log(res)
      // }) ;
      this.$router.push({name:'login'})
    },

    methods:{
      goPage(url){
        this.$router.push({name:'login'})
      }  
    }
  }
</script>

<style lang="less">
*{
  padding:0;
  margin:0;
}
html{
  width:100%;
  height:100%;
  padding:0;
  margin:0;
  body{
    width:100%;
    height:100%;
    padding:0;
    margin:0;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding:0;
  margin:0;
  font-size:0.16rem;
  width:100%;
  height:100%;
}
</style>
