<template>
  <div class="container">
    <h1 class="title">Looking for a word ?</h1>
    <div class="search_container">
      <form class="search_form" v-on:submit="onSubmit($event)">
        <select class="search_language" v-on:change="onOptionChange($event)">
          <option v-for="language in languages" v-bind:key="language">
            {{ language }}
          </option>
        </select>
        <input
          class="search_input"
          placeholder="Enter your word"
          type="text"
          v-model="search.word"
          @input="onInputChange($event)"
        />
        <button class="search_btn">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { debounce } from 'debounce'

export default {
  name: 'Search',
  data() {
    return {
      apiKey: process.env.VUE_APP_API_KEY,
      search: {
        language: 'AR',
        word: ''
      },
      searchResult: {}
    }
  },
  props: ['languages'],
  methods: {
    onOptionChange(e) {
      this.search.language =
        e.target.options[e.target.options.selectedIndex].text
    },
    onInputChange(e) {
      this.search.word = e.target.value
      this.getWords(this.search.language, this.search.word)
    },
    onSubmit(e) {
      e.preventDefault()
      this.getWords(this.search.language, this.search.word)
      this.$router.push(`/info/${this.search.language}/${this.search.word}`)
      this.search.word = ''
    },
    getWords: debounce(function (language, word) {
      axios
        .get(
          `https://api.gavagai.se/v3/lexicon/${language}/${word}?apiKey=${this.apiKey}`
        )
        .then((res) => (this.searchResult = res.data))
        .then(this.$emit('words', this.searchResult))
        .catch((err) => console.log(err))
    }, 200)
  }
}
</script>

<style scoped>
.container {
  width: 40%;
  height: auto;
}
.title {
  font-size: 20px;
  text-align: center;
  width: 100%;
  margin-bottom: 3rem;
  font-size: 30px;
}
.search_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  background: rgb(255, 255, 255, 0.1);
  padding: 3rem 0;
}

.search_form {
  display: flex;
}

.search_language {
  background: #eeeeee;
  color: #aaaaaa;
  padding: 0.3rem 0.5rem;
  border: none;
  margin-right: 1rem;
}

.search_input {
  background: #eeeeee;
  color: #aaaaaa;
  padding: 0.3rem 1rem;
  border: none;
  margin-right: 1rem;
}

.search_btn {
  padding: 0.7rem 3rem;
  background: #f37a72;
  color: #ffffff;
  text-transform: capitalize;
  font-size: 0.7rem;
  border: none;
  cursor: pointer;
}
</style>
