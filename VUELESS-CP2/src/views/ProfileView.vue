<template>
  <div>
    <div class="info">
      <div class="info__profile">
        <h2>My profile</h2>
        <span class="info__profile_item">Username: {{ this.response.username }}</span>
        <span class="info__profile_item">Name: {{ this.response.firstName }}</span>
        <span class="info__profile_item">LastName: {{ this.response.lastName }}</span>
        <span class="info__profile_item">Gender: {{ this.response.gender }}</span>
        <span class="info__profile_item">Email: {{ this.response.email }}</span>
      </div>
      <img class="info__profile_img" :src="this.response.image" alt="" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      response: {},
      error: ''
    }
  },
  mounted() {
    axios
      .get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        const data = response.data
        if (data.message) {
          this.error = data.message
        } else {
          this.response = data
        }
      })
      .catch((error) => {
        console.error(error)
        this.res.message = error.response.data.message
      })
  }
}
</script>

<style>
.info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 50px;
}

.info__profile_img {
  width: 243px;
  height: 243px;
  border-radius: 50%;
}

.info__profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.info__profile_item {
  padding: 30px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: aliceblue;
}
</style>
