<template>
<h1>Connexion</h1>
  <form @submit.prevent="handleLog">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" v-model="user.email">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="user.password">
      <input type="submit" value="Se connecter">
  </form>
</template>

<script setup>
import axios from "axios";

const user = {
  email: "",
  password: "",
};

console.log(user);

async function handleLog() {
    let r = await axios.post("http://127.0.0.1:90/login_check", user)
    .then((response) => {
        return response;
    })
    .catch((e) => console.log(e));
    console.log(r);
}

</script>

<style>

</style>