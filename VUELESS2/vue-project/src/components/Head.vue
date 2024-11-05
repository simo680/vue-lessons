<template>
  <header>
    <div class="wrapper">
      <div class="padd max__width">
        <div class="text">
          <h1>реализуем крупнейшие проекты в россии</h1>
          <p>стадионы, газопроводы, мосты, дамбы</p>
        </div>
        <div class="numbers">
          <div class="numbers__item" v-for="product in products" :key="product">
            <p class="years">{{ product.years }}</p>
            <p>ЛЕТ</p>
            <p class="description">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, years: 26, description: 'на рынке' },
        { id: 2, years: 20, description: 'заботимся об экологии' },
        { id: 3, years: 15, description: 'преподаем технологии' },
        { id: 4, years: 33, description: 'является лидерами' }
      ]
    }
  }
}
</script>

<style scoped>
p {
  font-family: Oswald;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.wrapper {
  background-image: url(../assets/Rectangle.png);
  margin: 0 auto 0 auto;
  padding-top: 70px;
}
.years {
  color: var(--Accent, #f7654a);
  font-family: Oswald;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.description {
  color: var(--gray, #999);
  text-align: center;
  font-family: Oswald;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.text {
  text-align: center;
}

.numbers {
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 20px 40px;
}

.numbers__item {
  display: flex;
  flex-direction: column;
  text-align: center;
}

h1,
p {
  color: white;
}
</style>
