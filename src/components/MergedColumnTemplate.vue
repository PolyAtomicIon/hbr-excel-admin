<template>
  <p>
    <span style="color: red">
      {{ data[rowIndex]["name"] }}
    </span>
    <br />
    <span style="color: blue">
      {{ data[rowIndex]["details"] }}
    </span>
  </p>
</template>

<script>
export default {
  // access any cell properties here
  props: ["rowIndex", "prop", "data"],
  name: "MergedColumnnTemplate",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
