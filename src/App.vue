<template>
  <div class="wrapper">
    <left-drawer></left-drawer>

    <main class="main-content">
      <Toolbar> </Toolbar>
      <section class="table">
        <router-view></router-view>
        <!-- <table-view></table-view> -->
      </section>
    </main>
  </div>
</template>

<script>
import LeftDrawer from "./components/LeftDrawer.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "App",
  data() {
    return {

    }
  },
  components: {
    LeftDrawer,
    Toolbar
  },
  mounted() { },
  methods: {},
};
</script>

<style>
html {
  --header-height: 48px;

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
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

.main-content {
  height: 100%;
  width: 100%;
} 

.table {
  height: calc(100% - var(--header-height));
  width: 100%;
}
</style>
