<script>
import Head from './components/Head.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
export default {
  components: {
    Head,
    About,
    Skills,
    Contact
  }
}
</script>

<template>
  <header class="max-width">
    <Head></Head>
  </header>
  <main class="max-width">
    <About></About>
    <Skills></Skills>
  </main>
  <footer class="max-width">
    <Contact></Contact>
  </footer>
</template>

<style scoped>



</style>
