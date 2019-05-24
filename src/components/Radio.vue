<template>
    <div>
      <div class="radio-item" v-for="(item,index) in radiosData" :key="index">
        <label class="zyby-form-radio-label">
          <input type="radio" :name="name" :value="item.id" v-model="checkedVal" @change="optionChanged"/>
          <span>{{item.title}}</span>
        </label>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Radio',
    props: {
      checkedChange: Function,
      radiosData: Array,
      name: String
    },
    data () {
      return {
        checkedVal: this.radiosData.length > 0 ? this.radiosData[0].id : null
      }
    },
    methods: {
      optionChanged () {
        if (this.checkedChange && typeof this.checkedChange == 'function')
          this.checkedChange(this.name, this.checkedVal);
      },
      setCheckedVal (id) {
        this.checkedVal = id
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @radio-height: 26px;

  input[type="radio"] + span::before {
    content: ""; /*不换行空格*/
    width: @radio-height;
    height: @radio-height;
    margin-right: 20px;
    border-radius: 50%;
    border: 1px solid #01cd78;/*no*/
    background: #ffffff;
    float: left;
    box-sizing: border-box;
  }
  input[type="radio"]:checked + span::before {
    background-color: #01cd78;
    background-clip: content-box;
    padding: 2px;/*no*/
  }
  input[type="radio"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  .radio-item {
    display: inline-block;
    height: @radio-height;
    line-height: @radio-height;
    width: 190px;
  }
</style>
