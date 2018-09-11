import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";

import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

window.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
