import axios from 'axios';
import router from '../../router/index.js';

const state = {
  session: {
    loggedIn: false,
    usertype: '',
    name: ''
  }
};

const getters = {
  loggedIn: (state) => state.session.loggedIn,
  admin: (state) => state.session.usertype === 'admin'
};

const actions = {
  async authenticateLogin({ commit }, name) {
    const res = await axios.post('http://localhost:3000/authenticate', {name});
    if(res.data.validated === true) {
      commit('loginSuccess', res.data);
      if(state.session.usertype === 'admin') {
        router.push('employees');
      } else {
        router.push('feedbackrequests');
      }
    } else {
      commit('loginFail');
    }
  }
};

const mutations = {
  loginSuccess: (state, authentication) => {
    state.session.loggedIn = true,
    state.session.usertype = authentication.employee.usertype,
    state.session.name = authentication.employee.name
  },
  loginFail: (state) => {
    state.session.loggedIn = false
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
