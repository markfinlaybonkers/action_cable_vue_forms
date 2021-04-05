<template>
  <div>
    <button @click="editing = !editing">
      {{ editing ? 'Cancel' : 'Edit' }}
    </button>
    <button @click="save" v-if="editing">Save</button>
    <br>
    <br>
    <form ref="form">
      <Input v-for="attribute in inputAttributes" :attribute="attribute" :record="record" :key="attribute[0]" :type="attribute[1]" :editing="editing" />
      <Select v-for="attribute in selectAttributes" :record="record" :options="gernres" :attribute="attribute" :key="attribute" :editing="editing"></Select>
    </form>
  </div>
</template>

<script>
import Input from './input';
import Select from './select';
export default {
  components: { Input, Select },
  data () {
    return {
      editing: false,
      selectAttributes: ['gernre'],
      inputAttributes: ['artist', 'title', 'length'],
      gernres: ['Jazz', 'Rock', 'Smooth']
    }
  },
  props: {
    record: { type: Object, required: true },
    saveAction: { type: String, required: true }
  },
  methods: {
    async save (event) {
      event.preventDefault();
      let formData = {};
      const inputCollection = this.$refs.form.getElementsByTagName('input');
      const inputArray = [].slice.call(inputCollection);
      const selectCollection = this.$refs.form.getElementsByTagName('select');
      const selectArray = [].slice.call(selectCollection);
      inputArray.map(i => formData[i.dataset.attribute] = i.value);
      selectArray.map(i => formData[i.dataset.attribute] = i.value);
      this.$store.dispatch(this.saveAction, formData)
    }
  }
}
</script>

<style scoped>
</style>
