import axios from 'axios';

const state = {
  employees: [],
};

const getters = {
  allEmployees: (state) => state.employees,
  allNonAdmin: (state) => {
    return state.employees.filter((employee) => employee.usertype !== 'admin');
  },
  employeeById: () => {
    //return state.employees.find((employee) => employee._id !== id);
  }
};

const actions = {
  async fetchEmployees({ commit }) {
    const res = await axios.get('http://localhost:3000/employee');
    commit('setEmployees', res.data);
  },
  async addEmployee({ commit }, name) {
    const res = await axios.post('http://localhost:3000/employee', { name, usertype: 'normal' });
    commit('addEmployee', res.data);
  },
  async deleteEmployee({ commit }, id) {
    await axios.delete(`http://localhost:3000/employee/${id}`);
    commit('deleteEmployee', id);
  },
};

const mutations = {
  setEmployees: (state, employees) => {state.employees = employees},
  addEmployee: (state, employee) => {state.employees.unshift(employee)},
  deleteEmployee: (state, id) => {state.employees = state.employees.filter((employee) => employee._id !== id )},
};

export default {
  state,
  getters,
  actions,
  mutations
}
