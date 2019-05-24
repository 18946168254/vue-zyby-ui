<template>
  <a v-bind:href="'tel:'+phone"><slot>{{phone}}</slot></a>
</template>

<script>
  export default {
    name: 'CallPhone',
    props: [
      'phone'
    ],
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>
