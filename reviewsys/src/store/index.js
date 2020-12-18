import Vuex from 'vuex';
import Vue from 'vue';
import employees from './modules/employees.js';
import reviews from './modules/reviews.js';
import authentication from './modules/authentication.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employees,
    reviews,
    authentication
  }
});
