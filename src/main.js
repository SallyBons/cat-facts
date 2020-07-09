import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { Skeleton } from "vue-loading-skeleton";

Vue.config.productionTip = false;
Vue.use(Skeleton);

let getDefaultInfo = () => {
  axios.get("https://cat-fact.herokuapp.com/facts").then((response) => {
    store.dispatch(
      "putDataInStore",
      response.data.all.filter(
        (element) => element.text.length > 70 && element.text.length < 100
      )
    );
  });
};

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    getDefaultInfo();
  },
}).$mount("#app");
