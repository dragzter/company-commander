<template>
  <Nav :navigationList="navItems" />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Nav from "./components/gui/Nav.vue";

export default defineComponent({
  components: {
    Nav,
  },
  setup() {
    const navItems = ref<object>([
      {
        url: "Home",
        text: "Home",
        css_id: "home-link",
      },
      {
        url: "GameSettings",
        text: "Game Setup",
        css_id: "game-setup-link",
      },
      {
        url: "Roster",
        text: "Roster",
        css_id: "roster-link",
      },
      {
        url: "Missions",
        text: "Missions",
        css_id: "missions-link",
      },
      {
        url: "Provisions",
        text: "Provisions",
        css_id: "provisions-link",
      },
      {
        url: "Recruitment",
        text: "Recruitment",
        css_id: "recruitment-link",
      },
    ]);

    return {
      navItems,
    };
  },
});
</script>

<style lang="scss">
@import "./assets/scss/colors.scss";
@import "./assets/scss/style.scss";

.nav-wrapper {
  width: 100%;
  background-color: $light-grey;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 15px;
}
</style>
