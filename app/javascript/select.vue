<template>
  <div>
    <label :for="attribute">{{ attribute }}</label>
    <template v-if="editing">
      <select :name="attribute" :id="attribute" :data-attribute="attribute">
        <option v-for="option in options"
                :option="option"
                :key="option"
                :value="option"
                :selected="record[attribute] === option">
          {{ option }}
        </option>
      </select>
    </template>
    <template v-if="!editing">
      {{ record[attribute] }}
    </template>
  </div>
</template>

<script>
export default {
  props: {
    record: { type: Object, required: true },
    attribute: { type: String, required: true },
    options: { type: Array, required: true },
    editing: { type: Boolean, required: true, default: false }
  }
}
</script>
