<template>
  <div>
    <button @click="editing = !editing">Edit</button>
    <br>
    <br>
    <form ref="form" v-if="editing">
      <Input v-for="attribute in attributes" :attribute="attribute[0]" :record="record" :key="attribute[0]" :type="attribute[1]" />
      <button @click="save">Save</button>
    </form>
  </div>
</template>

<script>
import Input from './input';
export default {
  components: { Input },
  data () {
    return {
      editing: false
    }
  },
  props: {
    record: { type: Object, required: true },
    saveAction: { type: String, required: true }
  },
  computed: {
    attributes () {
      const attrs = Object.keys(this.record).filter(key => !['id', 'errors'].includes(key))
      debugger
      return attrs.map(a => [a, typeof(this.record[a])])
    }
  },
  methods: {
    async save (event) {
      event.preventDefault();
      let formData = {};
      const inputCollection = this.$refs.form.getElementsByTagName('input');
      const inputArray = [].slice.call(inputCollection);
      inputArray.map(i => formData[i.dataset.attribute] = i.value);
      this.$store.dispatch(this.saveAction, formData)
    }
  }
}
</script>

<style scoped>
</style>
