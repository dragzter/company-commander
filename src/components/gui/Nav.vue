<template>
  <div class="nav-wrapper">
    <div><h4>COMPANY COMMANDER</h4></div>
    <div>
      <div class="nav-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </div>
      <template v-for="item in navItemList" :key="item.text">
        <nav-item :destination="item" />
      </template>
      <router-link class="game-settings" title="Game Settings" :to="{ name: 'GameMenu' }"
        ><i class="fas fa-cog"></i
      ></router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import NavItem from "./NavItem.vue";
import { useStore } from "vuex";
import { MemoryLoader } from "../helpers/CompanyController";

import { missionsNav, rosterNav } from "../helpers/constants";
import { Getters } from "../../store/getters";

export default defineComponent({
  components: {
    NavItem,
  },
  props: {},
  setup() {
    const store = useStore();
    const navItemList = computed(() => store.getters[Getters.GET_NAV_ITEMS]);
    const MEM_LOADER = new MemoryLoader();
    const setNavItems = () => {
      if (MEM_LOADER.itemInStorage("COMPANY")) {
        store.dispatch("setNavItems", [missionsNav, rosterNav]);
      }
    };

    onMounted(() => {
      setNavItems();
    });

    return {
      navItemList,
    };
  },
});
</script>
<style lang="scss">
h4 {
  margin: 0 !important;
}
.game-settings {
  font-size: 26px;
  border-radius: 30px;
  padding: 0 5px;
}
</style>
