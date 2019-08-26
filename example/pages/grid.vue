<template>
  <div style="text-align:center;">
    <h1>2 columns</h1>
    <grid>
      <grid-item label="Grid" v-for="i in 2" :key="i">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
    </grid>
    <h1>3 columns</h1>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/component/cell" label="'Go to Cell'">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
      <grid-item label="Go to Cell">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
      <grid-item>
        <img slot="icon" src="../assets/grid_icon.png">
        <span slot="label">{{ 'Go to Cell' }}</span>
      </grid-item>
    </grid>
    <h1>4 columns</h1>
    <grid :show-lr-borders="false">
      <grid-item label="Grid" v-for="i in 4" :key="i">
        <img slot="icon" src="../assets/grid_icon.png">
      </grid-item>
    </grid>
    <h1> {{ 'Custom content' }} </h1>
    <grid :show-vertical-dividers="false">
      <grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
    <h1> {{ 'Custom col' }} </h1>
    <grid :cols="4" :show-lr-borders="false">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
  /**
   * 使用须知
   * grid 与 grid-item 一起使用
   *
   * grid 组件
   * cols	number	3	列数。如果为非单行 Grid，需要设置 cols，否则所有 GridItem 会平均宽度显示在一行。
   * show-lr-borders	boolean	true	是否显示左右边框	v2.8.1
   * show-vertical-dividers	boolean	true	是否显示垂直分割线
   *
   * grid-item 组件
   * icon	图标内容，直接使用img标签	--
   * label	label 文字的 slot，作用同 prop:label
   */
  import Grid from 'zyby-ui/components/Grid.vue'
  import GridItem from 'zyby-ui/components/GridItem.vue'

  export default {
    components: {
      Grid,
      GridItem,
    },
    data () {
      return {
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
