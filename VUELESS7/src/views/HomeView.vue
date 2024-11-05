<template>
       <h2>Homevue</h2>
       <button @click="navigate">Go to</button>
</template>

<script>

  export default {
       methods: {
              navigate() {
                     // this.$router.push('/404')
                     this.$router.replace('/404')
                     // this.$router.go(-1)
                     }
       }
  }
</script>