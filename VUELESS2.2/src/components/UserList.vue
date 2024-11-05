<template>
  <div>user list</div>
  <div>
    <button @click="deleteFirstUser">Delete first user</button>
    <h3 v-for="user in users" :key="user.id" @dbclick="deleteById(user.id)">
      {{ user.name }}
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Steven' },
        { id: 3, name: 'Neena' },
        { id: 4, name: 'John' },
        { id: 5, name: 'Greeca' }
      ]
    }
  },
  methods: {
    deleteFirstUser() {
      // this.users = [
      //        {id: 1, name: 'Alex'},
      //        {id: 2, name: 'Steven'}
      //]
       // this.users = this.users.map(elem => ({...elem, name: elem.name[0]}))
       this.users.shift()
    },
    deleterById(id) {
       this.users = this.users.filter(elem => elem.id !== id)
    }
  }
}
</script>

<style></style>
