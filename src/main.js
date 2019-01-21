import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import FundamentalVue from "fundamental-vue";
Vue.use(FundamentalVue);

import { i18n } from "./plugins/i18n.js";

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
