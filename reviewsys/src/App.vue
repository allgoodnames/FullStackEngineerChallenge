<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {

  }
}
</script>

<style>
  html {
    font-family: verdana;
    font-size: 62.5%;
  }
  body {
    font-size: 1.4rem;
    background: #1378b3;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  h1 {
    font-size: 2.7rem;
    padding: 0px;
    margin: 0px;
  }
  h2 {
    font-size: 1.9rem;
    padding: 0px;
    margin: 0px;
  }
  ul {
    list-style-type: none;
    list-style-position: inside;
    padding: 0px;
  }
  input[type="text"] {
    margin-top: 10px;
    padding: 20px;
    color: #797979;
    background: #dedede;
    border: none;
  }
  input[type="submit"] {
    margin: 10px 20px;
    padding: 20px 70px;
    color: white;
    background: #1378b3;
    border: none;
  }
</style>
