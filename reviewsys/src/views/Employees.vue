<template>
  <div class="employees">
    <AddEmployee />
    <EmployeeList :employees="allNonAdmin" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EmployeeList from '../components/EmployeeList.vue';
import AddEmployee from '../components/AddEmployee.vue';

export default {
  name: 'Home',
  computed: mapGetters(['allNonAdmin']),
  components: {
    EmployeeList,
    AddEmployee
  },
  methods: {
    ...mapActions(['fetchEmployees']),
  },
  created() {
    this.fetchEmployees();
  }
}
</script>

<style scoped>
  .employees {
    width: 600px;
    margin: 300px auto;
    background-color: white;
    padding: 40px;
    -webkit-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.16);
    box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.16);
  }
</style>
