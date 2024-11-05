<template>
  <h2 class="content">Content Item</h2>
  <img v-if="number % 10 === 0" :src="srcImage" alt="smile face" />
  <div v-if="number % 2 === 0">Hello world!</div>
  <div v-else>No hello!</div>
</template>

<script>
export default {
  data() {
    return {
      number: Math.floor(Math.random() * (50 - 1) + 1),
      srcImage: 'https://freepngimg.com/thumb/happy/144618-emoji-happy-free-clipart-hd.png'
    }
  }
}
</script>

<style>
.content {
  color: blue;
}
</style>
