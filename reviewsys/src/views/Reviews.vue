<template>
  <div class="reviews">
    <h2 style="color: white">{{ $route.params.id }}</h2>
    <AddReview :reviewFor="$route.params.id" />
    <ReviewList :reviews="allReviewsForEmployee" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddReview from '../components/AddReview.vue';
import ReviewList from '../components/ReviewList.vue';

export default {
  name: 'Home',
  computed: mapGetters(['allReviewsForEmployee']),
  components: {
    AddReview,
    ReviewList
  },
  methods: {
    ...mapActions(['fetchReviews']),
  },
  created() {
    this.fetchReviews();
  }
}
</script>
