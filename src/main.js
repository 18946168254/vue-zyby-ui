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

// todo install 是用来 安装所有；
// 另起一个 安装 通用；待验证 是否可行。主要是 样式.

const install = function(Vue) {
  if (install.installed) return;
  Vue.component(Back.name, Back)
  Vue.component(NoData.name, NoData)
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
