<template>
  <div class="request">
    <div class="bann max__width">
      <div class="banner">
        <p class="big-text">САМЫЕ УМНЫЕ ПРОЕКТЫ</p>
        <p class="small-text">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</p>
      </div>
      <button>Ваш Запрос</button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.request {
  background-color: #f7654a;
}
.bann {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.banner {
  display: flex;
  flex-direction: column;
}

p {
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;
}

.small-text {
  font-size: 23px;
}

button {
  width: 175px;
  height: 49px;
  background-color: white;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.7px;
  cursor: pointer;
}
</style>
