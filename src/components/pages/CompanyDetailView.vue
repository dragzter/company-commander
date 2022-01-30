<template>
  <div class="company-view">
    <template v-for="soldier in soldiers" :key="soldier.name">
      <div class="soldier">
        <div class="tooltip">
          <span class="tooltiptext" style="word-break: break-all">
            {{ soldier.name }}<br />
            Level: {{ soldier.level }} {{ soldier.job.replaceAll("_", " ")
            }}<br />
            {{ soldier.rank.value.replaceAll("_", " ") }}<br />
            ----------------- <br />
            Hit: {{ soldier.hitChance }}%<br />
            Combat Power: {{ soldier.combatPower }}<br />
            Leadership: {{ soldier.leadership }}<br />
            Morale: {{ soldier.morale }}<br />
          </span>
          <span class="soldier-wrapper">
            &#129686;
            {{ soldier.name.split(" ")[0][0].toLowerCase() }}.{{
              soldier.name.split(" ")[1][0].toLowerCase()
            }}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { loadGameObject } from "../helpers/save-game";
import { SaveObjects } from "../types/enums";

export default defineComponent({
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
  margin-bottom: 16px;
  border: 1px dashed black;
  text-align: center;
  margin-right: 8px;
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
