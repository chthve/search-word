<template>
  <div class="navbar">
    <ul class="list-container">
      <img src="../assets/logo.png" />
      <!-- <div class="navigation"> -->
      <router-link tag="li" to="/">Home</router-link>
      <!-- </div> -->
      <!-- <div class="navigation"> -->
      <router-link tag="li" to="/about">About</router-link>
      <!-- </div> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.1);
}

.list-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  list-style-type: none;
}

li + li {
  margin-left: 4rem;
}

li {
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 1rem;
}

li:hover {
  border-bottom: 2px solid #f37a72;
}

li:active {
  color: #f37a72;
}

img {
  margin-top: 0.5rem;
  height: 90px;
  width: auto;
}
</style>
