<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Level</th>
          <th>Battles Fought</th>
          <th>Hit Chance</th>
          <th>Veterancy</th>
          <th>Rank</th>
          <th>Morale</th>
          <th>Combat Power</th>
          <th>Leadership</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Steve Markaski</td>
          <td>420934238497</td>
          <td>2 / 25</td>
          <td>3</td>
          <td>68% / 95%</td>
          <td>1 / 3</td>
          <td>PRIVATE</td>
          <td>5 / 10</td>
          <td>4 / 25</td>
          <td>2 / 10</td>
          <td>RIFLEMAN</td>
        </tr>
        <tr>
          <td>Bob Drakk</td>
          <td>354870869863</td>
          <td>2 / 25</td>
          <td>2</td>
          <td>58% / 95%</td>
          <td>1 / 3</td>
          <td>PRIVATE</td>
          <td>5 / 10</td>
          <td>3 / 25</td>
          <td>2 / 10</td>
          <td>RIFLEMAN</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tableData: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>
<style lang="scss">
.table-wrapper {
  margin-bottom: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid #c0c0c0;
    text-align: left;
    padding: 8px;
  }
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
