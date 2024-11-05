<template>
  <div class="card__users">
    <ul class="card__users_list">
      <li v-for="(user, index) in users" :key="index" class="card__users_item">
        <span> {{ `${user.firstName} ${user.lastName} ${user.maidenName}` }} </span>
        <span class="card__user-item-grey">{{ user.email }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        this.users = response.data.users
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>

<style scoped>
.card__users_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card__users_item {
  filter: drop-shadow(0px 0.25px 3px rgba(0, 0, 0, 0.039))
    drop-shadow(0px 2.75px 9px rgba(0, 0, 0, 0.19));
  border-radius: 10px;
  padding: 8px 20px 8px 16px;
  margin-bottom: 30px;
  gap: 12px;
  border-radius: 10px;
  height: 56px;
  width: 402px;
  background: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__user-item-grey {
  color: grey;
}
</style>
