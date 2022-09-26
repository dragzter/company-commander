<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="flex">
      <div class="stats flex flex-column">
        <template v-if="stats?.commander?.rank">
          <div class="company-commander">
            <h3>
              Company Commander:<br />
              {{ stats.commander.name }} &#9733;
              <span style="color: goldenrod">{{ stats.commander.rank.value }}</span>
            </h3>
          </div>
        </template>
        <template v-if="stats.teams">
          <template v-for="team in stats.teams" :key="team.teamType">
            <div v-if="team?.leader?.rank && team?.assistant?.rank" class="support-team">
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
              <template v-for="(crewMember, i) in team.crew" :key="crewMember.name">
                <p v-if="crewMember?.rank">
                  {{ i + 1 }}. {{ crewMember.name }} -
                  <em style="font-size: 12px">{{ crewMember.rank.value }}</em>
                </p>
              </template>
            </div>
          </template>
        </template>
        <div class="soldier-count">Total Soldiers: {{ stats.count }}</div>
      </div>
      <div class="company-breakdown"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { CompanyController } from "../helpers/CompanyController";

export default defineComponent({
  setup() {
    const MEM_COMPANY_CTRL = new CompanyController();
    const stats = computed(() => {
      console.log(MEM_COMPANY_CTRL.getCompanyInformation());
      return MEM_COMPANY_CTRL.getCompanyInformation();
    });

    onMounted(() => {
      console.log(stats.value);
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
