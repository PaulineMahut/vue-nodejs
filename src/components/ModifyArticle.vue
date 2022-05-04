<template>
  <div>
    <transition name="fade">
      <form v-if="show == true" @submit.prevent="modifyArticle">
        <label for="">Titre</label>
        <input type="text" name="title" id="title" v-model="art.title" />
        <label for="">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          v-model="art.description"
        />
        <label for="">Prix</label>
        <input type="text" name="price" id="price" v-model="art.price" />
        <label for="">Currency</label>
        <input
          type="text"
          name="currency"
          id="currency"
          v-model="art.currency"
        />
        <label for="">Brand</label>
        <input type="text" name="brand" id="brand" v-model="art.brand" />
        <input type="submit" value="Valider la modification" />
      </form>
    </transition>
  </div>
</template>

<script setup>
import { useArticlesStore } from "../stores/articles";
import { useRoute } from "vue-router";
import axios from "axios";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const show = ref(false);
onMounted(() => {
  show.value = true;
});
const route = useRoute();
const articleStore = useArticlesStore();
const id = route.params.id;
const art = articleStore.articles.find((e) => e.id == id);
console.log("hhhh", art.title);

async function modifyArticle() {
  let r = await axios
    .post(`http://127.0.0.1:90/articles`, art)
    .then((response) => {
      return response;
    })
    .catch((e) => console.log(e));
  console.log(r);
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 3s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
