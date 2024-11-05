<script >
import SimpleSlot from './components/SimpleSlot.vue';
import NamesSlot from './components/NamesSlot.vue';
import PropSlot from './components/PropSlot.vue';
import LoopSlot from './components/LoopSlot.vue';
import ButtonSlot from './components/ButtonSlot.vue';

export default {
  components: {
    SimpleSlot,
    NamesSlot,
    PropSlot,
    LoopSlot,
    ButtonSlot
  },
  data() {
    return {
      a: 0,
    }
  }
}
</script>


<template>
  <!-- Применение слота -->
  <!-- <simple-slot>
    <h2>Test 1</h2>
    <h4>Example</h4>
  </simple-slot> -->

  <!-- <simple-slot>
    <h2>Test 2</h2>
    <h4>Example</h4>
  </simple-slot> -->


  <!-- Именование слоты (подслоты) -->

  <!-- <names-slot>
    <template v-slot:block1>
      <button @click="a++">Top</button>
    </template>

    <template v-slot:block2>
      <ul>
        <li>
         {{ a }}
        </li>
      </ul>
    </template>
  </names-slot> -->


  <!-- Передача параметров из дочернего компонента в родительский -->

  <!-- <prop-slot>
    <template v-slot="slots">
      {{ slots.msg }}
    </template>
  </prop-slot> -->

  <!-- Формирование итерации для слота -->
  <!-- <loop-slot>
    <template v-slot="slots">
      <button> {{ slots.number }}</button>
    </template>
  </loop-slot> -->


  <button-slot>
    <template v-slot:icon>
      <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg>
    </template>

    <template v-slot:message>
      Купить
    </template>

  </button-slot>


  <button-slot>
    <template v-slot:icon>
      <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg>
    </template>

    <template v-slot:message>
      Зарегистрироваться
    </template>

  </button-slot>
</template>

<style scoped></style>
