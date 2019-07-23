<template>
  <div id="container" style="overflow: auto;">
    <br/>
    <br/>
    <div class="space-btn" @click="spaceChange">显示间隔</div>
    <div class="space-btn" @click="goHome">去首页</div>
    <div class="space" v-if="showSpace">间隔</div>
    <div style="height:44px;">
      <sticky
        scroll-box="container"
        ref="sticky"
        :offset="46"
        :check-sticky-support="false"
        :disabled="disabled">
        <div>
          即将上映
        </div>
      </sticky>
    </div>
    <p v-for="i in 100">{{i}}<br></p>
  </div>
</template>

<script>
  /**
   * 使用须知：
   * https://doc.vux.li/zh-CN/components/sticky.html
   *
   * 代码来自于vux的 sticky 组件，所以使用 和 原组件基本一致
   * 1、props介绍
   * scroll-box	string	window	滚动容器，默认为window，如果你使用了viewbox，那么你需要指定容器id：vux_view_box_body	--
   * check-sticky-support	boolean	true	是否检测当前浏览器是否支持sticky特性，禁用则在iPhone设置上也使用scroll实现	--
   * offset	number	0	距离顶部高度，在存在头部（如使用了x-header）的情况下需要设置一个距离	--
   * disabled	boolean	false	是否禁用，在某些浏览器禁用，比如万恶的 UC：不支持滚动事件
   *
   * 2、使用过程
   * a、scroll-box 指定了滚动容器，默认 window（但是有个问题，切换页面的时候，需要移除基于window的滚动事件）。
   * 所以最好直接指定，要求：height:100%，overflow：auto
   * b、sticky组件建议外层加一个div高度为内容高度，这样可以避免当定位为sticky时下面的元素会突然向上走。
   * c、由于存在数据延迟加载的情形，sticky块之前的元素 高度可能会有变化， 此时需要在 设置数据后，重新绑定
   * this.$nextTick(() => {
          this.$refs.sticky.bindSticky()
        })
   */


  import Sticky from 'zyby-ui/components/Sticky.vue'
  export default {
    components: {
      Sticky
    },
    data () {
      return {
        showSpace: false,
        disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
      }
    },
    methods: {
      spaceChange () {
        this.showSpace = !this.showSpace
        this.$nextTick(() => {
          this.$refs.sticky.bindSticky()
        })
      },
      goHome () {
        this.$router.push('/scrollHidden')
      }
    }
  }
</script>
<style scoped>
  .space-btn {
    padding: 5px 0;
    margin: 10px;
    text-align: center;
    border: 1px red solid;
  }
  .space {
    padding: 30px 0;
    margin: 10px;
    text-align: center;
    border: 1px green solid;
  }
</style>
