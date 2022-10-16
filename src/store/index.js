import Vue from "vue";
import Vuex from "vuex";

import blogsModule from './modules/blogsModule'
import commentsModule from './modules/commentsModule'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blogsModule,
    commentsModule
  },
});
