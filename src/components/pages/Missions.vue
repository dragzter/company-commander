<template>
  <div class="col flex"><h1>Missions</h1></div>
  <div class="flex mission-wrapper">
    <div class="mission-table flex" ref="checkboxes">
      <template v-for="(mission, i) in missions" :key="mission.name">
        <template v-if="i < 10">
          <div class="mission">
            <h3 class="flex">
              <input
                :value="i"
                v-model="selectedItem"
                :id="`mission-${i}`"
                type="radio"
                name="mission"
                class="checkbox"
              />
              <label :for="`mission-${i}`"
                >{{ mission.name }}
                <span><i class="fa-solid fa-coins"></i> ${{ rewardsList[i] }}</span></label
              >
            </h3>
            <!-- <p>{{ mission.desc }}</p> -->
          </div>
        </template>
      </template>
    </div>
    <div v-if="missions[selectedItem]" class="selected-mission flex-column">
      <h3>{{ missions[selectedItem].name }}</h3>
      <p>{{ missions[selectedItem].desc }}</p>
      <button class="btn-main">Launch Mission</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { missions } from "../data/missions.json";
import { Mission } from "../types/types";

export default defineComponent({
  setup() {
    const selectedItem = ref<number>(0);
    const max = ref<number>(1);
    const selectedMission = ref<Mission>({} as Mission);
    const rewardsList = ref<number[]>(
      [...Array(missions.length)].map(() => Math.floor(Math.random() * 100 + 200))
    );

    const handleSelect = (e: Event, msn: Mission) => {
      selectedMission.value = msn;
    };

    watch(
      () => selectedItem.value,
      (newVal) => {
        console.log(newVal);
      }
    );

    return {
      missions,
      selectedItem,
      rewardsList,
      max,
      selectedMission,
      handleSelect,
    };
  },
});
</script>
<style lang="scss" scoped>
.mission h3 {
  line-height: 1.8;
  margin-top: 0;
  label {
    padding-left: 10px;
    span {
      color: #fff;
      background: #15a06b;
      border: 1px solid #4cd8a2;
      padding: 0 8px;
    }
  }
}
.mission-wrapper {
  justify-content: space-between;
  max-width: 850px;
  margin: auto;

  .mission-table {
    flex-basis: 50%;
    flex-direction: column;
    padding: 0 15px;
  }
  .selected-mission {
    flex-basis: 50%;
    padding: 15px;
    background: #eee;
    border: 1px solid #ccc;
    align-self: baseline;
    h3 {
      margin-top: 0;
    }
  }
}
</style>
