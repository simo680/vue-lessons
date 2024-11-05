<template>
  <div class="About">
    <h2>Skills</h2>
    <p>I work in such technologies as</p>
    <div class="cards_wrapper">
      <div class="cards" v-for="language in languages" :key="language.id">
        <img class="image" :src="language.image" alt="language" />
        <h4>{{ language.title }}</h4>
        <span
          v-for="star in 5"
          :key="star"
          :class="{
            'fa fa-star': star >= language.rate,
            'fa fa-star active': star <= language.rate
          }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { id: 1, title: 'HTML5', rate: 4, image: './src/assets/HTML.png' },
        { id: 2, title: 'CSS3', rate: 3, image: './src/assets/CSS.png' },
        { id: 3, title: 'JavaScript', rate: 4, image: './src/assets/JAVASCRIPT.png' },
        { id: 4, title: 'React', rate: 5, image: './src/assets/REACT.png' }
      ]
    }
  }
}
</script>
<style scoped>
.About {
  text-align: center;
}

h2 {
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 50px 0 50px 0;
}

p {
  margin-bottom: 50px;
}

.cards_wrapper {
  display: flex;
  justify-content: center;
}

.active {
  color: orange;
}
.fa-star {
margin: 2px;
}
.cards {
  padding: 80px;
  color: #828282;
  text-align: center;
  font-family: Abel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 430px) {
  .cards_wrapper{
    flex-direction: column;
  }
  .cards{
    padding: 40px;
  }
}
</style>
