<script>
import { RouterView, RouterLink } from 'vue-router'
export default {}
</script>

<template>
  <header>
    <ul>
      <router-link to="/public">
        <li>Public</li>
      </router-link>
      <router-link to="/private">
        <li>Private</li>
      </router-link>
      <router-link to="/login">
        <li>Login</li>
      </router-link>
    </ul>
  </header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  padding: 75px;
  background-color: bisque;
  ul {
    list-style-type: none;
    display: flex;
    font-size: 30px;
    gap: 25px;
    a {
      text-decoration: none;
      color: black;
    }
    a:hover {
      font-weight: 600;
    }
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 25px 0;
      gap: 20px;
    }
  }
}
</style>
