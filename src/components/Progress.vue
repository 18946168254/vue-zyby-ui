<template>
  <div class="progress">
    <div class="progress__bar">
      <div class="progress__inner-bar" :style="{width: percent + '%', backgroundColor: color}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ByProgress',
    props: {
      percent: {
        type: Number,
        default: 0
      },
      color: {
        type: String,
        default: '#09BB07'
      }
    },
    methods: {
    }
  }
</script>

<style lang="less">
  @progressBg: #EBEBEB;
  @progressHeight: 3px;

  .progress {
    display: flex;
    align-items: center;
  }

  .progress__bar {
    background-color: @progressBg;
    height: @progressHeight; /*no*/
    flex: 1;
  }

  .progress__inner-bar {
    width: 0;
    height: 100%;
  }
</style>
