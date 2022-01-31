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
      <router-link
        class="game-settings"
        title="Game Settings"
        :to="{ name: 'GameMenu' }"
        ><i class="fas fa-cog"></i
      ></router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import NavItem from "./NavItem.vue";
import { useStore } from "vuex";
import { itemInStorage } from "../helpers/memory-management";
import { rosterNav } from "../helpers/constants";
import { Getters } from "../../store/getters";

export default defineComponent({
  components: {
    NavItem,
  },
  props: {},
  setup() {
    const store = useStore();
    const navItemList = computed(() => {
      return store.getters[Getters.GET_NAV_ITEMS];
    });

    const setNavItems = () => {
      if (itemInStorage("company")) {
        store.dispatch("setNavItems", [rosterNav]);
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
