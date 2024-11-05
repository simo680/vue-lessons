<template>
  <div>
    <add-todo @addNewTodo="addNewTodo"></add-todo>
    <todo-list :todos='todos' @removeTodo="removeTodo" @changeTodo="changeTodo"></todo-list>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
export default {
  components: {
    AddTodo,
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, title: 'Позавтракать', completed: true },
        { id: 2, title: 'Почистить огурцы', completed: false },
        { id: 3, title: 'Помыть кота', completed: true }
      ]
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((elem) => elem.id !== id)
    },
    changeTodo(id) {
      this.todos = this.todos.map((elem) => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem;
      });
    },
    addNewTodo(title) {
      this.todos.push({
        id: Date.now(),
        completed: false,
        title
      })
    }
  }
}
</script>

<style scoped></style>
