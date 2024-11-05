<template>
  <div class="wrapper">
    <nav>
      <ul class="menu">
        <li>Home</li>
        <li>About me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contacts</li>
      </ul>
    </nav>
    <div class="group">
      <div>
        <h1 class="name">Alex</h1>
        <h1 class="name">William</h1>
      </div>
      <div class="years">
        <p>web developer</p>
        <p>28 years old, Karaganda</p>
      </div>
      <div class="lang">
        <p class="lang__item_grey">RU</p>
        <p class="lang__item_line">|</p>
        <p class="lang__item">EN</p>
      </div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script></script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 33px 0 33px 0;
  border-bottom: 1px solid black;
  font-size: 18px;
}

.group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.lang__item {
  rotate: 270deg;
}
.lang__item_line {
  rotate: 270deg;
  text-align: center;
}
.lang__item_grey {
  rotate: 270deg;
  opacity: 0.3;
}

.img {
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/junior.png);
  object-fit: cover;
}

@media (max-width: 430px) {
  .wrapper {
    padding: 40px;
  }
  nav {
    display: none;
  }
  .lang {
    display: none;
  }
  .group {
    flex-direction: column;
    align-items: flex-start;
  }
  .img {
    height: 478px;
    background-image: url(../assets/junior_mobile.png);
  }
}
</style>
