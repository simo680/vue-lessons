<template>
  <h1>CartForm</h1>
  <input :value="message" @input="message = $event.target.value" />
  <input type="checkbox" v-model="checked" />
  <h3>{{ 'message: ' + message }}</h3>
  <h3>{{ 'checked: ' + checked }}</h3>
  <button @click="validate, addNewWord()">Validate</button>
  <ul>
    <li v-for="(elem, ind) in words" :key="ind">
      {{ elem }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      checked: false,
      words: []
    }
  },
  methods: {
    validate() {
      console.log(this.message !== 'admin' && !!this.message && this.checked)
    },
    addNewWord() {
      this.words.push(this.message)
    }
  }
}
</script>

<style></style>
