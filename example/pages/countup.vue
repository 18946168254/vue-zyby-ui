<template>
  <div style="text-align:center;">
    <countup :end-val="1388" class="demo1"></countup>
    <br/>
    <countup :end-val="88.88" class="demo1"></countup>
    <br>
    <countup :end-val="1024" :start="doStart" class="demo1"></countup>
    <div style="padding:0 15px;">
      <button @click="doStart=true" type="primary"> 开始 </button>
    </div>
  </div>
</template>

<script>
  /**
   * 使用须知
   * 外部项目手动安装
   * "countup.js": "^2.0.4",
   *
   * npm i -s countup.js
   */
  import Countup from 'zyby-ui/components/CountUp.vue'

  export default {
    components: {
      Countup
    },
    data () {
      return {
        doStart: false
      }
    }
  }
</script>

<style scoped>
  .demo1 {
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    font-size: 6em;
    color: #04BE02;
  }
</style>
