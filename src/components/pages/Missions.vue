<template>
  <h1>Missions</h1>
  <div class="missions-list">
    <div class="mission flex align-center">
      <div class="mission-title"><h3>Terrorized Villagers</h3></div>
      <div class="mission-action">
        <button class="btn-green">Accept Mission</button>
      </div>
      <div class="mission-meta flex">
        <h3>Reward: 459cr</h3>
        <h3>Enemies: 29</h3>
      </div>
    </div>
    <div class="mission flex align-center">
      <div class="mission-title"><h3>Attack on Oil Pipeline</h3></div>
      <div class="mission-action">
        <button class="btn-green">Accept Mission</button>
      </div>
      <div class="mission-meta flex">
        <h3>Reward: 603cr</h3>
        <h3>Enemies: 31</h3>
      </div>
    </div>
    <div class="mission flex align-center">
      <div class="mission-title"><h3>Raiders in the Mountains</h3></div>
      <div class="mission-action">
        <button class="btn-green">Accept Mission</button>
      </div>
      <div class="mission-meta flex">
        <h3>Reward: 544cr</h3>
        <h3>Enemies: 23</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style lang="scss">
.missions-list {
  width: 100%;
  .mission {
    width: 100%;
    border: 2px dashed #000;
    padding: 10px 12px;
    cursor: pointer;
    margin-bottom: 15px;
    &:hover {
      background-color: darken(#fff, 3%);
    }
    .mission-title {
      flex: 1 0 auto;
    }
    .mission-meta {
      h3 {
        border: 1px dashed #000;
        padding: 3px 8px;
        border-radius: 2px;
        margin-left: 8px;
      }
    }
    h3 {
      margin: 0;
    }
  }
}
</style>
