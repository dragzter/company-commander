<template>
  <div :id="destination.css_id" class="nav-item">
    <router-link :to="{ name: destination.url }">{{
      destination.text
    }}</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    destination: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>
<style lang="scss">
@import "../../assets/scss/colors.scss";

.nav-item {
  display: inline-block;

  a {
    color: $ui-text;
    border: none;
    font-size: 20px;
    background: transparent;

    &:visited {
    }

    &:hover {
      background-color: darken($light-grey, 5%);
    }
  }
}
</style>
