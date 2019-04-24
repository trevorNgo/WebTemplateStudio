import Vue from "vue";
import VueRouter from "vue-router";
import Grid from "../views/Grid.vue";
import List from "../views/List.vue";
import MasterDetail from "../views/MasterDetail.vue";
import Blank from "../views/Blank.vue";

Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  routes: [
    { path: "/grid", component: Grid },
    { path: "/masterdetail", component: MasterDetail },
    { path: "/list", component: List },
    { path: "/blank", component: Blank }
  ]
});
