<template>
      <h2>Contants View</h2> 
      <ul>
       <router-link to="/contacts/email"><li>Email</li></router-link>
       <router-link to="/contacts/phone"><li>Phone</li></router-link>
      </ul>
      <router-view :phone="phone" :email="email"></router-view>
</template>

<script>
import {RouterView, RouterLink} from 'vue-router'
export default {
      data() {
    return {
      phone: '8(916)551-21-00',
      email: 'erik.simo@gmail.com',
    }
  }
      }
</script>

<style></style>
