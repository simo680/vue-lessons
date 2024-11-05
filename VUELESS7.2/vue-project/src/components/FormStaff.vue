<template>
  <form class="form" action="">
    <select class="" id="select-id" v-model="position">
      <option disabled value="">Выберите день</option>
      <option>Понедельник</option>
      <option>Вторник</option>
      <option>Среда</option>
      <option>Четверг</option>
      <option>Пятница</option>
      <option>Суббота</option>
      <option>Воскресенье</option>
    </select>
    <select id="select-id" v-model="position1">
      <option disabled value="">Выберите важность</option>
      <option>Очень важно</option>
      <option>Не важно</option>
    </select>
    <input id="" v-model="Text" placeholder="Описание" />
    <button class="button-add" id="">Добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      Text: '',
      position: '',
      position1: ''
    }
  }
}
</script>

<style>
.form {
 box-shadow: 0px 4px 4px 0px black;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  margin: 79px 81px 40px 81px;
}

.button-add {
  width: 163px;
  height: 45px;
  border-radius: 23px;
  border: 1px solid black;
  background-color: #1abc9c;
  color: white;
}
</style>
