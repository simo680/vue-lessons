<template>
  <div class="wrapper">
    <h2>Contacts</h2>
    <p>
      Want to know more or just chat? <br />
      You are welcome!
    </p>
    <button class="btn">Send message</button>
    <div class="img">
      <div class="img__items" v-for="icon in icons" :key="icon">
        <img :src="icon.image" alt="icons" />
      </div>
    </div>
    <p class="social">
      Like me on <br />
      LinkedIn, Instagram, Behance, Dribble
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { id: 1, image: './src/assets/LinkedIn.svg' },
        { id: 2, image: './src/assets/Instagram.svg' },
        { id: 3, image: './src/assets/Behance.svg' },
        { id: 4, image: './src/assets/Surface.svg' }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 34px;
  padding: 80px 0 20px 0;
}

p {
  padding-bottom: 20px;
}

.social {
  padding-bottom: 50px;
}
.wrapper {
  text-align: center;
  background-color: #f6f6f6;
}

.btn {
  background-color: black;
  border-radius: 40px;
  color: white;
  padding: 10px 35px;
  border: none;
  font-family: Abel;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.img {
  display: flex;
  justify-content: center;
}

.img__items {
  padding: 40px;
}


@media (max-width: 430px) {

  .img__items {
  padding: 20px;
}

}
</style>
