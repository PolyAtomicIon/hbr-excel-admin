import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import TableView from "./components/TableView.vue";
import Images from "./components/Images.vue";

const routes = [
  { path: "/", component: TableView },
  { path: "/images", component: Images }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App).use(router).mount("#app");
