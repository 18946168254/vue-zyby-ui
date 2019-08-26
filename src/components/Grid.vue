<template>
  <div
    class="weui-grids"
    :class="{
      'vux-grid-no-lr-borders': !showLrBorders
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'byGrid',
  methods: {
    countColumn () {
      this.childrenSize = this.$children.length
      this.$children.forEach((c, index) => (c.index = index))
    }
  },
  props: {
    cols: {
      type: Number
    },
    showLrBorders: {
      type: Boolean,
      default: true
    },
    showVerticalDividers: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    column () {
      return this.cols || this.childrenSize
    }
  },
  data () {
    return {
      childrenSize: 3
    }
  }
}
</script>
<style lang="less">
  @import "../assets/css/function.less";

  @weuiGridBorderColor:#D9D9D9;
  @weuiGridFontSize: 14px;
  @weuiGridIconSize: 28px;
  @weuiGridColumnCount: 3;
  @weuiBgColorActive: #ECECEC;
  @weuiTextColorTitle: #000000;

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .weui-grids {
    position: relative;
    overflow: hidden;

  &:before {
   .setTopLine(@weuiGridBorderColor);
   }
  &:after {
   .setLeftLine(@weuiGridBorderColor);
   }
  }

  .weui-grid {
    position: relative;
    float: left;
    padding: 20px 10px;/*no*/
    width: 100% / @weuiGridColumnCount;
    box-sizing: border-box;

  &:before {
   .setRightLine(@weuiGridBorderColor);
   }
  &:after {
   .setBottomLine(@weuiGridBorderColor);
   }

  &:active {
     background-color: @weuiBgColorActive;
   }
  }

  .weui-grid__icon {
    width: @weuiGridIconSize;/*no*/
    height: @weuiGridIconSize;/*no*/
    margin: 0 auto;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  & + .weui-grid__label{
        margin-top: 5px;/*no*/
      }
  }

  .weui-grid__label {
    display: block;
    text-align: center;
    color: @weuiTextColorTitle;
    font-size: @weuiGridFontSize;/*no*/
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .weui-grids.vux-grid-no-lr-borders {
    &:after {
      display: none;
    }
  }
</style>
