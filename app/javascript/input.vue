<template>
  <div>
    <label :for="attribute">{{attribute}}</label>
      <template v-if="editing">
        <input
          :id="attribute"
          :type="mappedType"
          :value="record[attribute]"
          :data-attribute="attribute"
          :class="inputClass(attribute)"
        />
        <br />
        <div v-if="hasErrors(attribute)">
          {{ errorMessages(attribute) }}
        </div>
        <br />
      </template>
      <template v-if="!editing">
          {{ record[attribute]}}
          <br />
          <br />
      </template>
  </div>
</template>

<script>
export default {
  props: {
    attribute: { type: String, requried: true },
    type: { type: String, required: true },
    record: { type: Object, required: true },
    options: { type: Array, required: false, default: () => [] },
    editing: { type: Boolean, required: true, default: false }
  },
  computed: {
    mappedType () {
      return { 'string': 'text' }[this.type] || this.type
    },
  },
  methods: {
    hasErrors(attribute) {
      return !!this.record.errors[attribute];
    },
    errorMessages(attribute) {
      return this.record.errors[attribute]
        .map((e) => [attribute, e].join(" "))
        .join(", ");
    },
    inputClass(attribute) {
      return this.hasErrors(attribute) ? "field_with_errors" : null;
    },
  },
};
</script>

<style scoped>
</style>
