<template>
       <div>
              <slot :msg="message"></slot>
       </div>
</template>

<script>
export default {
       data() {
              return {
                     message: 'Example!'
              }
       }
}
</script>

<style></style>