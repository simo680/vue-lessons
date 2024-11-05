<template>
  <div  class="todo_item" @click="removeTodo" @dblclick="changeTodo" :class="(completed ? 'green' : 'red')">
       <h1>{{ title }}</h1>
</div>
  
</template>

<script>
export default {
  props: ['title', 'completed', 'id'],
  emits: ['changeTodo', 'removeTodo'],
  methods: {
    changeTodo() {
      this.$emit('changeTodo', this.id)
    },
    removeTodo() {
      this.$emit('removeTodo', this.id)
    }
  }
}
</script>

<style scoped>
.green {
       background-color: green;
}
.red {
       background-color: red;
}


</style>
