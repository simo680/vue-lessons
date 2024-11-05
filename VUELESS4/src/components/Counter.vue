<template>
  <section>
    <h2>Counter</h2>
    <p>{{ count }}</p>
    <!-- <button @click="incr">Incr</button> -->
    <!-- <button @click="incr()">Incr</button> -->
    <!-- <button @click="incr(4, $event)">Incr</button> -->
    <button @click="eventHandler($event, incr, 3), incr(2)">Incr</button>
    <button @click="eventHandler($event, decr)">Decr</button>
    <button @click="console.log(count)">Log Count</button>
    <button @click="promptFunc">Prompt</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    // incr(n = 1, e) {
    //   console.log(e)
    //   this.count += n
    // },
    incr(n) {
      this.count += n
    },
    decr(n) {
      this.count -= n
    },
    promptFunc() {
      let newValue = prompt('new')
      //   this.count = newValue < Infinity ? newValue : 0
      this.count = isNaN(newValue) ? 0 : newValue
    },
    eventHandler(e, func, n = 1) {
      console.log(e)
      func(n)
    }
  }
}
</script>

<style scoped>
h2,
p {
  text-align: center;
  margin-top: 20px;
}
p {
  margin: 50px 0;
  color: forestgreen;
  font-size: xx-large;
  font-weight: bold;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    width: 200px;
    margin: 0 auto;
  }
}
</style>
