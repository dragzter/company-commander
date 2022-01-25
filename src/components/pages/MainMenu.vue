<template>
  <div>Main Menu</div>
  <h3>You selected {{ selectedTroops }}</h3>
  <select :model="selectTroops" name="troop-select" id="troop-select">
    <option value="soldiers">Soldiers</option>
    <option value="stormtroopers">Stormtroopers</option>
    <option value="mercenaries">Mercenaries</option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const selectTroops = ref<HTMLElement>();
    return {
      selectTroops,
    };
  },
});
</script>
