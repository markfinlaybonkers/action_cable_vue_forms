<template>
  <div id="app">
    <h2>Song</h2>
    <div v-if="song">
      <p>{{ song.title }}</p>
      <p>{{ song.artist }}</p>
      <p>{{ song.gernre }}</p>
      <Form :record="song" :saveAction="'saveSong'"></Form>
    </div>
  </div>
</template>

<script>
import Form from './form';
import { mapState } from 'vuex';
export default {
  components: { Form },
  computed: {
    ...mapState(['song'])
  }
}
</script>

<style scoped>
</style>
