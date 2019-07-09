<template>
  <footer :style="{visibility: footerDisplay}">
    <slot><div style="position: absolute">底部固定块</div></slot>
  </footer>
</template>

<script>

  export default {
    name: 'byScrollHideFooter',
    props: {
      containerId: String
    },
    data () {
      return {
        footerDisplay: 'visible'
      }
    },
    mounted () {
      //获取接触屏幕时的X和Y
      let startX, startY, endX, endY, distanceX, distanceY, containerDOM = document.getElementById(this.containerId)
      containerDOM.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].pageX,
          startY = e.changedTouches[0].pageY;
      })
      containerDOM.addEventListener('touchmove', (e) => {
        //获取滑动屏幕时的X,Y
        endX = e.changedTouches[0].pageX;
        endY = e.changedTouches[0].pageY;
        //获取滑动距离
        distanceX = endX - startX;
        distanceY = endY - startY;
        //判断滑动方向
        // if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>0){
        //     console.log('往右滑动');
        // }else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<0){
        //     console.log('往左滑动');
        // }else
        if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0) {
          this.footerDisplay = 'hidden'
          console.log('往上滑动', distanceY);
        } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
          this.footerDisplay = 'visible'
          console.log('往下滑动');
        } else {
          console.log('点击未滑动');
        }
      })
      containerDOM.addEventListener('touchend', (e) => {
        this.footerDisplay = 'visible'
      })
    },
    methods: {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  footer {
    height: 100px;
    width: 100%;
    position: fixed; bottom: 0
  }
</style>
