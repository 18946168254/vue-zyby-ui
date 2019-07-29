<template>
  <div class="video-player-box">
    <div class="play-container">
      <video ref="videoHandle" :src="videoUrl" :poster="poster"  style="display: inline" webkit-playsinline playsinline x5-playsinline x5-video-player-fullscreen="true"
             @play="onPlayerPlay($event)"
             @pause="onPlayerPause($event)"
             @timeupdate="onPlayerTimeupdate($event)"
             @loadedmetadata="onPlayerLoadedmetadata($event)"

      >您的浏览器不支持 video 标签。
      </video>
    </div>
    <div class="bg" v-if="bgVisible" :style="{background: `black url(${poster}) no-repeat center/auto 100%`}">
      <img src="../assets/img/btn_vedio_play@2x.png" @click="playVideo">
    </div>
    <div class="control">
      <i class="iconfont" :class="{'icon-bofang': playState !== 'play', 'icon-bofang1': playState === 'play'}" @click="play"></i>
      <range class="control-range" v-model="curTime" :min="0" :max="duration" @on-touchstart="onRangeTouchStart" @on-touchend="onRangeTouchEnd" @on-click="onRangeClick" :minHTML="curTimeFormmat" :maxHTML="durationFormmat"></range>
      <i class="iconfont" :class="{'icon-shengyin': isMuted, 'icon-jingyin': !isMuted}" @click="muted"></i>
      <i class="iconfont icon-quanpingzuidahua" @click="fullScreen"></i>
      <i class="iconfont icon-daochu" @click="picInPic"></i>
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
  import Range from 'zyby-ui/components/Range.vue'

  const secondFormmat = function (oriTime) {
    if (Number.isNaN(oriTime))
      return '0:00'
    let time = oriTime.toFixed(1),
      minutes = Math.floor((time / 60) % 60),
      seconds = Math.floor(time % 60)
    console.log(time, minutes)
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds
  }

  export default {
    name: 'by-video2',
    components: {
      Range
    },
    props: {
      videoUrl: String,
      poster: String
    },
    data () {
      return {
        bgVisible: true,
        isMuted: true,
        playState: 'play',
        curTime: 0,
        duration: 0,
      }
    },
    computed: {
      curTimeFormmat() {
        return secondFormmat(this.curTime)
      },
      durationFormmat() {
        console.log('duration:', this.duration)
        return secondFormmat(this.duration)
      }
    },
    methods: {
      playVideo () {
        this.$refs.videoHandle.play();
        this.bgVisible = false;
      },

      play(){
        if(this.playState === 'play' || this.playState === 'replay'){
          this.$refs.videoHandle.play();
//          this.startTimeBar();
        }else{
          this.$refs.videoHandle.pause();
//          this.stopTimeBar();
        }
      },
      muted () {
        this.$refs.videoHandle.muted = !this.$refs.videoHandle.muted;
        this.isMuted = !this.$refs.videoHandle.muted
      },
      fullScreen () {
        if (typeof this.$refs.videoHandle.webkitEnterFullscreen === 'function')
          this.$refs.videoHandle.webkitEnterFullscreen();
        else if (typeof this.$refs.videoHandle.mozRequestFullScreen === 'function')
          this.$refs.videoHandle.mozRequestFullScreen();
        else
          alert('不支持全屏')
      },
      picInPic () {
        this.$refs.videoHandle.requestPictureInPicture();
      },
      onError(e){
        this.haserror=false;
        if(this.videoURL != ''){
          this.playState='replay';
          this.haserror=true;
        }
      },
      onPlayerEnded(event){
        this.stopTimeBar();
        this.percentage=100;
        this.playState='replay';
      },
      onPlayerPlay(event){
        this.haserror=false;
        this.videoEvent=event;
        this.playState = 'pause';
        this.videoEvent.srcElement.volume=0.36;
      },
      onPlayerPause(event){
        this.playState='play';
      },
      onPlayerCanplay(event){
        this.haserror=false;
      },
      onPlayerTimeupdate(event){
        if (!this.duration) // 安卓 尤其小米，onPlayerLoadedmetadata 事件里无法获取到duration
          this.duration = event.srcElement.duration;
        this.curTime = (event.srcElement.currentTime);
      },
      onPlayerLoadedmetadata(event){
        this.duration = event.srcElement.duration;
      },
      onRangeTouchStart () {
        this.$refs.videoHandle.pause();
      },
      onRangeTouchEnd () {
        this.$refs.videoHandle.currentTime = this.curTime
        this.$refs.videoHandle.play();
      },
      onRangeClick (time) {
        this.$refs.videoHandle.currentTime = time
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
    .player-container {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 0;
      margin: 0;
      z-index: 1;
      background: #000;
    }
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
    .control {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50px;
      background: #fbf9fe;
      display: flex;
      align-items: center;
      z-index: 81;
      .control-range {
        flex: 1;
      }
    }
  }
</style>
