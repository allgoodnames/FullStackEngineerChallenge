<template>
  <div class="AddEmployee">
    <h2>Add employee</h2>
    <form @submit="saveEmployee">
      <input type="text" name="username" v-model="name" placeholder="Employee name" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddEmployee',
  components: {

  },
  methods: {
    ...mapActions(['addEmployee']),
    saveEmployee(e) {
      e.preventDefault();
      this.addEmployee(this.name);
      this.name = '';
    }
  },
  data() {
    return {
      name: '',
    };
  },
}
</script>

<style scoped>
  .AddEmployee {
    
  }
</style>
