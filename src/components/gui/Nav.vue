<template>
  <div class="nav-wrapper">
    <div><h4>COMPANY COMMANDER</h4></div>
    <div>
      <template v-for="item in navigationList" :key="item.text">
        <nav-item :destination="item" />
      </template>
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
</style>
