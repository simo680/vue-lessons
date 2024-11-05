<template>
  <div>
    <h1>Counter</h1>
    <h3>{{ count }}</h3>
    <button @click="incr(1, $event)">Incr</button>
    <button @click="incr(100)">Incr 100</button>
    <button @click="decr(1)">Decr</button>
    <button @click="decr(100)">Decr 100</button>
    <button @click="console.log(count)">log count</button>
    <button @click="eventHandle(count, $event)">event</button>
    <button @keydown="eventHandle(count, $event)">key</button>
    <button @click="request">Prompt</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incr(n) {
      console.log(n)

      this.count += n
    },
    decr(n) {
      console.log(n)

      this.count -= n
    },
    eventHandle(n, event) {
      console.log(event)
      console.log(n)
    },
    request(n) {

    }
  }
}
</script>

<style></style>
