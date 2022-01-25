<template>
  <div>
    <h1>Control Panel</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>
