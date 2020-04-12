import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import axios from "axios";
Vue.prototype.$http = axios;
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");