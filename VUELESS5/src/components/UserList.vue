<template>
  <h2>Users</h2>
  <div>
    <div v-for="user in users" :key="user.id" @click="changeAge(user.age)" @dblclick="deleteUsers(user.id)">
      <h3>{{ user.firstName }}</h3>
      <p>{{ user.age }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

let data = [
  { id: 31, firstName: 'Alex', age: 21 },
  { id: 32, firstName: 'Steven', age: 24 },
  { id: 33, firstName: 'Neena', age: 32 },
  { id: 34, firstName: 'John', age: 26 }
]

export default {
  data() {
    return {
      users: JSON.parse(localStorage.getItem('users')) ?? data
    }
  },
  methods: {
    changeAge() {
      this.users = Math.round(this.users.age * 1.1)
     
      
    },
    deleteUsers(id) {
      this.users = this.users.filter(elem => elem.id !== id)
    }
  },
  watch: {
    users() {
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  },

  async mounted() {
    if (!localStorage.getItem('users')) {
      try {
        let res = await axios.get('https://dummyjson.com/users')
      this.users = [...this.users, ...res.data.users]
      }
      catch(e) {
        console.log(e);
      }
    }
  }
}
</script>
