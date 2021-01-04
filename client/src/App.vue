<template>
  <div>
    <Navbar class="navbar" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  color: #f1f1f1;
  outline: none;
}
body {
  background-image: url('https://images.unsplash.com/photo-1608893801920-7b5d1e6a7855?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80');
  overflow: hidden;
}
</style>
