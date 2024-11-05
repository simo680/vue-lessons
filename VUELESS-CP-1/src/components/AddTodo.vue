<template>
  <div class="input_elem">
    <input @keydown.enter="handler" v-model="Text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      Text: ''
    }
  },
  methods: {
    handler() {
      console.log(this.Text)
      this.$emit('addNewTodo', this.Text)
    }
  }
}
</script>

<style scoped></style>
