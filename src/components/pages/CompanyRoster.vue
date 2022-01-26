<template>
  <h1>Company Roster</h1>
  <Table />
  <router-link :to="{ name: 'GameSettings' }">Back</router-link>
  <div class="roster-array">
    <template v-for="unit in company" :key="unit.name"> </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Company } from "../types/unit-types";
import { generateSupportTeam } from "../helpers/generate-support-team";
import { SupportTeamList } from "../types/enums";
import { createCompany } from "../helpers/create-company";
import Table from "../gui/Table.vue";

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    const company = ref<Company>();

    onMounted(() => {
      console.log(createCompany("The solid snakes"));
    });

    return {
      company,
    };
  },
});
</script>

<style lang="scss"></style>
