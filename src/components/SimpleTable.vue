<template>
    <v-grid ref="grid" readonly="false" :source="source" resize="true" :columns="headers"
        theme="default" rowClass="rowClass" :column-types="plugin" />
</template>


<script >
// beforeCellFocus
import { defineComponent } from 'vue';
import VGrid from "@revolist/vue3-datagrid";
import NumberColumnType from '@revolist/revogrid-column-numeral'; // import library
const plugin = { 'numeric': new NumberColumnType('0,0.000') }; // create plugin entity
import { columnsData, rowsData } from '../dataService';

export default defineComponent({
    data() {
        return {
            source: rowsData,
            headers: columnsData,
            plugin: plugin
        };
    },
    components: {
        VGrid
    },
    methods: {
    },
    mounted() {
    }
});
</script>

<style>
.rowClass {
}
</style>

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