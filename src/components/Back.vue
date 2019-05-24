<template>
    <mt-button @click="goBack">
      <img src="../assets/icon/back.png" slot="icon">
    </mt-button>
</template>

<script>
  import { Button } from 'mint-ui'

  export default {
    name: 'byBack',
    components: {
      [Button.name]: Button
    },
    props: {
      specialBack: Function
    },
    data () {
      return {
      }
    },
    methods: {
      goBack () {
        if (this.specialBack && typeof this.specialBack == 'function')
          this.specialBack();
        else
          this.$router.goBack(this)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "../assets/css/function.less";

  img {
    .square-hw(60);
    vertical-align: middle;
  }
</style>
