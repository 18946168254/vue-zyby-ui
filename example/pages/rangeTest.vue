<template>
  <div style="text-align:center;">
    {{data1}}
    <div class="demo1">
      <by-range v-model="data1" @on-change="onChange" style="flex:1"></by-range>
    </div>

  </div>
</template>

<script>
  /**
   * 使用须知
   *
   * 支持 点击 修改。
   * 可二次修改range 前后值
   *
   */
  import Range from 'zyby-ui/components/Range.vue'

  export default {
    components: {
      [Range.name]: Range
    },
    data () {
      return {
        data1: 20
      }
    },
    methods: {
      onChange (val) {
        console.log('change', val)
      },
    }
  }
</script>

<style scoped>
  .demo1 {
    height: 50px;/*no*/
    display: flex;
    align-items: center;
  }
</style>
