<template>
  <div id="container">
    <h1>zyby-ui</h1>
    <main style="height: 200vh; background-color: #13DBBF"></main>
    <scroll-hide-footer containerId="container"><button @click="goHome">去测试主页</button></scroll-hide-footer>
  </div>
</template>

<script>
  import ScrollHideFooter from 'zyby-ui/components/ScrollHideFooter.vue'

  export default {
    components: {
      ScrollHideFooter
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    computed: {

    },
    methods: {
      goHome () {
        this.$router.push('/zybyui')
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
</style>
