<template>
  <div class="words-container">
    <div class="word-container" v-for="word in words" :key="word.word">
      <a class="word" :href="`/info/${language}/${word.word}`">{{
        word.word
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Words',
  props: ['words'],
  data() {
    return {
      language: this.$route.params.language
    }
  }
}
</script>

<style scoped>
.words-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
}

.word-container {
  text-align: center;
  width: 70%;
  font-size: 12px;
  padding-bottom: 0.2rem;
}

a {
  text-decoration: none;
}

a:hover {
  border-bottom: 1px solid #f37a72;
}

a:active {
  color: #f37a72;
}
</style>
