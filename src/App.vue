<template>
  <div class="wrapper">
    <left-drawer></left-drawer>

    <main class="main-content">
      <header class="header"></header>
      <section class="table">
        <router-view></router-view>
        <!-- <table-view></table-view> -->
      </section>
    </main>
  </div>
</template>

<script>
import LeftDrawer from "./components/LeftDrawer.vue";

export default {
  name: "App",
  data() {},
  components: {
    LeftDrawer,
  },
  mounted() {},
  methods: {},
};
</script>

<style>

html { 
  --header-height: 48px;
}

body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}

.wrapper {
  height: 100%;
  padding: 0;
  display: flex;

  /* background: blue; */
}

.left-drawer {
  background: #0000ff;
  width: 48px;
  height: 100%;

}

.main-content {
  background: pink;
  height: 100%;
  width: 100%;
}

.header {
  background: green;
  height: var(--header-height);
  width: 100%;
}

.table {
  height: calc(100% - var(--header-height));
  width: 100%;
}
</style>
