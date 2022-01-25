<template>
  <div :id="unitConfig.id">[&#129686;]</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    unitConfig: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>
