<template>
  <mt-popup class="mint-popup-modal" modal="false" v-model="visible" position="right">
    <div class="page-container">
      <mt-header fixed :title="pd.title">
        <by-back slot="left" :specialBack="hidePage"></by-back>
        <span class="zyby-mint-header-right" slot="right" @click="finish">完成</span>
      </mt-header>
      <main class="container-margin-top-header">
        <mt-field class="mint-field-custom" :placeholder="pd.placeholder" :attr="pd.inputAttr" v-model="content"></mt-field>
      </main>
    </div>
  </mt-popup>
</template>
<script>
  import { Toast, Header, Field, Popup } from 'mint-ui'
  import Back from 'zyby-ui/components/Back.vue'

  export default {
    name: 'byAWord',
    props: {
      visible: Boolean,
      hideCb: Function,
      finishCb: Function,
      model: {
        type: String,
        default: 'custom', //自定义
        validator(value) {
          return [
              'custom',
              'intro',
              'org',
              'school',
              'tag',
              'teacherTag'
            ].indexOf(value) > -1;
        }
      },
      customModelOption: Object
    },
    components: {
      [Back.name]: Back,
      [Header.name]: Header,
      [Field.name]: Field,
      [Popup.name]: Popup
    },
    data () {
      return {
        pd: {
          title: null,
          placeholder: null,
          inputAttr: {}
        },
        content: null
      }
    },
    mounted() {
      this.init();
    },
    computed: {
    },
    methods: {
      hidePage () {
        this.hideCb();
      },
      initContent (word) {
        this.content = word;
      },
      init () {
        if (this.model === 'custom') {
          this.pd = this.customModelOption
          return
        }
        let datas = {
          intro: {
            title: '介绍',
            placeholder: '一句话介绍自己',
            inputAttr: {maxlength: 20}
          },
          org: {
            title: '机构名称',
            placeholder: '输入机构名称',
            inputAttr: {maxlength: 15}
          },
          school: {
            title: '学校名称',
            placeholder: '输入学校名称',
            inputAttr: {maxlength: 10}
          },
          tag: {
            title: '课程标签',
            placeholder: '输入课程标签',
            inputAttr: {maxlength: 3}
          },
          teacherTag: {
            title: '教师标签',
            placeholder: '输入教师标签',
            inputAttr: {maxlength: 5}
          }
        }
        this.pd = datas[this.model];
      },
      finish () {
        if (!this.content)
          Toast('内容不能为空')
        else {
          this.hideCb();
          this.finishCb(this.content)
        }

      }
    },
    created () {
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../assets/css/variable.less";
  @import "../assets/css/componentDeep.less";
  //popup 展示为modal
  .mint-popup-modal {
    width: 100%;
    height:100%;
  }
  .zyby-mint-header-right {
    color: @base-finish-color;
  }
  .page-container {
    background: #f6f9fc;
    min-height: 100vh;
    main {
      padding-top: 30px;
      /deep/ .mint-cell-wrapper {
        padding: 0 @base-dom-lr-padding;
      }
      .mint-cell {
        background-image: none;
      }
    }
  }

</style>
