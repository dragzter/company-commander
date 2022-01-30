<template>
  <div class="row flex align-center justify-between">
    <div class="col flex"><h1>Company Roster</h1></div>
    <div class="col flex justify-end">
      <button class="btn-green">Start</button>
      <button @click="handleClickViewCompany" class="btn-main">
        View Company
      </button>
      <button @click="handleEditCompany" class="m0">Edit Company</button>
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
import { tableHeaders } from "../helpers/constants";
import Table from "../gui/Table.vue";
import { gameSettingsNav, rosterNav } from "../helpers/constants";
import {
  loadGameObject,
  itemInStorage,
  saveGameObject,
  eraseGameObject,
} from "../helpers/save-game";
import router from "../../router";

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

    const handleEditCompany = () => {
      const confirmation = confirm(
        "This will erase your existing company.  Are you sure you want to proceed?"
      );

      if (confirmation) {
        eraseGameObject("company");
        store.commit("ERASE_COMPANY", {});
        router.push({ name: "GameSettings" });
      }
    };

    const handleClickViewCompany = () => {
      router.push({ name: "CompanyView" });
    };

    const handleStartGame = () => {};

    /**
     * Extract soldiers form all teams and infantry sections
     */
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
      saveGameObject("soldiers", consolidatedSoldierArray);
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
      store.dispatch("setNavItems", [rosterNav]);
      if (itemInStorage("company")) {
        companyRoster.value = loadGameObject("company");
        store.dispatch("setCompany", companyRoster.value);
      } else {
        companyRoster.value = getCompanyRoster();
      }
    });

    return {
      companyTableData,
      handleClickViewCompany,
      handleEditCompany,
    };
  },
});
</script>

<style lang="scss"></style>
