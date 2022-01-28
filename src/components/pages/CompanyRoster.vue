<template>
  <h1>Company Roster</h1>
  <Table :tableData="companyTableData" />
  <router-link :to="{ name: 'GameSettings' }">Back</router-link>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import {
  Company,
  SupportTeam,
  TableData,
  Soldier,
  SoldierDataCells,
} from "../types/unit-types";
import { generateSupportTeam } from "../helpers/generate-support-team";
import { SupportTeamList } from "../types/enums";
import Table from "../gui/Table.vue";

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    const store = useStore();
    const companyTableData = ref<TableData>();
    const companyRoster = ref<Company>();

    const getCompanyRoster = (): Company => {
      return store.getters["getCompanyRoster"];
    };

    /**
     * Compile Table Data
     */
    const createTableData = (companyData: any) => {
      const companyProps = Object.keys(companyData);
      let allSoldiers: Soldier[] = [];
      const potentialTeams = [
        "commandTeam",
        "mgCrew",
        "mortarCrew",
        "reconCrew",
        "medCrew",
        "sniper",
      ];

      const teamsInTheCompany = potentialTeams.filter((team: string) => {
        return companyProps.includes(team);
      });

      teamsInTheCompany.forEach((team: string) => {
        allSoldiers.push(
          companyData[team].assistant,
          companyData[team].leader,
          ...companyData[team].crew
        );
      });

      allSoldiers.push(...companyData.infantry);

      companyTableData.value = {
        tableHeaders: [
          "Name",
          "Rank",
          "Job",
          "Level",
          "Veterancy",
          "Morale",
          "Combat Power",
          "Leadership",
          "Evasion",
          "Hit Chance",
          "Experience",
        ],
        rowData: allSoldiers.map((soldier: Soldier): SoldierDataCells => {
          return {
            name: soldier.name,
            rank: soldier.rank.value,
            job: soldier.job,
            level: soldier.level,
            veterancy: soldier.veterancy,
            morale: soldier.morale,
            combatPower: soldier.combatPower,
            leadership: soldier.leadership,
            evasion: soldier.evasion,
            hitChance: soldier.hitChance,
            experience: soldier.experience,
          };
        }),
      };
    };

    /**
     * Lifecycle Hooks
     */
    watch(
      () => companyRoster.value,
      (newVal) => {
        if (newVal) {
          createTableData(newVal);
        }
      }
    );

    onMounted(() => {
      companyRoster.value = getCompanyRoster();
      console.log(companyRoster.value);
    });

    return {
      companyTableData,
    };
  },
});
</script>

<style lang="scss"></style>
