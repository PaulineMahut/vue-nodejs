<template>
  <div>
    <h1>Connexion</h1>
      <form action="" @submit.prevent="handleLog">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="user.email" id="email">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="user.password" id="password">
          <input type="submit" value="Se connecter">
      </form>
  </div>
</template>

<script setup>
import axios from "axios";

const user = {
  email: "",
  password: ""
}

async function handleLog() {
  let r = await axios.post("http://127.0.0.1:90/login", user)
  .then((response) => {
    return response;
  })
  .catch((e) => console.log(e));
  console.log(r);
}
</script>

<style>

</style>