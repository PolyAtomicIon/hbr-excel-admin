<template>
    <div class="tile">
        <component v-if="vGrid" :is="vGrid" class="grid-container" :autoSizeColumn="{
            mode: 'autoSizeOnTextOverlap'
        }" :source="source" :columns="columns" :columnTypes="columnTypes" :pinnedTopRows="pinnedTopRows"
            :pinnedBottomRows="pinnedBottomRows" theme="material" resize="true" range="true" rowClass="highlighted" />
    </div>
</template>

<script>
import { generateFakeDataDemo } from '../fakeData/dataGenerate';
import { rowsData } from '../dataService';


export default {
    name: 'demo-initial',
    data() {
        return {
            vGrid: null,
            columnTypes: {},
            source: [],
            pinnedBottomRows: [],
            columns: [],
            pinnedTopRows: []
        };
    },
    mounted() {
        import('../fakeData/peopleSample.js').then((e) => {
            const people = e.default;
            const newData = generateFakeDataDemo(people, 100);
            for (let key in newData) {
                this[key] = newData[key];
            }

            this.source = rowsData;
        });
        import('@revolist/vue3-datagrid').then((m) => {
            const types = {};
            Promise.all([
                import('@revolist/revogrid-column-select').then((p) => (types['select'] = new p.default())),
                import('@revolist/revogrid-column-date').then((p) => (types['date'] = new p.default())),
                import('@revolist/revogrid-column-numeral').then((p) => (types['number'] = new p.default('0,0'))),
            ]).then(() => {
                this.columnTypes = types;
                this.vGrid = m.VGrid;
            });
        });
    }
}
</script>
<style scoped >
.tile {
    width: 100%;
    height: 100%;
}
</style>
<style>
.bubble {
    color: rgb(235, 232, 232);
    padding: 8px;
    border-radius: 16px;
}
</style>