<template>
  <div class="hello">
    <h1>zyby-ui</h1>
    <call-phone phone="18946168254"></call-phone>
    <back></back>
    <button @click="pd.tagInputVisible = true">展示aword</button>
    <hr>
    <hr>
    <count-down :endTime="pd.endTime"></count-down>
    <hr>
    <hr>
    <img-upload :imgUrl="pd.imgUrl" :imgActions="imgData.actions">
      <div>上传头像</div>
    </img-upload>
    <hr>
    <hr>
    <radio :radiosData="sexRadios.options"></radio>
    <hr>
    <stage class="zyby-container" curStage="2"></stage>
    <a-word ref="awordHandle"  :visible="pd.tagInputVisible" :hideCb="hideTagInput" :model="'teacherTag'"></a-word>
  </div>
</template>

<script>

  import CallPhone from '@/components/CallPhone.vue'
  import Back from '@/components/Back.vue'
  import AWord from '@/components/AWord.vue'
  import CountDown from '@/components/CountDown.vue'
  import ImgUpload from '@/components/ImgUpload.vue'
  import Radio from '@/components/Radio.vue'
  import Stage from '@/components/Stage.vue'

  export default {
    components: {
      CallPhone,
      Back,
      AWord,
      CountDown,
      ImgUpload,
      Radio,
      Stage
    },
    data () {
      return {
        teacherTag: null,
        pd: {
          tagInputVisible: false,
          endTime: '2019/08/09',
          imgUrl: null,
        },
        imgData: {
          actions: [
            {name: '拍照', method: () => alert(1)},
            {name: '从相册中选择', method:  () => alert(2)}
          ]
        },
        sexRadios: {
          options: [{id:1, title: '男'}, {id:2, title: '女'}]
        }
      }
    },
    mounted () {
    },
    computed: {

    },
    methods: {
      hideTagInput () {
        this.pd.tagInputVisible = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
