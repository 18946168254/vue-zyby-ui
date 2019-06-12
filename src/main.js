import AWord from './components/AWord.vue';
import Back from './components/Back.vue';
import CallPhone from './components/CallPhone.vue';
import CountDown from './components/CountDown.vue';
import ImgUpload from './components/ImgUpload.vue';
import NoData from './components/NoData.vue';
import Radio from './components/Radio.vue';
import Stage from './components/Stage.vue';
import ZVideo from './components/ZVideo.vue';
import './assets/css/base.less'

const install = function(Vue) {
  if (install.installed) return;
  Vue.component(AWord.name, AWord)
  Vue.component(Back.name, Back)
  Vue.component(CallPhone.name, CallPhone)
  Vue.component(CountDown.name, CountDown)
  Vue.component(ImgUpload.name, ImgUpload)
  Vue.component(NoData.name, NoData)
  Vue.component(Radio.name, Radio)
  Vue.component(Stage.name, Stage)
  Vue.component(ZVideo.name, ZVideo)
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
export default {
  install,
  AWord,
  Back,
  CallPhone,
  CountDown,
  ImgUpload,
  NoData,
  Radio,
  Stage,
  ZVideo
};
