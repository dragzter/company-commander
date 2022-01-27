<template>
  <label class="bold" :for="cssId">{{ label }}</label>
  <select v-model="selected" :name="cssId" :id="cssId">
    <option disabled value="">Please select one</option>
    <template v-for="option in options" :key="option.value">
      <option :value="option.value">{{ option.label }}</option>
    </template>
  </select>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    cssId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    default: {
      type: String,
      default: "Select One",
    },
  },
  setup(props, ctx) {
    const selected = ref<string>(props.default);

    return {
      selected,
    };
  },
});
</script>
