<template>
  <user-list></user-list>
  
</template>

<script>
import Counter from './components/Counter.vue'
import UserList from './components/UserList.vue'
import PropsExample from './components/PropsExample.vue'


export default {
  components: {Counter, UserList, PropsExample},
  data() {
    return {
      numbers: ["Один", "Два", "Три"]
    }
  }
}
</script>
<style scoped></style>
