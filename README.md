# vue-zyby-ui

> 子乐八音 组件包


## Build Setup

npm i vue-zyby-ui -S

## Usage
导入常用组件.

```javascript
import Vue from 'vue';
import zybyUi from 'vue-zyby-ui'
import 'vue-zyby-ui/dist/style.min.css'

Vue.use(zybyUi);

导入指定组件. (用到 babel-plugin-component)

import { CallPhone, NoData } from 'mint-ui';

Vue.component(CallPhone.name, CallPhone);
Vue.component(NoData.name, NoData);



babel-plugin-component
安装
npm i babel-plugin-component -D

配置
.babelrc

{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "vue-zyby-ui", "styleLibrary": {
                                            "name": "theme",
                                            "base": false
                                        } }
  ]]]
}

## 注意事项
部分组件css 使用了rem单位，以适配移动端。因此 使用本组件库前，所在项目应 进行适配改造。
改造所用库：
lib-flexible  和 postcss-px2rem-exclude ,参见以下链接
	https://www.cnblogs.com/skylineStar/p/10036525.html

