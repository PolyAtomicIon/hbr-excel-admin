<template>
  <div class="tile large">
    <v-grid 
      ref="grid" 
      readonly="false" 
      :source="source" 
      resize="false" 
      :columns="headers" 
      :editors="gridEditors"
      theme="material" 
    />
  </div>
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

body, html {
  height: 100%;
  width: 100%;
  padding: 20px;
  margin: 0;
  overflow: hidden;
  background-color: #f7f9fc;
  text-align: center;
}

revo-grid {
  display: block;
}

.tile {
  background-color: #fff;
  display: flex;
  margin: 0 auto;
  padding: 20px 0;
  box-shadow: 0 0 14px 0 rgba(53, 64, 82, .05);
  border-radius: 10px;
  overflow: hidden;
}

.arrow-down svg {
  opacity: 1;
  width: 10px;
  height: 10px;
}

revo-grid {
  width: 100%;
}

.tile.dark {
  background-color: #333;
}

.tile.large {
  width: 500px;
  height: 400px;
}
</style>