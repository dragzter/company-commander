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
import router from "../../router";
import { SaveObjects } from "../types/enums";
import { Getters } from "../../store/getters";
import { MemoryInserter, MemoryLoader, CompanyController } from "../helpers/CompanyController";

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    const store = useStore();
    const companyTableData = ref<TableData>();
    const companyRoster = ref<Company>();
    const allSoldiers = ref<Soldier[]>([]);
    const MEM_INSERTER = new MemoryInserter();
    const MEM_LOADER = new MemoryLoader();
    const COMP_CONTROLLER = new CompanyController();

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
        MEM_LOADER.eraseGameObject(SaveObjects.COMPANY);
        MEM_LOADER.eraseGameObject(SaveObjects.SOLDIERS);
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
    const createTableData = (company: Company) => {
      allSoldiers.value = COMP_CONTROLLER.allSoldiers;

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
      (fullCompanyRoster) => {
        if (fullCompanyRoster) {
          createTableData(fullCompanyRoster);
        }
      }
    );

    onMounted(() => {
      if (MEM_LOADER.itemInStorage(SaveObjects.COMPANY)) {
        companyRoster.value = MEM_LOADER.loadGameObject(SaveObjects.COMPANY);
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
