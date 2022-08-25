<template>
  <v-grid ref="grid" readonly="false" :source="source" resize="false" :columns="headers" :editors="gridEditors"
    theme="material" />
</template>


<script >
// beforeCellFocus
import { defineComponent } from 'vue';
import VGrid, { VGridVueEditor, VGridVueTemplate } from "@revolist/vue3-datagrid";
import Editor from './Editor.vue';
import Cell from './Cell.vue';
import { generateFakeDataObject } from '../dataService';

export default defineComponent({
  data() {
    const cellTemplate = VGridVueTemplate(Cell);
    const d = generateFakeDataObject(100, 25, cellTemplate);

    const button = VGridVueEditor(Editor);
    const gridEditors = { button };
    const grid = null;

    return {
      grid: grid,
      gridEditors,
      source: d.source,
      headers: d.headers
    };
  },
  components: {
    VGrid
  },
  methods: {
    // test(e) {
    //   console.log(e);
    // }
  }
});
</script>

<style scoped>
revo-grid {
  height: 100%;
  width: 100%;
  margin: 0;
}


.arrow-down svg {
  opacity: 1;
  width: 10px;
  height: 10px;
}

</style>