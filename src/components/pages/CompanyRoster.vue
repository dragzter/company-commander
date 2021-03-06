<template>
  <div class="row flex align-center justify-between">
    <div class="col flex"><h1>Company Roster</h1></div>
    <div class="col flex justify-end">
      <button @click="handleGoToDashboard" class="btn-green">Go To Dashboard</button>
      <button @click="handleClickViewCompany" class="btn-main">View Soldiers</button>
      <button @click="handleEditCompany" class="m0">Edit Company</button>
    </div>
  </div>

  <Table :tableData="companyTableData ? companyTableData : {}" />
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { Company, SupportTeam, TableData, Soldier, SoldierDataCells } from "../types/unit-types";
import { tableHeaders } from "../helpers/constants";
import Table from "../gui/Table.vue";
import { gameSettingsNav, rosterNav, companyTeams } from "../helpers/constants";
import {
  loadGameObject,
  itemInStorage,
  saveGameObject,
  eraseGameObject,
} from "../helpers/memory-management";
import router from "../../router";
import { SaveObjects } from "../types/enums";
import { Getters } from "../../store/getters";
import { consolidateSoldiers } from "../helpers/soldier-utility-functions";

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
      return store.getters[Getters.GET_COMPANY_ROSTER];
    };

    const handleGoToDashboard = () => {
      router.push({ name: "Dashboard" });
    };

    const handleEditCompany = () => {
      const confirmation = confirm(
        "This will erase your existing company.  Are you sure you want to proceed?"
      );

      if (confirmation) {
        eraseGameObject(SaveObjects.COMPANY);
        eraseGameObject(SaveObjects.SOLDIERS);
        store.commit("ERASE_COMPANY", {});
        router.push({ name: "GameSettings" });
      }
    };

    const handleClickViewCompany = () => {
      router.push({ name: "CompanyView" });
    };

    const handleStartGame = () => {};

    /**
     * Compile Table Data
     */
    const createTableData = (companyData: Company) => {
      allSoldiers.value = consolidateSoldiers(companyData);
      saveGameObject(SaveObjects.SOLDIERS, allSoldiers.value);

      companyTableData.value = {
        tableHeaders,
        rowData: allSoldiers.value.map((soldier: Soldier): SoldierDataCells => {
          return {
            name: soldier.name,
            rank: soldier.rank?.value,
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
      if (itemInStorage(SaveObjects.COMPANY)) {
        companyRoster.value = loadGameObject(SaveObjects.COMPANY);
        store.dispatch("setCompany", companyRoster.value);
      } else {
        companyRoster.value = getCompanyRoster();
      }
    });

    return {
      companyTableData,
      handleClickViewCompany,
      handleEditCompany,
      handleGoToDashboard,
    };
  },
});
</script>

<style lang="scss"></style>
