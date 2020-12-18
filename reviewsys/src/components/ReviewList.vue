<template>
  <div class="employeeList">
    <table class="employeeTable">
      <tr v-for="employee in employees" :key="employee._id">
        <td>{{ employee.name }}</td>
        <td><button>E</button></td>
        <td><button @click="reviewEmployee(employee._id)">R</button></td>
        <td><button @click="deleteEmployee(employee._id)">D</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '../router/index.js';

export default {
  name: 'EmployeeList',
  methods: {
    ...mapActions(['deleteEmployee']),
    reviewEmployee(id) {
      router.push(`reviews/${id}`);
    }
  },
  components: {

  },
  props: ['employees']
}
</script>

<style scoped>
  .employeeTable {
    width: 400px;
    margin: 300px auto;
    background-color: white;
    padding: 40px;
  }
  .employeeTable td:first-child {
    width: 40%;
  }
  .employeeTable td:nth-child(2) {
    width: 20%;
  }
  .employeeTable td:nth-child(3) {
    width: 20%;
  }
  .employeeTable td:nth-child(4) {
    width: 20%;
  }
</style>
