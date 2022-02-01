<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="flex">
      <div class="stats flex flex-column">
        <template v-for="commander in stats.commander" :key="commander.name">
          <div class="company-commander">
            <h3>
              Company Commander:<br />
              <span class="commander-name"
                >{{ commander.name }} &#9733;
                <span style="color: goldenrod">{{
                  commander.rank.value
                }}</span></span
              >
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
      <div class="company-actions flex">
        <div @click="navigateTo('Missions')" class="action flex align-center">
          <h1>Missions</h1>
        </div>
        <div
          @click="navigateTo('Recruitment')"
          class="action flex align-center"
        >
          <h1>Recruitment</h1>
        </div>
        <div @click="navigateTo('Battlelog')" class="action flex align-center">
          <h1>Battlelog</h1>
        </div>
        <div @click="navigateTo('Roster')" class="action flex align-center">
          <h1>Roster</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Company } from "../types/unit-types";
import { getCompanyStats } from "../helpers/generate-stats";
import router from "../../router";

export default defineComponent({
  setup() {
    const stats = computed(() => {
      return getCompanyStats();
    });

    const navigateTo = (target: string) => {
      router.push({ name: target });
    };

    return {
      navigateTo,
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
  .company-actions {
    width: 100%;
    border: 1px dashed #000;
    margin-left: 35px;
    flex-wrap: wrap;
    .action {
      display: flex;
      flex: 1 0 auto;
      width: 33%;
      margin: 5px;
      border: 1px solid #000;
      cursor: pointer;
      &:hover {
        background-color: darken(#fff, 3%);
      }
      h1 {
        width: 100%;
        text-align: center;
      }
    }
    height: 500px;
  }
  .company-commander {
    margin-bottom: 30px;
    .commander-name {
      padding: 3px 14px;
      margin-top: 6px;
      display: inline-block;
      border: 1px dashed #000;
    }
  }
  .support-team {
    margin-bottom: 30px;
  }
}
</style>
