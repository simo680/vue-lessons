<template>
  <div>
    <h2>Counter</h2>
    <h3>{{ counterStore.count }}</h3>
    <div>
      <button @click="counterStore.decrement">-</button>
      <button @click="counterStore.increment">+</button>
    </div>
    <div>
      <input v-model="inputValue" type="number" />
      <button @click="handle">change value</button>
    </div>
    <button @click="async">Async</button>
    <h2>Double value</h2>
    <h3>{{ counterStore.doubleValue }}</h3>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/CounterStore'
import { ref } from 'vue'

const inputValue = ref('')
const counterStore = useCounterStore()

function handle() {
  counterStore.changeValue(+inputValue.value)
}

function async(){
 counterStore.getRandomValue()
}
</script>
