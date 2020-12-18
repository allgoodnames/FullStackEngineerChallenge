<template>
  <div class="login">
    <header class="pageHeader">
      <h1>EMPLOYEE REVIEW SYSTEM</h1>
    </header>
    <section id="loginBox">
      <header>
        <h2>Login</h2>
      </header>
      <form @submit="loginAttempt">
        <label for="username">Username</label><br />
        <input type="text" name="username" v-model="name" />
        <input type="submit" value="Submit" />
      </form>
    </section>
    <section id="userList">
      <ul>
        <li v-for="employee in allEmployees" :key="employee._id">{{ employee.name }} <span v-if="employee.usertype==='admin'">(admin)</span></li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  computed: mapGetters(['allEmployees','loggedIn']),
  components: {

  },
  methods: {
    ...mapActions(['fetchEmployees', 'authenticateLogin']),
    loginAttempt(e) {
      e.preventDefault();
      this.authenticateLogin(this.name);
    }
  },
  data() {
    return {
      name: '',
    };
  },
  created() {
    this.fetchEmployees();
  }
}
</script>

<style scoped>
  header.pageHeader {
    margin-top: 100px;
    text-align: center;
    text-shadow: 1px 1px 1px rgba(255,255,255,0.1);
    background-color: #085b8a;
    color: transparent;
    font-weight: normal;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
  #loginBox {
    margin: 100px auto 0px auto;
    background: white;
    -webkit-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.16);
    box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.16);
  }
  #loginBox header {
    color: #828282;
    padding: 0px 40px;
    line-height: 80px;
    border-bottom: 1px solid #bfbfbf;
  }
  form {
    padding: 40px;
  }
  label {
    font-size: 1.2rem;
    color: #1378b3;
  }
  input {
    font-size: 1.5rem;
  }
  #userList {
    margin: 100px auto 0px auto;
    width: 100px;
    color: #064d75;
  }
  @media (max-width: 400px) {
    header.pageHeader {
      margin-top: 30px;
    }
    #loginBox, #userList {
      margin-top: 30px;
    }
  }
  @media (min-width: 601px) {
    #loginBox {
      width: 600px;
    }
  }
</style>
