<template>
       <div class="Header">
              <h3>Contact details</h3>
              <p>Please fill your information so we can get in touch with you.</p>
              <div class="line"></div>
              <form class="form">
                     <label for="text">Name</label>
                     <input v-model="text" placeholder="Your name">
                     <label for="phone">Phone number</label>
                     <input v-model="text" placeholder="(123) 456 - 7890">
                     <label for="email">Email</label>
                     <input v-model="text" placeholder="Your Mail ID">
                     <label for="date">Date</label>
                     <input v-model="text" placeholder="dd - mm - yyyy">
              </form>
       </div>
</template>

<script>

</script>

<style scoped>
.line {
       width: 596.259px;
       height: 1px;
       background: #D9DBE9;
}
.form {
       border-radius: 34px;
       box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);
}
</style>