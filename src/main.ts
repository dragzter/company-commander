import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import store from "./store/state";

createApp(App).use(Router).use(store).mount("#app");
