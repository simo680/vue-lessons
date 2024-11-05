<script>
import { RouterLink, RouterView } from 'vue-router'

export default {}
</script>

<template>
  <header>
    <nav class="header__menu">
      <ul class="header__links-list">
        <router-link class="header__links-list-item" to="/home">
          <li>Home</li>
        </router-link>
        <router-link class="header__links-list-item" to="/users">
          <li>Users</li>
        </router-link>
        <router-link to="/profile">
          <li class="header__links-list-item">Profile</li>
        </router-link>
      </ul>
    </nav>
  </header>
  <RouterView />
  <footer class="footer">
    <div class="integration">
      <a class="integration__link" href="">
        <img src="./assets/Icons/fb.svg" />
      </a>
      <a class="integration__link" href="">
        <img src="./assets/Icons/insta.svg" />
      </a>
      <a class="integration__link" href="">
        <img src="./assets/Icons/twitter.svg" />
      </a>
      <a class="integration__link" href="">
        <img src="./assets/Icons/linkedin.svg" />
      </a>
    </div>
    <p>Copyright ©2024 All rights reserved</p>
  </footer>
</template>

<style lang="scss" scoped>
.header__menu {
  text-decoration: none;
}

.header__links-list {
  display: flex;
  justify-content: flex-end;
  margin: 20px 115px 0 0;
  gap: 15px;
  font-size: 20px;
  line-height: 29.38px;
  font-weight: 500;
}

.header__links-list-item {
  list-style: none;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: center;
  align-items: center;
  margin-bottom: 90px;
}

.integration {
  padding: 30px;
}

.integration__link {
  padding: 20px;
}
</style>
