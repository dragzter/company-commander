<template>
  <div class="settings">
    <h1>Game Settings</h1>
    <h5 @click="displayInfo">
      Game Info <span class="ui-pointer green-text">(click to show)</span>
    </h5>
    <div
      class="popup-copy game-info bg-light"
      :class="{ 'is-shown': showInfo }"
    >
      <p>
        A company is formed with 85 Soldiers but can grow to up to 200 Soldiers.
      </p>
      <p>
        As units are lost in combat, the company commander (you) may replenish
        his company by visiting the recruitment forum. A Company Commander may
        also dismiss units from his company.
      </p>
      <p>
        Units gain experience as they participate in combat or receive wounds.
        Experience is used to determine Rank (commanders discretion) and
        veterancy (automatic).
      </p>
    </div>
    <div>
      <div class="input-wrapper">
        <label class="bold" for="company-name">Comany Name</label>
        <input
          v-model="companyName"
          type="text"
          id="company-name"
          placeholder="Wardogs..."
        />
      </div>
      <div class="input-wrapper">
        <Select
          :options="companyTypeOptions"
          default="mercenaries"
          cssId="company-type"
          label="Company Type"
        />
      </div>
      <div class="input-wrapper">
        <Select
          :options="gameDifficultyOptions"
          cssId="game-difficulty"
          label="Game Difficulty"
          default="medium"
        />
      </div>
    </div>
    <div class="input-wrapper">
      <button @click="handleSave">Save & Continue</button>
    </div>
  </div>
</template>
<script lang="ts">
// Main Settings page - Step 1
import { defineComponent, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { Mutations } from "../../store/mutations";
import { createCompany } from "../helpers/create-company";
import Select from "../gui/Select.vue";
import { Company } from "../types/unit-types";
import router from "../../router";
import { homeNav, gameSettingsNav, rosterNav } from "../helpers/constants";
import { saveGameObject } from "../helpers/save-game";

export default defineComponent({
  components: {
    Select,
  },
  setup() {
    const companyType = ref<string>("mercenary");
    const companyName = ref<string>("Wardogs");
    const gameDifficulty = ref<string>("easy");
    const showInfo = ref<boolean>(false);
    const isSaved = ref<boolean>(false);
    const company = ref<Company>();
    const store = useStore();

    /**
     * Prop Configs
     */
    const gameDifficultyOptions = ref<object[]>([
      {
        value: "easy",
        label: "Easy",
      },
      {
        value: "medium",
        label: "Medium",
      },
      {
        value: "hard",
        label: "Hard",
      },
    ]);

    const companyTypeOptions = ref<object[]>([
      {
        value: "Paramilitary",
        label: "paramilitary",
      },
      {
        value: "mercenaries",
        label: "Mercenaries",
      },
      {
        value: "Stormtrooper",
        label: "stormtrooper",
      },
    ]);

    const displayInfo = () => {
      showInfo.value = !showInfo.value;
    };

    const handleSave = () => {
      isSaved.value = true;
      company.value = createCompany(companyName.value);
      setGameDifficulty();
      setCompanyInState();
    };

    /**
     * State Management
     */
    const setGameDifficulty = () => {
      store.commit(Mutations.SET_GAME_DIFFICULTY, gameDifficulty.value);
    };

    const setCompanyInState = () => {
      saveGameObject("company", company.value);
      store.dispatch("setCompany", company.value);
    };

    const updateNavItems = () => {
      store.dispatch("setNavItems", [homeNav, rosterNav]);
    };

    /**
     * Lifecycle Hooks
     */
    onMounted(() => {
      store.dispatch("setNavItems", [homeNav, gameSettingsNav]);
    });

    watch(
      () => company.value,
      (newVal) => {
        if (newVal) {
          updateNavItems();
          router.push({ name: "Roster" });
        }
      }
    );

    return {
      companyName,
      companyType,
      gameDifficulty,
      isSaved,
      gameDifficultyOptions,
      companyTypeOptions,
      showInfo,
      handleSave,
      displayInfo,
    };
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/colors.scss";

.body-copy {
  max-width: 550px;
  margin-bottom: 15px;
}

.popup-copy {
  @extend .body-copy;
  padding: 15px;
  border: 2px dashed $ui-text;
  border-radius: 5px;
}
</style>
