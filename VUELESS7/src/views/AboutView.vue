<template>
  <h2>About view</h2>
 <p>{{ title }}</p>
  <p>{{ value }}</p>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
  },
  mounted() {
    console.log(this.$route.params.title)
    // console.log(this.$route.fullPath);
    // console.log(this.$route.meta);
    // console.log(this.$route.go);
    // console.log(this.$route.path);
    // console.log(this.$route.name);
  }
}
</script>
