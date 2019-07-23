<template>
  <span>
    <template v-if="model === 'noDay'">
      <span class="zyby-count-down">
        {{show.hr}}<slot name="hrUnit">小时</slot>
      </span>
      <span class="zyby-count-down">
        {{show.min}}<slot name="minUnit">分钟</slot>
      </span>
      <span class="zyby-count-down">
        {{show.sec}}<slot name="secUnit">秒</slot>
      </span>
    </template>
    <template v-else-if="model === 'onlySec'">
      <span class="zyby-count-down">
        {{show.sec}}<slot name="secUnit">秒</slot>
      </span>
    </template>
    <template v-else-if="model === 'validateCode'">
      <span v-show="showCodeText" class="code-text" @click="getCode">获取验证码</span>
      <span v-show="!showCodeText" class="code-count-down">
        {{show.sec}}<slot name="secUnit">秒</slot>
      </span>
    </template>
    <template v-else>
      <span class="zyby-count-down">
        {{show.day}}<slot name="dayUnit">天</slot>
      </span>
      <span class="zyby-count-down">
        {{show.hr}}<slot name="hrUnit">小时</slot>
      </span>
      <span class="zyby-count-down">
        {{show.min}}<slot name="minUnit">分钟</slot>
      </span>
      <span class="zyby-count-down">
        {{show.sec}}<slot name="secUnit">秒</slot>
      </span>
    </template>
  </span>
<!--
  <span>
    <span v-if="model === 'noDay'">
      <span class="zyby-count-down">
        {{show.hr}}<slot name="hrUnit">小时</slot>
      </span>
      <span class="zyby-count-down">
        {{show.min}}<slot name="minUnit">分钟</slot>
      </span>
      <span class="zyby-count-down">
        {{show.sec}}<slot name="secUnit">秒</slot>
      </span>
    </span>
    <span v-else-if="model === 'onlySec'">
      <span class="zyby-count-down">
        {{show.sec}}<slot name="secUnit">秒</slot>
      </span>
    </span>
    <span v-else-if="model === 'validateCode'">
      <span v-show="showCodeText" class="code-text" @click="getCode">获取验证码</span>
      <span v-show="!showCodeText" class="code-count-down">
        {{show.sec}}<slot name="secUnit">秒</slot>
      </span>
    </span>
    <span v-else>
      <span class="zyby-count-down">
        {{show.day}}<slot name="dayUnit">天</slot>
      </span>
      <span class="zyby-count-down">
        {{show.hr}}<slot name="hrUnit">小时</slot>
      </span>
      <span class="zyby-count-down">
        {{show.min}}<slot name="minUnit">分钟</slot>
      </span>
      <span class="zyby-count-down">
        {{show.sec}}<slot name="secUnit">秒</slot>
      </span>
    </span>
  </span>
-->
</template>

<script>
  export default {
    props: {
      'endTime': String,
      'callback': Function,
      'getcodebefore': Function,
      'model': {
        type: String,
        default: 'default',
        validator(value) {
          return [
              'default',
              'noDay',
              'onlySec',
              'validateCode'
            ].indexOf(value) > -1;
        }
      },
    },
    name: "byCountDown",
    data: function () {
      return {
        end: this.endTime,
        showCodeText: true,
        show: {
          day: 0, hr: 0, min: 0, sec: 0,
        }

      }
    },
    mounted: function () {
      if (this.end && this.model != 'validateCode')
        this.startCount();
    },
    destroyed () {
      if (this._interval)
        clearInterval(this._interval)
    },
    methods: {
      countdown () {
        const end = Date.parse(new Date(this.end));
        const now = Date.parse(new Date());
        const msec = end - now;
        if (msec > -1) {
          switch (this.model) {
            case 'noDay': {
              let hr = parseInt(msec / 1000 / 60 / 60);
              let min = parseInt(msec / 1000 / 60 % 60);
              let sec = parseInt(msec / 1000 % 60);

              this.show.hr = hr > 9 ? hr : '0' + hr;
              this.show.min = min > 9 ? min : '0' + min;
              this.show.sec = sec > 9 ? sec : '0' + sec;
              break;
            }
            case 'onlySec': {
              let sec = parseInt(msec / 1000);
              this.show.sec = sec > 9 ? sec : '0' + sec;
              break;
            }
            case 'validateCode': {
              let sec = parseInt(msec / 1000);
              this.show.sec = sec > 9 ? sec : '0' + sec;
              break;
            }
            default: {
              let day = parseInt(msec / 1000 / 60 / 60 / 24);
              let hr = parseInt(msec / 1000 / 60 / 60 % 24);
              let min = parseInt(msec / 1000 / 60 % 60);
              let sec = parseInt(msec / 1000 % 60);

              this.show.day = day;
              this.show.hr = hr > 9 ? hr : '0' + hr;
              this.show.min = min > 9 ? min : '0' + min;
              this.show.sec = sec > 9 ? sec : '0' + sec;
            }
          }
        } else {
          clearInterval(this._interval);
          this._callback();
        }
      },
      _callback () {
        if (this.model == 'validateCode') {
          this.showCodeText = true;
        }
        if(this.callback && this.callback instanceof Function){
          this.callback(...this);
        }
      },
      /**
       * 父组件调用，手动设置结束时间
       * @param endTime
       */
      setEnd (endTime) {
        this.end = endTime;
      },
      getCode () {
        let promise = this.getcodebefore();
        promise.then(() => {
          this.showCodeText = false;
          this.startCount();
        })
      },
      /**
       * 父组件调用，手动开始
       * @param endTime
       */
      startCount () {
        this.countdown();
        this._interval = setInterval(
          this.countdown, 1000)
      }
    }
  }
</script>
<style scoped>
  span{}
</style>
