<template>
  <div style="text-align:center;">
    <by-progress :percent="value" color="red"></by-progress>
    <br/>
  </div>
</template>

<script>
  /**
   * 使用须知
   * percent	Number	        进度百分比
   * color	string	#09BB07	  进度条颜色
   */
  import Progress from 'zyby-ui/components/Progress.vue'

  export default {
    components: {
      [Progress.name]: Progress
    },
    data () {
      return {
        value: '50',
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
