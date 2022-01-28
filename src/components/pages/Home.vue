<template>
  <div class="title-wrapper">
    <div style="text-align: center">WELCOME TO</div>
    <pre>
  ___                                 ___                              _         
 / __|___ _ __  _ __ __ _ _ _ _  _   / __|___ _ __  _ __  __ _ _ _  __| |___ _ _ 
| (__/ _ | '  \| '_ / _` | ' | || | | (__/ _ | '  \| '  \/ _` | ' \/ _` / -_| '_|
 \___\___|_|_|_| .__\__,_|_||_\_, |  \___\___|_|_|_|_|_|_\__,_|_||_\__,_\___|_|  
               |_|            |__/                                               
</pre
    >
    <p style="text-align: center">v0.3.0</p>
  </div>
  <div style="text-align: center; margin-top: 25px">
    <router-link :to="{ name: 'GameSettings' }">Launch Campaign</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style lang="scss">
.title-wrapper {
  max-width: 700px;
  margin: auto;
  border: 2px dashed #000;
  padding: 20px;
  text-align: center;
}
pre {
  text-align: center;
}
</style>
