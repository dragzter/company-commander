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
      <p>A company is formed with 80 units but can grow to up to 200 units.</p>
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
      <label class="bold" for="company-type"
        >Company Type <em>(This is purely for flavor and naming)</em></label
      >
      <select v-model="companyType" name="companytype" id="company-type">
        <option disabled value="">Please select one</option>
        <option value="paramilitary">Paramilitary</option>
        <option value="mercenary">Mercenary</option>
        <option value="androids">Androids</option>
        <option value="stormtrooper">Stormtrooper</option>
      </select>
    </div>
    <div class="input-wrapper">
      <label class="bold" for="game-difficulty">Game Difficulty</label>
      <select
        v-model="gameDifficulty"
        name="game-difficulty"
        id="game-difficulty"
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
    <div class="input-wrapper">
      <button @click="handleSave">Save</button>
      <router-link :to="{ name: 'Roster' }" v-if="isSaved"
        >Assemble Company</router-link
      >
    </div>
  </div>
</template>
<script lang="ts">
// Main Settings page - Step 1
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import { Mutations } from "../../store/mutations";
export default defineComponent({
  setup() {
    const companyName = ref<string>("Wardogs");
    const companyType = ref<string>("mercenary");
    const gameDifficulty = ref<string>("easy");
    const isSaved = ref<boolean>(false);
    const store = useStore();
    const showInfo = ref<boolean>(false);

    const setCompanyInfo = () => {
      store.commit(Mutations.SET_COMPANY_INFO, {
        name: companyName.value,
        type: companyType.value,
      });
    };

    const setGameDifficulty = () => {
      store.commit(Mutations.SET_GAME_DIFFICULTY, gameDifficulty.value);
    };

    const displayInfo = () => {
      showInfo.value = !showInfo.value;
    };

    const handleSave = () => {
      isSaved.value = true;
      setCompanyInfo();
      setGameDifficulty();
    };

    watch(
      () => companyType.value,
      (newVal) => {
        console.log(newVal);
      }
    );

    return {
      companyName,
      companyType,
      gameDifficulty,
      isSaved,
      showInfo,
      handleSave,
      displayInfo,
    };
  },
});
</script>

<style scoped lang="scss">
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

.input-wrapper {
  margin-bottom: 20px;
  width: 250px;
  label,
  input {
    display: block;
    width: 100%;
  }
  select {
    width: 100%;
  }
  label {
    margin-bottom: 2px;
    color: $ui-text;
  }
}

.bold {
  font-weight: bold;
}

.bg-light {
  background-color: $light-grey;
}

.game-info {
  display: none;
}

.ui-pointer {
  cursor: pointer;
}

.is-shown {
  display: block !important;
}

.green-text {
  color: $green;
}
</style>
