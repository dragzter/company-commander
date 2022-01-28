<template>
  <div class="row flex align-center justify-between">
    <div class="col flex"><h1>Company Roster</h1></div>
    <div class="col flex justify-end">
      <button class="btn-green">Start</button>
      <button class="m0">Edit Company</button>
    </div>
  </div>

  <Table :tableData="companyTableData" />
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
import { tableHeaders } from "../helpers/constants";
import Table from "../gui/Table.vue";

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    const store = useStore();
    const companyTableData = ref<TableData>();
    const companyRoster = ref<Company>();
    const allSoldiers = ref<Soldier[]>([]);

    const getCompanyRoster = (): Company => {
      return store.getters["getCompanyRoster"];
    };

    const consolidateSoldiers = (companyData: any): Soldier[] => {
      const consolidatedSoldierArray = [];
      const companyProps = Object.keys(companyData);

      ["commandTeam", "mgCrew", "mortarCrew", "reconCrew", "medCrew", "sniper"]
        .filter((team: string) => {
          return companyProps.includes(team);
        })
        .forEach((team: string) => {
          consolidatedSoldierArray.push(
            companyData[team].assistant,
            companyData[team].leader,
            ...companyData[team].crew
          );
        });

      consolidatedSoldierArray.push(...companyData.infantry);
      return consolidatedSoldierArray;
    };

    /**
     * Compile Table Data
     */
    const createTableData = (companyData: Company) => {
      allSoldiers.value = consolidateSoldiers(companyData);

      companyTableData.value = {
        tableHeaders,
        rowData: allSoldiers.value.map((soldier: Soldier): SoldierDataCells => {
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
