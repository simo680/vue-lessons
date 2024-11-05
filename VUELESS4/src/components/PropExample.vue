<template>
  <section>
    <h2 @click="handleLog">Prop Example</h2>
    <p>{{ title.text }} - {{ title.cnt }}</p>
  </section>
</template>
<script>
export default {
  props: {
    title: String,
    default: 'TEST',
    validator: (data) => data[0].toUpperCase() === data[0]
  },
  emits: ['handle'],
  methods: {
    handleLog() {
      this.$emit('handle', this.title.cnt)
    }
  }
}
</script>
<style scoped>
section {
  padding: 10px;

  h2,
  p {
    text-align: center;
  }

  h2 {
    margin: 30px;
  }
}
</style>
