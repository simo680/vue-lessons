<template>
  <CartForm></CartForm>
</template>

<script>
import CartForm from './components/CartForm.vue'
import Counter from './components/Counter.vue'
import UserList from './components/UserList.vue'
import PropExample from './components/PropExample.vue'
import ProductCard from './components/ProductCard.vue'

export default {
  components: {
    Counter,
    UserList,
    PropExample,
    ProductCard,
    CartForm,
    CartForm
  },
  data() {
    return {
      titleArr: [
        { text: 'gg lol1', cnt: 11 },
        { text: 'gg lol2', cnt: 22 },
        { text: 'gg lol3', cnt: 33 }
      ],
      products: [
        { id: 1, title: 'Item 1', price: 100 },
        { id: 2, title: 'Item 2', price: 200 },
        { id: 3, title: 'Item 3', price: 300 },
        { id: 4, title: 'Item 4', price: 400 }
      ]
    }
  },
  methods: {
    LOG(n) {
      console.log('LOG', n)
    },
    deleteProduct(id) {
      console.log(id)
      this.products.splice(
        this.products.findIndex((product) => product.id === id),

      )
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
