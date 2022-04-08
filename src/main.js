// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'

import './assets/less/index.less'
import echarts from 'echarts'
import img from './lib/img'
import utils from './lib/utils'

Vue.prototype.$echarts = function (el) {
  return echarts.init(el, null, { renderer: 'svg' })
}
Vue.prototype.$images = img
Vue.config.productionTip = false
Vue.use(utils)
// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock');

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
});
Vue.use(TreeTable);
Vue.use(VOrgTree);
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue);
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false;
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config;
/**
 * 注册指令
 */
importDirective(Vue);
Vue.directive('clickOutside', clickOutside);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
});
