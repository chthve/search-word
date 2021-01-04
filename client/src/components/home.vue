<template>
  <div>
    <div class="main">
      <Search v-bind:languages="languages" @words="onReceivingWords" />
      <Words v-bind:words="words" />
    </div>
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
}
</style>
