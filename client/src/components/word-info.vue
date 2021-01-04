<template>
  <div class="main">
    <Spinner v-if="loading" />
    <div class="info-wrapper" v-if="!loading">
      <h1 v-if="this.word" class="title">
        {{ this.word.wordInformation.word }}
      </h1>
      <div
        class="info-container"
        v-if="this.word.wordInformation.additionalInformation"
      >
        <p>You can find more information here</p>
        <p>👇</p>
        <a class="btn_info"> Info </a>
      </div>
      <div
        class="info-container"
        v-if="!this.word.wordInformation.additionalInformation"
      >
        <p>Sorry we don't have anymore information to provide you 😐</p>
        <p class="try-again">Try again with another language</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Spinner from './spinner'

export default {
  name: 'Info',
  components: { Spinner },
  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      word: '',
      loading: true
    }
  },
  methods: {
    async getWord() {
      await axios
        .get(
          `https://api.gavagai.se/v3/lexicon/${this.$route.params.language}/${this.$route.params.word}?apiKey=${this.apiKey}`
        )
        .then((res) => (this.word = res.data))
        .catch((err) => console.log(err))
      this.loading = false
      console.log(this.word.wordInformation)
    }
  },
  watch: {
    $route: 'getWord'
  },
  created() {
    this.getWord()
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
.info-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 30vh;
  background: rgb(255, 255, 255, 0.1);
}

.info-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-around;
  position: relative;
}
.title {
  text-align: center;
  text-transform: capitalize;
  border-bottom: 1px solid #eeeeee;
}
.btn_info {
  padding: 0.7rem 3rem;
  background: #f37a72;
  color: #ffffff;
  text-transform: capitalize;
  font-size: 0.7rem;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: none;
}
.try-again {
  font-size: 10px;
  font-style: italic;
  position: absolute;
  bottom: 0;
}
</style>
