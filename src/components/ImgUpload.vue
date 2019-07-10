<template>
  <div class="zyby-img-upload-common auth-img-item" :class="{'img-item-special': !imgUrl}">
    <div v-if="!imgUrl" @click="showUploadAction">
      <img src="../assets/icon/btn_data_upload.png">
      <div class="text-desc"><slot>上传图片</slot></div>
    </div>
    <img class="exist-img" v-else :src="imgUrl | imgPre" @click="showUploadAction">
    <img class="img-delete" v-if="imgUrl && deleteFlag" src="../assets/icon/img_delete.png" @click="goDelete">
    <div v-transfer-dom>
      <mt-actionsheet
        :actions="imgData.actions"
        v-model="imgData.visible">
      </mt-actionsheet>
    </div>
  </div>
</template>

<script>
  import { Confirm } from 'zyby-ui/libs/popUtil.js'
  import TransferDom from 'zyby-ui/directives/transfer-dom'
  import { Actionsheet } from 'mint-ui'

  export default {
    name: 'byImgUpload',
    props: {
      authId: String,
      imgUrl: String,
      deleteFlag: Boolean,
      startShowAction: Function,
      startDelete: Function,
      imgActions: Array
    },
    directives: {
      TransferDom
    },
    components: {
      MtActionsheet: Actionsheet
    },
    data () {
      return {
        imgData: {
          visible: false,
          actions: this.imgActions
        }
      }
    },
    methods: {
      showUploadAction () {
        if (this.startShowAction)
          this.startShowAction(this.authId);
        this.imgData.visible = true
      },
      goDelete () {
        Confirm('确认移除？', () => this.startDelete(this.authId))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import "../assets/css/function.less";
  @import "../assets/css/mixin.less";
  @import "../assets/css/variable.less";

  .zyby-img-upload-common {
    height: 450px;
    width: 100%;
    margin-top: 26px;
  }
  .zyby-img-upload-small {
    height: 185px;
    width: 48%;
    margin-top: 20px;
  }
  .auth-img-item {
    position: relative;
    > div:first-child {
        height: 100%;
        @flex-perfect-center();
        flex-direction: column;
        img {
        .square-hw(46)
        }
        .text-desc {
          margin-top: 20px;
          font-family: PingFangSC-Regular;
          font-size: 26px;
          color: @base-finish-color-deep;
        }
    }
    .exist-img {
        width: 100%;
        height: 100%;
      }
    .img-delete {
      .square-hw(36);
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .img-item-special {
    border: 1px dashed #13DBBF;/*no*/
    border-radius: 6px;/*no*/
  }
</style>
