<template>
  <div>
    <div class="stage-container">
      <div class="stage-col" v-for="(item, index) in stages" :key="index">
        <div class="stage-num" :class="{'finish-stage-num': curStage == index}">{{index+1}}</div>
        <div class="stage-text" :class="{'finish-stage-text': curStage == index}">{{item}}</div>
      </div>
      <div class="stage-line">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'byStage',
    props: [
      'curStage'
    ],
    data () {
      return {
        stages: ['签订协议', '详细资料填写', '申请人资料', '等待审核']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "../assets/css/function.less";
  @import "../assets/css/mixin.less";
  @stage-num-height: 70;
  @stage-padding-top: 20;

  @font-face {
    font-family: DIN-Bold;
    src: url('../assets/fontFamily/DIN-Bold.otf')
  }

  .finish-stage-num {
    background-color: #009F8A !important;
  }
  .finish-stage-text {
    color: #009F8A !important;
  }

  .stage-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: @stage-padding-top * 1px;
  }
  .stage-col {
    display: flex;
    flex-flow: column;
    align-items: center;
    z-index: 1;
  }
  .stage-num {
    .square-hw(@stage-num-height);
    border-radius: 50%;
    background-color: #E6E6E6;
    font-family: DIN-Black;
    font-size: 26px;
    color: #FFFFFF;
    @flex-perfect-center();
  }
  .stage-text {
    margin-top: 10px;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: rgba(0,0,0,0.80);
  }
  .stage-line {
    border-top: 1px dashed rgba(0,0,0,0.10);/*no*/
    position: absolute;
    top: (@stage-num-height/2 + @stage-padding-top) * 1px;
    left: 5%;
    width: 90%;
  }
</style>
