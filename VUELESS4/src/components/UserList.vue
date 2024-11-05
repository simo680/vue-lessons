<template>
  <section>
    <h2 style="text-align: center; letter-spacing: 3px">user list</h2>
    <div>
      <form @submit.prevent="newUser($event)">
        <input placeholder="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div>
      <button @click="handle()">Only the first letter</button>
      <button @click="removeFirst()">Delete first user</button>
      <h3 @dblclick="removeId(user.id)" v-for="user in users" :key="user.id">
        {{ user.name }}
      </h3>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Ars 1' },
        { id: 2, name: 'Ars 2' },
        { id: 3, name: 'Ars 3' },
        { id: 4, name: 'Ars 4' },
        { id: 5, name: 'Ars 5' }
      ]
    }
  },
  methods: {
    handle() {
      this.users = this.users.map((user) => ({ ...user, name: user.name[0] }))
    },
    removeFirst() {
      this.users.shift()
    },
    removeId(id) {
      this.users.splice(
        this.users.findIndex((user) => user.id === id),
        1
      )
    },
    newUser(e) {
      //   console.log(data)
      //   console.log(e.target[0].value)
      let form_data = e.target[0].value
      //   let form_data = Object.fromEntries(new FormData(e.target))
      //   console.log(form_data)
      this.users.push({ id: this.users.length + 1, name: form_data })
    }
  }
}
</script>
<style scoped>
section {
  margin-top: 50px;
  border-top: 5px dotted crimson;
  border-bottom: 5px dotted crimson;
  padding: 10px;
}
h3 {
  border: 1px solid grey;
  margin: 5px 0;
}
</style>
