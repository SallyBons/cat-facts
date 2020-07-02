import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    axios
      .get("https://cat-fact.herokuapp.com/facts")
      .then((response) => store.dispatch("putDataInStore", response.data.all));
  },
}).$mount("#app");
