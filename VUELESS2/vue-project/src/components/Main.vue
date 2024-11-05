<template>
  <main class="max__width">
    <div class="padd">
      <h2>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
      <div class="project">
        <div class="project__item" v-for="card in cards" :key="card">
          <img :src="card.image" alt="Фото зданий" />

          <div class="rectangle"></div>
          <h3>{{ card.title }}</h3>
          <p class="description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Многофункциональное здание',
          description:
            'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия.',
          image: 'https://teletype.in/files/f8/f6/f8f60304-dd5c-4a98-930b-4e1166160f8e.jpeg'
        },
        {
          id: 2,
          title: 'IT Колледж',
          description:
            'Современный колледж на базе западной системе образования. Задача стояла в формировании многофункционального здания для решения всех современных проблем колледжа.',
          image: 'https://vmrucdn.servicecdn.ru/2021.05/original/60afa87282682c3df243a65c.jpg'
        },
        {
          id: 3,
          title: 'Здание выставки',
          description:
            'Самое красивое здание в комплексе выставки достижений народного хозяйства. Данная архитекутура получила самые высокие награды',
          image:
            'https://vdnh.ru/upload/resize_cache/iblock/b7f/1000_1000_1/b7fcf4db2c6bfdef5f1423a06fdd381d.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.padd {
  padding: 90px 0;
}
img {
  width: 250px;
  height: 280px;
}

h2 {
  text-align: center;
}

.rectangle {
  width: 55px;
  height: 6px;
  background: var(--Accent, #f7654a);
}

.description {
  font-family: 'Open Sans';
  font-weight: 400;
  color: #999;
  font-family: 'Open Sans';
  font-size: 12px;
}

.project {
  display: flex;
  text-align: center;
}
</style>
