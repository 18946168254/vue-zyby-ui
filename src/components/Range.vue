<template>
  <div class="vux-range-input-box" style="position:relative;margin-right:30px;margin-left:50px;" @click="onClick">
    <input class="vux-range-input" v-model.number="currentValue">
  </div>
</template>

<script>
import Powerange from '../libs/range/powerange'
import { getWidth } from '../libs/range/utils'

export default {
  name: 'by-range',
  props: {
    decimal: Boolean,
    value: {
      default: 0,
      type: Number
    },
    min: {
      type: Number,
      default: 0
    },
    minHTML: String,
    maxHTML: String,
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: Boolean,
    disabledOpacity: Number,
    rangeBarHeight: {
      type: Number,
      default: 1
    },
    rangeHandleHeight: {
      type: Number,
      default: 30
    }
  },
  created () {
    this.currentValue = this.value
  },
  mounted () {
    const _this = this
    this.$nextTick(() => {
      let options = {
        callback: function (value) {
          _this.currentValue = value
        },
        decimal: this.decimal,
        start: this.currentValue,
        min: this.min,
        max: this.max,
        minHTML: this.minHTML,
        maxHTML: this.maxHTML,
        disable: this.disabled,
        disabledOpacity: this.disabledOpacity,
        initialBarWidth: window.getComputedStyle(this.$el.parentNode).width.replace('px', '') - 80,
        onTouchstart (e) {
          _this.$emit('on-touchstart', e)
        },
        onTouchend (e) {
          _this.$emit('on-touchend', e)
        }
      }
      if (this.step !== 0) {
        options.step = this.step
      }
      this.range = new Powerange(this.$el.querySelector('.vux-range-input'), options)
      const handleTop = (this.rangeHandleHeight - this.rangeBarHeight) / 2
      this.$el.querySelector('.range-handle').style.top = `-${handleTop}px`
      this.$el.querySelector('.range-bar').style.height = `${this.rangeBarHeight}px`
      this.handleOrientationchange = () => {
        this.update()
      }
      this.rangeWidth = getWidth(this.range.slider)
      this.rangeLeft = this.range.slider.getBoundingClientRect().left
      window.addEventListener('orientationchange', this.handleOrientationchange, false)
    })
  },
  methods: {
    update () {
      let value = this.currentValue
      if (value < this.min) {
        value = this.min
      }
      if (value > this.max) {
        value = this.max
      }
      this.range.reInit({
        min: this.min,
        max: this.max,
        step: this.step,
        value
      })
      this.currentValue = value
      this.range.setStart(this.currentValue)
      this.range.setStep()
    },
    onClick (event) {
      let position = event.pageX - this.rangeLeft
      let percentage = 100 * position / this.rangeWidth
      //Check within range
      if(percentage > 100) {
        percentage = 100;
      }
      if(percentage < 0) {
        percentage = 0;
      }
      this.currentValue = this.max * percentage / 100;
      this.$emit('on-click', this.currentValue)
    }
  },
  data () {
    return {
      currentValue: 0
    }
  },
  watch: {
    currentValue (val) {
      this.range && this.range.setStart(val)
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value (val) {
      this.currentValue = val
    },
    min () {
      this.update()
    },
    step () {
      this.update()
    },
    max () {
      this.update()
    },
    minHTML () {
      this.range.setMinHTML(this.minHTML)
    },
    maxHTML () {
      this.range.setMaxHTML(this.maxHTML)
    }
  },
  beforeDestroy () {
    window.removeEventListener('orientationchange', this.handleOrientationchange, false)
  }
}
</script>

<style lang="less" rel="stylesheet/less">

  /**
   *
   * Main stylesheet for Powerange.
   * http://abpetkov.github.io/powerange/
   *
   */

  /**
   * Horizontal slider style (default).
   */
  /**
  * Range
  */
  @theme-color: #04BE02;
  @opacity-disabled: 0.5;
  @range-disabled-opacity: @opacity-disabled;
  @range-bar-default-color: #a9acb1;
  @range-bar-active-color: @theme-color;

  .range-bar {
    background-color: @range-bar-default-color;
    border-radius: 15px; /*no*/
    display: block;
    height: 1px;/*no*/
    position: relative;
    width: 100%;
  }

  .range-bar-disabled {
    opacity: @range-disabled-opacity;
  }

  .range-quantity {
    background-color: @range-bar-active-color;
    border-radius: 15px;/*no*/
    display: block;
    height: 100%;
    width: 0;
  }

  .range-handle {
    background-color: #fff;
    border-radius: 100%;
    cursor: move;
    height: 30px;/*no*/
    left: 0;
    top: -13px;/*no*/
    position: absolute;
    width: 30px;/*no*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);/*no*/
  }

  .range-min,
  .range-max {
    color: #181819;
    font-size: 12px;/*no*/
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;/*no*/
  }

  .range-min {
    left: -30px;/*no*/
  }

  .range-max {
    right: -30px;/*no*/
  }

  /**
   * Style for disabling text selection on handle move.
   */

  .unselectable {
    user-select: none;
  }

  /**
   * Style for handle cursor on disabled slider.
   */

  .range-disabled {
    cursor: default;
  }
</style>

