<template>
  <div style="text-align:center;">
    <!--<by-video video-url="http://120-bayin-vides-test.oss-cn-beijing.aliyuncs.com/upload/videos/20190709/1562615580000.mp4" poster="http://120-bayin-vides-test.oss-cn-beijing.aliyuncs.com/upload\/images\/20190709\/1562615580000.jpg"></by-video>-->
    <by-video2 video-url="http://120-bayin-vides-test.oss-cn-beijing.aliyuncs.com/upload/videos/20190709/1562615580000.mp4" poster="http://120-bayin-vides-test.oss-cn-beijing.aliyuncs.com/upload\/images\/20190709\/1562615580000.jpg"></by-video2>
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
  import Video2 from 'zyby-ui/components/Video2.vue'

  export default {
    components: {
      [Video2.name]: Video2
    },
    data () {
      return {
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
