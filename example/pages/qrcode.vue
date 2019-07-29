<template>
  <div style="text-align:center;">
    <qrcode :value="value" :fg-color="fgColor"></qrcode>
    <br/>
  </div>
</template>

<script>
  /**
   * 使用须知
   * 基于qr.js
   * value	string		编码内容，如果为链接，请保证有http(s)协议名	--
   * size	number	80	尺寸大小	--
   * bg-color	string	#FFFFFF	背景颜色	--
   * fg-color	string	#000000	二维码着色	--
   * type	string	img	渲染类型，可以为img(适合需要在微信需要长按识别的场景)和canvas
   */
  import Qrcode from 'zyby-ui/components/Qrcode.vue'

  export default {
    components: {
      Qrcode
    },
    mounted () {
      setInterval(() => {
        this.value = `https://vux.li?t=${Math.random()}`
        this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      }, 1000)
    },
    data () {
      return {
        value: 'https://vux.li',
        fgColor: '#000000'
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
