<template>
  <div class="video-container special-container">
    <video ref="videoHandle" :src="videoUrl" class="video-common" muted autoplay="autoplay" controls="controls" webkit-playsinline playsinline>
      您的浏览器不支持 video 标签。
    </video>
    <div @click="play()" v-if="visible">
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
    name: 'byZVideo',
    props: {
      videoUrl: String
    },
    data () {
      return {
        visible: true
      }
    },
    mounted () {
      const el = this.$refs.videoHandle
      el.posterSetted = false
      el.addEventListener('timeupdate',() => {
        if (!el.posterSetted) {
          el.pause();
          el.currentTime = 0;
          el.posterSetted = true
        }
      })
    },
    methods: {
      play () {
        this.$refs.videoHandle.posterSetted = true;
        this.$refs.videoHandle.play();
        this.visible = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  .video-common {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
  .special-container {
    position: relative;
    div {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
</style>
