<template>
  <h1 class="item">Hello world!</h1>

 <!-- преобразование шаблона. Бинд атрибутов -->
  <h2>{{ test.toLowerCase() + 'TEST' }}</h2>
  <h2 :id="id">{{ a }}</h2>

<!-- Тернарный оператор -->
  <h2 :class="bool ? 'y' : 'n'">{{ bool ? 'yes' : 'no' }}</h2>

  <!-- Условный оператор -->
  <p v-if="1 === 1">Condition elem</p>

  <p v-else-if="1 == 1">else if</p>

  <p v-else>Else</p>
  
</template>

<script>
const a = 100

export default {
  data() {
    return {
      test: 'ITHub',
      id: 'elem_value',
      bool: true,
      a
    }
  }
}
</script>

<style>
.block {
  color: purple;
}
</style>
