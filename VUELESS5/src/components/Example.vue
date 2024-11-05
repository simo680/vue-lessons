<template>
  <div>
    <h2>Example</h2>
    <input v-model="name" />
    <input v-model="lastName" />
    <p>{{ fullName }}</p>
    <p>{{ conditionName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Alex',
      lastName: 'Willyam'
    }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.lastName
    },
    conditionName() {
      return this.name.length > 10 ? 'name > 10' : 'name <= 10'
    },
    fullNameWatch() {
      return [this.name, this.lastName]
    }
  },
  watch: {
    name(newValue, oldValue) {
      console.log(newValue, 'new name')
      console.log(oldValue, 'change value')
    },
        name() {
          console.log(this.name, 'change name')
        },
    lastName() {
      console.log(this.lastName, 'change lastName')
    },
    fullNameWatch(){
           console.log(this.fullNameWatch, 'change fullName');
    }
  },
  // mounted() {
  //   this.name = 'ahahahahah'
  // }
}
</script>
