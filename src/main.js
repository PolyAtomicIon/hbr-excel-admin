import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import TableView from "./components/TableView.vue";
// import SimpleTable from "./components/SimpleTable.vue";
import DemoTable from "./components/DemoTable.vue";
import ImagesTable from "./components/ImagesTable.vue";

const routes = [
  { path: "/", component: TableView },
  // { path: "/simple", component: SimpleTable },
  { path: "/simple", component: DemoTable },
  { path: "/images", component: ImagesTable },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App).use(router).mount("#app");
