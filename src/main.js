import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/** installation manuelle https://bootstrap-vue.org/docs#vue-cli-3 */
//import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(router).mount("#app");

//app.use() call plugin
/**
App.use(BootstrapVue);
App.use(BootstrapVueIcons);
 */
