<script>
  import { CountUp } from 'countup.js'

  export default {
    name: 'ByCountup',
    mounted () {
      this.$nextTick(() => {
        this._countup = new CountUp(this.$el, this.endVal, this.options)
        if (this.start) {
          this._countup.start()
        }
      })
    },
    props: {
      tag: {
        type: String,
        default: 'span'
      },
      start: {
        type: Boolean,
        default: true
      },
      endVal: {
        type: Number,
        required: true
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    render (h) {
      return h(this.tag, {}, [this.startVal])
    },
    watch: {
      start (val) {
        if (val) {
          this._countup.start()
        }
      },
      endVal (val) {
        this._countup.update(val)
      }
    }
  }
</script>
<style scoped>
  span{}
</style>
