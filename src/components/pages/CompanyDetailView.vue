<template>
  <div class="company-view">
    <template v-for="soldier in soldiers" :key="soldier.name">
      <div class="soldier">
        <span :title="soldier.name">
          [&#129686;
          {{ soldier.name.split(" ")[0][0].toLowerCase() }}.{{
            soldier.name.split(" ")[1][0].toLowerCase()
          }}
          ]
        </span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { loadGameObject } from "../helpers/save-game";

export default defineComponent({
  setup() {
    const soldiers = computed(() => {
      return loadGameObject("soldiers");
    });
    return {
      soldiers,
    };
  },
});
</script>

<style lang="scss">
.soldier {
  display: inline-block;
  font-size: 24px;
  width: 110px;
  margin-bottom: 12px;
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
