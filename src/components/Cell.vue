<template>
    <span>{{ rowIndex }}</span>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    props: ['rowIndex']
});
</script>