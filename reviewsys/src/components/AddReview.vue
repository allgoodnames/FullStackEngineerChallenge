<template>
  <div class="AddEmployee">
    <h2>Add review for ...</h2>
    <form @submit="saveReview">
      <textarea name="username" v-model="content"></textarea>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AddEmployee',
  components: {

  },
  computed: {
    ...mapGetters(['employeeById', 'allNonAdmin']),
  },
  methods: {
    ...mapActions(['addReview']),
    saveReview(e) {
      e.preventDefault();
      this.addReview({ reviewFor: this.reviewFor, /*placeholder*/ reviewBy: 0, content: this.content });
      this.content = '';
    },
    getEmployeeById() {
      console.log(this.employeeById());
    }
  },
  data() {
    return {
      content: '',
    };
  },
  props: ['reviewFor']
}
</script>

<style scoped>
  .AddEmployee {
    margin: 300px auto;
    background-color: white;
    padding: 40px;
  }
</style>
