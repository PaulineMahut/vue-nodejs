import { defineStore } from 'pinia'

export const useArticlesStore = defineStore({
  id: 'articles',
  state: () => ({
    article: {},
    articles: []
  }),
  getters: {
    getArticles: (state) => state.articles
  },
  actions: {
  }
})