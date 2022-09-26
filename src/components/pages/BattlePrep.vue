<template>
  <h1>Battle Preparation</h1>
  <p>Select the men that will go on this mission.</p>
  <div class="battleprep-view">
    <h1>Battle Roster</h1>
    <template v-if="soldiers && soldiers.length">
      <template v-for="soldier in soldiers" :key="soldier.name">
        <SoldierSingle :soldier="soldier" />
      </template>
    </template>
    <p v-else>Roster is empty.</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { SaveObjects } from "../types/enums";
import { MemoryInserter, MemoryLoader } from "../helpers/CompanyController";

export default defineComponent({
  name: "BattlePrep",
  setup() {
    const MEM_LOADER = new MemoryLoader();
    const soldiers = computed(() => {
      return MEM_LOADER.loadGameObject(SaveObjects.SOLDIERS);
    });
    return {
      soldiers,
    };
  },
});
</script>
