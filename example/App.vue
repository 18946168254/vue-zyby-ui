<template>
  <div id="app">
    <router-view class="child-view-no-slide"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
//    console.log('jkkj', this.getUrlParam('lession'))

  },
  methods: {
    getUrlParam (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURIComponent(r[2])
    return null
  }
  }
}
</script>

<style>
#app {
  background-color: #ffffff;
  height: 100%;
  max-width:677px;/*no*/
  margin-left:auto;
  margin-right:auto;
}
.child-view-no-slide {
  width: 100%;
  height: 100%;
}
</style>
