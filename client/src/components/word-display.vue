<template>
  <div
    v-if="
      words &&
      words.semanticallySimilarWords &&
      words.semanticallySimilarWords.length
    "
    class="words-container"
  ></div>
</template>

<script>
export default {
  name: 'Words',
  props: ['words'],
  methods: {
    log() {
      console.log(this.words)
    }
  }
}
</script>

<style scoped></style>
