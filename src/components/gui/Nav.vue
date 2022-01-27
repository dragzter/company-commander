<template>
  <div class="nav-wrapper">
    <div><h4>COMPANY COMMANDER</h4></div>
    <div>
      <template v-for="item in navigationList" :key="item.text">
        <nav-item :destination="item" />
      </template>
      <router-link
        class="game-settings"
        title="Game Settings"
        :to="{ name: 'GameMenu' }"
        >&#9881;</router-link
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavItem from "./NavItem.vue";

export default defineComponent({
  components: {
    NavItem,
  },
  props: {
    navigationList: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>
<style lang="scss">
h4 {
  margin: 0 !important;
}
.game-settings {
  font-size: 26px;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 0 5px;
}
</style>
