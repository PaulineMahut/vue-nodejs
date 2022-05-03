<template>
  <div class="main">
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Currency</th>
        <th>Brand</th>
      </tr>
      <tr v-for="article in articleStore.articles" :key="article.id">
        <td>{{ article.id }}</td>
        <td>{{ article.title }}</td>
        <td>{{ article.description }}</td>
        <td>{{ article.price }}</td>
        <td>{{ article.currency }}</td>
        <td>{{ article.brand }}</td>
        <td>
        <router-link :to="{ name: 'modify', params: { id: article.id } }">
          <button>Modify</button>
        </router-link>
      </td>
      <td>
        <router-link :to="{ name: 'delete', params: { id: article.id } }">
          <button>Delete</button>
        </router-link>
      </td>
      </tr>
    </table>
  </div>
</template>

<script setup>

import { useArticlesStore } from "../stores/articles";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
import axios from "axios";

const articleStore = useArticlesStore();

onMounted(() => {
  fetchArticles();
});

async function fetchArticles() {
  let articles = await fetch("http://127.0.0.1:90/articles")
    .then((response) => response.json())
    .catch((e) => e);
  console.log(articles.articles);
  
  if (articles.articles instanceof Array) {
      articleStore.$state.articles = articles.articles;
  }
}

async function deleteArticles() {
  let articles = await axios.delete("http://127.0.0.1:90/articles")
    .then((response) => response.json())
    .catch((e) => e);
  console.log(articles.articles);
  
}
</script>

<style></style>
