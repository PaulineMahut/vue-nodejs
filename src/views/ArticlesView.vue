<template>
<h1>Mes articles</h1>
<!-- <button @click="fetchArticles">
Fetch
</button> -->
  <ArticlesList />
</template>

<script setup>
import ArticlesList from "../components/ArticlesList.vue";
import {useArticlesStore} from "../stores/articles";

const articleStore = useArticlesStore();

</script>

<style>

</style>