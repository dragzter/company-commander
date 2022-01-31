<template>
  <div class="soldier">
    <div class="tooltip">
      <span class="tooltiptext" style="word-break: break-all">
        {{ soldier.name }}<br />
        Level: {{ soldier.level }} {{ soldier.job.replaceAll("_", " ") }}<br />
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
<script lang="ts">
import { defineComponent, onMounted, PropType } from "vue";
import { Soldier } from "../types/unit-types";

export default defineComponent({
  props: {
    soldier: {
      type: Object as PropType<Soldier>,
      required: true,
    },
  },
  setup(props) {},
});
</script>
