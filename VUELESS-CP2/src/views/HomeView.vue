<template>
  <div class="homepage">
    <div class="homepage__main-text">
      <h1 class="homepage__title">Home page</h1>
      <p class="homepage__text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      <button class="button-auth" @click="navigate">Authorization</button>
    </div>
    <img class="homepage__image" src="../assets/tools.png" alt="tools" />
  </div>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
.homepage {
  display: flex;
  margin: 73px 100px;
}
.homepage__title {
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  margin-bottom: 50px;
}
.homepage__main-text {
  display: flex;
  flex-direction: column;
}

.homepage__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 23.5px;
  margin-bottom: 50px;
}

.homepage__image {
  background-repeat: no-repeat;
  margin-left: 120px;
}

.button-auth {
  background-color: #ff6464;
  color: #ffffff;
  border: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 29.38px;
  width: 208px;
  height: 43px;
  cursor: pointer;
}
</style>
