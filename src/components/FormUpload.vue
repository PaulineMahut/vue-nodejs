<template>
  <div>
      <form enctype="multipart/form-data" @submit.prevent>
    <input
      type="file"
      ref="file"
      name="file"
      id="file"
      @change="handleFileUpload"
    />
    <input type="submit" value="" v-on:click="submitFile()" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";

var file = ref();
function handleFileUpload(event) {
  file = event.target.files[0];
  console.log(file);
}

function submitFile() {
  let formData = new FormData();
  formData.append("file", file);
  axios
    .post("http://127.0.1:90/csv", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function () {
      console.log("success !");
    })
    .catch(function () {
      console.log("fail !");
    });
}
</script>

<style></style>
