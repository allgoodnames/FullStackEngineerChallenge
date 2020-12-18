import axios from 'axios';

const state = {
  reviews: [],
};

const getters = {
  allReviewsForEmployee: (state, id) => {
    return state.reviews.filter((review) => review.reviewFor === id);
  }
};

const actions = {
  async fetchReviews({ commit }) {
    const res = await axios.get('http://localhost:3000/review');

    commit('setReviews', res.data);
  },
  async addReview({ commit }, review) {
    const res = await axios.post('http://localhost:3000/review', review);

    commit('addReview', res.data);
  },
};

const mutations = {
  setReviews: (state, reviews) => {state.reviews = reviews},
  addReview: (state, review) => {state.reviews.unshift(review)},
};

export default {
  state,
  getters,
  actions,
  mutations
}
