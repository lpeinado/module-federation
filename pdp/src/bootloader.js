import { createApp } from "vue";

import "./index.css";

import App from "./App.vue";

import store from "home/store"


createApp(App).use(store).mount("#app");
