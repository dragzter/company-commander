<template>
  <div class="table-wrapper">
    <table v-if="tableData">
      <thead>
        <tr>
          <template
            v-for="(headerItem, i) in tableData.tableHeaders"
            :key="`${headerItem}-${i}`"
          >
            <th>{{ headerItem }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="row in tableData.rowData" :key="row.id">
          <tr>
            <td>{{ row.name }}</td>
            <td>{{ row.rank }}</td>
            <td>{{ row.job }}</td>
            <td>{{ row.level }}</td>
            <td>{{ row.veterancy }}</td>
            <td>{{ row.morale }}</td>
            <td>{{ row.combatPower }}</td>
            <td>{{ row.leadership }}</td>
            <td>{{ row.evasion }}%</td>
            <td>{{ row.hitChance }}%</td>
            <td>{{ row.experience }}</td>
          </tr>
        </template>
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
