<template>
  <div id="container" style="overflow: auto;">
    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)">
    <div class="space-btn" @click="goHome">去首页</div>
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
    </div>
  </div>
</template>

<script>
  /**
   * 使用须知：
   * https://doc.vux.li/zh-CN/components/previewer.html
   *
   * 代码来自于vux的 previewer 组件(基于 x-photoswipe 插件)，所以使用 和 原组件基本一致
   * 1、使用过程
   * a、显示特定index的图片，使用ref:  this.$refs.previewer.show(index)
   * b、注意，当你自定义添加按钮时，需要在 photoswipe 选项设置 clickable 元素，否则点击将没有响应
         <previewer ref="previewer" :list="previewerList" :options="options">
           <template slot="button-after">
             <span class="previewer-delete-icon-box">
              <img src="../assets/previewer_delete_icon.png" width="22" height="22" class="previewer-delete-icon" @click.prevent.stop="removeImg">
             </span>
           </template>
         </previewer>

         options: {
            isClickableElement: function (el) {
            return /previewer-delete-icon/.test(el.className)
            }
          }
   *
   * 2、注意事项
   * a、建议为所有图片定义尺寸   PhotoSwipe 本身要求设置宽高，Previewer 组件会尝试对没有设置宽高的图片先加载再显示，可能会造成性能问题或者宽带浪费
   * b、外层用 v-transfer-dom指令的 div包裹：好处是，会将组件dom 移动到 指定位置（默认body），避免一些因为 z-index而出现的问题
   */


  import Previewer from 'zyby-ui/components/Previewer.vue'
  import TransferDom from 'zyby-ui/directives/transfer-dom'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Previewer
    },
    data () {
      return {
        list: [{
          msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          w: 800,
          h: 400
        },
          {
            msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
            src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
            w: 1200,
            h: 900
          }, {
            msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
            src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
          }],
        options: {
          getThumbBoundsFn (index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }
      }
    },
    methods: {
      logIndexChange (arg) {
        console.log(arg)
      },
      show (index) {
        this.$refs.previewer.show(index)
      },
      goHome () {
        this.$router.push('/scrollHidden')
      }
    }
  }
</script>
<style scoped>
</style>
