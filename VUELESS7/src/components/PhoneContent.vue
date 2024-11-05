<template>
  <h2>Phone: {{ clearPhone }}</h2>

  <h3></h3>
</template>

<script>
export default {
  computed: {
    clearPhone() {
      return '+7' + this.phone.slice(1).replace(/[()-]/g, '')
      // return '+7'+this.phone.slice(1).replaceAll('(', '').replaceAll(')','').replaceAll('-','')
      // return '+7'+this.phone.slice(1).split('').filter(elem => (![')', '(', '-'].includes(elem)).join('')      )
    }
  },
  props: {
    phone: String
  }
}
</script>
