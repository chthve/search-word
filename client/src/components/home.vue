<template>
  <div class="main">
    <Search v-bind:languages="languages" @words="onReceivingWords" />
    <Words v-bind:words="words" />
  </div>
</template>

<script>
import axios from 'axios'

import Search from './search-bar'
import Words from './word-display'
export default {
  name: 'Home',
  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      languages: ['AR'],
      words: ''
    }
  },
  components: {
    Search,
    Words
  },
  methods: {
    getLanguages() {
      axios
        .get(`https://api.gavagai.se/v3/languages?apiKey=${this.apiKey}`)
        .then((res) => (this.languages = res.data))
        .catch((err) => console.log(err))
    },
    onReceivingWords(words) {
      this.words = words
    }
  },
  created() {
    this.getLanguages()
  }
}
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1608893801920-7b5d1e6a7855?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80');
}
</style>
