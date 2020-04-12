import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import Detail from "../views/Detail.vue";
import Home from "../views/Home.vue";
// 安装
Vue.use(VueRouter);
// 路由规则
 let routes = [
    // 列表页
    { path: "/list/:id", component: List},
    // 详情页
    { path: "/detail/:id", component: Detail},
    // 首页
    { path: "*", component: Home}
 ]
 // 路由实例化对象
export default new VueRouter({ routes });