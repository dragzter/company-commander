<template>
  <div class="company-view">
    <template v-for="soldier in soldiers" :key="soldier.name">
      <SoldierSingle :soldier="soldier" />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { loadGameObject } from "../helpers/memory-management";
import { SaveObjects } from "../types/enums";
import SoldierSingle from "../gui/SoldierSingle.vue";

export default defineComponent({
  components: {
    SoldierSingle,
  },
  setup() {
    const soldiers = computed(() => {
      return loadGameObject(SaveObjects.SOLDIERS);
    });
    return {
      soldiers,
    };
  },
});
</script>

<style lang="scss">
.company-view {
  margin-top: 200px;
}
.soldier {
  display: inline-block;
  font-size: 24px;
  width: 110px;
  margin-bottom: 15px;
  border: 2px dashed black;
  text-align: center;
  margin-right: 15px;
  cursor: pointer;
  .soldier-wrapper {
    display: block;
    padding: 4px;
    &:hover {
      background: #ececec;
    }
  }
  span {
    text-align: center;
    display: inline-block;
    pre {
      text-align: center;
      display: inline-block;
    }
  }
}
</style>
