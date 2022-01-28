<template>
  <Nav />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Nav from "./components/gui/Nav.vue";
import { NavMenuItem } from "./components/types/unit-types";
import { homeNav, gameSettingsNav } from "./components/helpers/nav-items";

export default defineComponent({
  components: {
    Nav,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "./assets/scss/colors.scss";
@import "./assets/scss/style.scss";
</style>
