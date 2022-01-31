<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="flex">
      <div class="stats flex flex-column">
        <template v-for="commander in stats.commander" :key="commander.name">
          <div class="company-commander">
            <h3>
              Company Commander:<br />
              {{ commander.name }} &#9733;
              <span style="color: goldenrod">{{ commander.rank.value }}</span>
            </h3>
          </div>
        </template>
        <template v-for="team in stats.teams" :key="team.teamType">
          <div class="support-team">
            <h4>{{ team.teamType }}</h4>
            <hr />
            <p>
              <strong>Leader</strong>: {{ team.leader.name }} -
              {{ team.leader.rank.value }}
            </p>
            <p>
              <strong>Asst</strong>: {{ team.assistant.name }} -
              {{ team.assistant.rank.value }}
            </p>
            <h4>Crew:</h4>
            <template
              v-for="(crewMember, i) in team.crew"
              :key="crewMember.name"
            >
              <p>
                {{ i + 1 }}. {{ crewMember.name }} -
                <em style="font-size: 12px">{{ crewMember.rank.value }}</em>
              </p>
            </template>
          </div>
        </template>
        <div class="soldier-count">Total Soldiers: {{ stats.count }}</div>
      </div>
      <div class="company-breakdown"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Company } from "../types/unit-types";
import { getCompanyStats } from "../helpers/generate-stats";

export default defineComponent({
  setup() {
    const stats = computed(() => {
      return getCompanyStats();
    });
    return {
      stats,
    };
  },
});
</script>
<style lang="scss">
.dashboard {
  .stats {
    width: 400px;
    p {
      margin: 0;
    }
  }
  .company-commander {
    margin-bottom: 30px;
  }
  .support-team {
    margin-bottom: 30px;
  }
}
</style>
