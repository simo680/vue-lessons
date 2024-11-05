<template>
  <div v-for="todo in todos" :key="todo.id">
       <TodoItem @removeTodo="removeTodo" @changeTodo="changeTodo" :id="todo.id" :title="todo.title" :completed="todo.completed"/>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  props: {
    todos: Array
  },
  emits: ['changeTodo', 'removeTodo'],
  methods: {
    changeTodo(id) {
      this.$emit('changeTodo', id)
    },
    removeTodo(id) {
      this.$emit('removeTodo', id)
    }
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped></style>
