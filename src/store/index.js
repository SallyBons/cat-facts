import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { info: null, img: null },
  mutations: {
    putDataInStore(state, data) {
      state.info = data;
    },
    putImgInStore(state, data) {
      state.img = data;
      console.log(state.img);
    },
  },
  actions: {
    putDataInStore(context, value) {
      context.commit("putDataInStore", value);
    },
    putImgInStore(context, value) {
      context.commit("putImgInStore", value);
    },
  },
  modules: {},
});
