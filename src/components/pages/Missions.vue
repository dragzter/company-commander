<template>
  <div class="col flex"><h1>Missions</h1></div>
  <div class="flex mission-wrapper">
    <div class="mission-table flex" ref="checkboxes">
      <template v-for="(mission, i) in missions" :key="mission.name">
        <div class="mission">
          <h3 class="flex">
            <input
              :value="i"
              v-model="selectedMission"
              :id="`mission-${i}`"
              type="radio"
              name="mission"
              class="radio"
            />
            <label :for="`mission-${i}`"
              >{{ mission.name }}
              <span
                ><i class="fa-light fa-coins"></i> {{ mission.reward ? mission.reward : "0" }}</span
              ></label
            >
          </h3>
          <!-- <p>{{ mission.desc }}</p> -->
        </div>
      </template>
    </div>
    <div v-if="getSelectedMission != undefined" class="selected-mission flex-column">
      <h3>{{ getSelectedMission.name }}</h3>
      <p>{{ getSelectedMission.desc }}</p>
      <button @click="launchMission" class="btn-main">Launch Mission</button>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { missions as missionsJson } from "../data/missions.json";
import router from "../../router";
import { useStore } from "vuex";
import { Mission } from "../types/types";
import { SaveObjects } from "../types/enums";
import { MemoryLoader, MemoryInserter } from "../helpers/CompanyController";

export default defineComponent({
  setup() {
    const store = useStore();
    const max = ref<number>(1);
    const selectedMission = ref<number>(0);
    const MEM_LOADER = new MemoryLoader();
    const MEM_INSERTER = new MemoryInserter();

    const missions = computed(() => {
      return savedMissions.value?.length
        ? savedMissions.value
        : store.getters["GET_MISSIONS"]
        ? store.getters["GET_MISSIONS"]
        : [];
    });

    const payoutBonus = computed(() => {
      return store.getters["GET_PAYOUT_BONUS"];
    });

    const savedMissions = computed(() => {
      return MEM_LOADER.loadGameObject(SaveObjects.MISSIONS);
    });

    const getSelectedMission = computed(() => {
      return missions.value[selectedMission.value as number];
    });

    const setMissionRewards = () => {
      missionsJson.map((m) => {
        m.reward = Math.floor(Math.random() * 120 + payoutBonus.value) as number;
      });
    };

    const launchMission = () => {
      router.push({ name: "MissionScene" });
    };

    watch(
      () => selectedMission.value,
      (newVal) => {
        store.dispatch("setSelectedMission", (missions.value as Mission[])[newVal]);
      }
    );

    onMounted(() => {
      console.log(missions.value.length, "missions");
      if (missions.value?.length === 0) {
        setMissionRewards();
        store.dispatch("setSelectedMission", selectedMission.value);
        store.dispatch("setMissions", missionsJson);
        MEM_INSERTER.saveGameObject(SaveObjects.MISSIONS, missions.value);
      } else if (MEM_LOADER.loadGameObject(SaveObjects.MISSIONS).length) {
        store.dispatch("setMissions", MEM_LOADER.loadGameObject(SaveObjects.MISSIONS));
      }
    });

    return {
      missions,
      selectedMission,
      max,
      launchMission,
      getSelectedMission,
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
      padding: 4px 12px;
      border-radius: 4px;
    }
  }
}
.mission-wrapper {
  justify-content: space-between;

  .mission-table {
    flex-basis: 50%;
    flex-direction: column;
  }
  .selected-mission {
    flex-basis: 50%;
    padding: 15px;
    background: #eee;
    border: 1px solid #ccc;
    align-self: baseline;
    border-radius: 4px;

    h3 {
      margin-top: 0;
    }
  }
}
</style>
