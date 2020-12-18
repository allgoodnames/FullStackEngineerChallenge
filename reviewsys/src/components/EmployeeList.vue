<template>
  <div class="employeeList">
    <table class="employeeTable">
      <tr v-for="employee in employees" :key="employee._id">
        <td>{{ employee.name }}</td>
        <td><button><font-awesome-icon icon="edit" /></button></td>
        <td><button @click="reviewEmployee(employee._id)"><font-awesome-icon icon="star-half-alt" /></button></td>
        <td><button @click="deleteEmployee(employee._id)"><font-awesome-icon icon="times" /></button></td>
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
  .employeeList {
    margin-top: 30px;
  }
  .employeeTable {
    width: 100%;
  }
  td {
    padding: 10px 10px;
  }
  tr:nth-child(odd) {
    background: #f0f0f0;
  }
  .employeeTable td:first-child {
    width: 70%;
  }
  .employeeTable td:nth-child(2) {
    width: 10%;
  }
  .employeeTable td:nth-child(3) {
    width: 10%;
  }
  .employeeTable td:nth-child(4) {
    width: 10%;
  }
</style>
