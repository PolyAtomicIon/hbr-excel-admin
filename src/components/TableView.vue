<template>
  <v-grid
    :source="rows"
    :columns="columns"
    :row-size="80"
    rowClass="myRowClass"
    @beforeCellFocus="beforeFocus"
  />
  <!-- <button
    v-if="!isMerged"
    @click="mergeColumns"
    style="background: pink; height: 64px; width: 240px"
  >
    MERGE
  </button>
  <button
    v-else
    @click="unmergeColumns"
    style="background: green; height: 64px; width: 240px"
  >
    UNMERGE
  </button> -->
</template>

<script>
import VGrid, { VGridVueTemplate } from "@revolist/vue3-datagrid";
import MergedColumnTemplate from "./MergedColumnTemplate.vue";

export default {
  name: "TableView",
  data() {
    return {
      columns: [
        {
          name: "Birth",
          prop: "birthdate",
          columnType: "date",
          size: 150,
        },
        {
          prop: "name",
          name: "First",
        },
        {
          prop: "details",
          name: "Second",
        },
      ],
      rows: [
        {
          birthdate: "2022-08-24",
          name: "1",
          details: "Item 1",
        },
        {
          birthdate: "2022-08-24",
          name: "2",
          details: "Item 2",
        },
      ],
      c: [],
      r: [],
      isMerged: false,
    };
  },
  components: {
    VGrid,
  },
  mounted() {
    this.c = this.columns;
    this.r = this.rows;
  },
  methods: {
    beforeFocus(e) {
      if (this.isMerged) e.preventDefault();
    },
    mergeColumns() {
      const newC = [];
      this.columns.forEach((c) => {
        if (c.name !== "First" && c.name !== "Second") {
          newC.push(c);
        }
      });
      const newMergedColumn = {
        prop: "namedetails",
        name: "First / Second",
        size: 150,
        resize: true,
        cellTemplate: VGridVueTemplate(MergedColumnTemplate),
      };
      newC.push(newMergedColumn);
      this.columns = newC;

      // this.rows = newR;
      this.isMerged = true;
    },
    unmergeColumns() {
      this.isMerged = false;
      this.columns = this.c;
    },
  },
};
</script>

<style scoped>
revo-grid {
  height: 100%;
  width: 100%;
  margin: 0;
}
.blue {
  color: blue;
  display: block;
}
</style>
