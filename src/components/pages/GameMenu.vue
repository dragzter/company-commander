<template>
  <div>Main Menu</div>
  <h3>You selected {{ selectedTroops }}</h3>
  <div class="input-wrapper">
    <label for="mode-select">Theme</label>
    <select :model="modeSelect" name="mode-select" id="mode-select">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const modeSelect = ref<HTMLElement>();
    return {
      modeSelect,
    };
  },
});
</script>
