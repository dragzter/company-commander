<template>
  <h1>Main Menu</h1>
  <p>
    You selected <span class="accent">{{ modeSelect }}</span>
  </p>
  <div class="input-wrapper">
    <label for="mode-select">Theme</label>
    <select v-model="modeSelect" name="mode-select" id="mode-select">
      <option selected value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const modeSelect = ref<string>("light");
    return {
      modeSelect,
    };
  },
});
</script>
<style lang="scss"></style>
