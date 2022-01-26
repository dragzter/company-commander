<template>
  <h1>Roster Setup</h1>
  <router-link :to="{ name: 'GameSettings' }">Back</router-link>
  <div class="roster-array">
    <template v-for="unit in company" :key="unit.name"> </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Unit from "../units/Unit.vue";
import { Company } from "../types/unit-types";
import { generateSupportTeam } from "../helpers/generate-support-team";
import { SupportTeamList } from "../types/enums";
import { createCompany } from "../helpers/create-company";

export default defineComponent({
  components: {
    Unit,
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
