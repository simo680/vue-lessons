<template>
       <div>
              <li v-for="elem in array" :key="elem">
                    
                     <slot :number="elem"></slot>
              </li>
       </div>
</template>

<script>
export default {
       data() {
              return {
                     array: ["Один", "Два", "Три", "Четыре"]
              }
       }
}
</script>

<style></style>