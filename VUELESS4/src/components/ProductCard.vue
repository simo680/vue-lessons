<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ price }}</p>
    <button @click="deleteProduct">delete!</button>
  </div>
</template>
<script>
export default {
  props: ['title', 'price', 'id'],
  emits: ['deleteProduct'],
  methods: {
    deleteProduct() {
      this.$emit('deleteProduct', this.id)
    }
  }
}
</script>
<style scoped></style>
