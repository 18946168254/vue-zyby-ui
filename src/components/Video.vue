<template>
  <div class="video-player-box">
    <video ref="videoHandle" :src="videoUrl" :poster="poster" controls webkit-playsinline playsinline x5-playsinline x5-video-player-fullscreen="true">
      您的浏览器不支持 video 标签。
    </video>
    <div class="bg" v-if="bgVisible" :style="{background: `black url(${poster}) no-repeat center/auto 100%`}">
      <img src="../assets/img/btn_vedio_play@2x.png" @click="playVideo">
    </div>
  </div>
</template>

<script>
  /**
   * video标签的伪 poster 功能
   * 适用于小米、三星、ios可用，华为不可用(究极是无法自动播放)。
   *
   * 注：效果体验并不是太好，建议由后台传输 此项 图片。
   */
  export default {
    name: 'byVideo',
    props: {
      videoUrl: String,
      poster: String
    },
    data () {
      return {
        bgVisible: true
      }
    },
    methods: {
      playVideo () {
        this.$refs.videoHandle.play();
        this.bgVisible = false;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "../assets/css/function.less";
  @import "../assets/css/mixin.less";
  .video-player-box {
    width: 100%;
    height: 400px;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      background: black;
    }
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      @flex-perfect-center();
      z-index:1;
      img {
        .square-hw(80);
      }
    }
  }
</style>
