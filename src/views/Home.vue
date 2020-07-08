<template>
  <div class="home zp-fs16">
    <header class="zp-df zp-jcsb zp-aic header">
      <div>
        <i class="icon-fenlei iconfont"></i>
      </div>
      <div class="zp-f1 zp-df zp-jcsa header-box zp-fs20">
        <template v-for="(head,key) in headList">
          <div class="zp-f1 header-tabs" :key="head.id" @click="changeHeadIndex(head,key)">
            <div
              class="header-tab"
              :class="{'header-tab-select':key===headIndex.now,'header-tab-select-animation':key===headIndex.now&&headIndex.now===headIndex.pre}"
              style="width:1rem;margin:0 auto;border-radius:50%;position:relative"
            >{{ head.name }}</div>
          </div>
        </template>
      </div>
      <div>
        <i class="icon-sousuo iconfont zp-fs22"></i>
      </div>
    </header>
    <main>
      <components :is="headList[headIndex.now].url"></components>
    </main>
    <footer>{{a}}</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import cloud from "@/views/cloud/index.vue";
import find from "@/views/find/index.vue";
import my from "@/views/my/index.vue";
import video from "@/views/videoa/index.vue";

export default {
  name: "Home",
  components: {
    cloud,
    find,
    my,
    "top-viedo": video
  },
  data() {
    return {
      headIndex: { pre: null, now: 0 },
      headList: [
        { id: "1", name: "我的", url: "my" },
        { id: "2", name: "发现", url: "find" },
        { id: "3", name: "云村", url: "cloud" },
        { id: "4", name: "视频", url: "top-viedo" }
      ],
      a:123
    };
  },

  created() {},

  mounted(){},

  methods: {
    changeHeadIndex(head, key) {
      this.headIndex.pre = this.headIndex.now
      this.headIndex.now = key
    }
  }
}
</script>


<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  padding-top: 0.1rem;
  box-sizing: border-box;
  .header {
    padding: 0 0.2rem;
    height: 1rem;
    line-height: 1rem;
    .header-box {
      padding: 0 0.2rem;
      .header-tabs {
        perspective: 80px;
        .header-tab {
          color:gray;
          transition: transform 0.3s;
          transform: translateZ(-3px);
        }
        .header-tab-select{
          color:#000000;
          transform: translateZ(0px);
          animation:backg 0.5s linear 1;
        }
        .header-tab-select-animation{
          animation: mymove 0.4s linear 1;
        }
      }
    }
  }
}

@keyframes backg {
  0% {
    background-color: #dddddd;
  }
  100% {
    background-color: white;
  }
}

@keyframes mymove {
  0% {
    background-color: #dddddd;
    transform: translateZ(0px);
  }
  50% {
    transform: translateZ(-5px);
  }
  100% {
    background-color: white;
    transform: translateZ(0px);
  }
}
</style>
