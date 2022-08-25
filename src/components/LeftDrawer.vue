<template>
  <div class="left-drawer">
    <ul class="list">
      <li>
        <router-link to="/">table</router-link>
      </li>
      <li><a href="#">overview</a></li>
      <li>
        <router-link to="/images">images</router-link>
      </li>
    </ul>
    <ul class="list">
      <li><a href="#">back</a></li>
      <li><a href="#">forward</a></li>
      <li><a href="#">up</a></li>
      <li><a href="#">down</a></li>
      <li><a href="#">delete</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftDrawer",
  data() {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.left-drawer {
  background: lightgrey;
  width: 80px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list {
  list-style: none;
  padding: 3px;
  margin: 0;
  li {
    margin: 12px auto;
    overflow: hidden;
    border-radius: 12px;
    height: 40px;
    border: 2px solid transparent;
    box-sizing: border-box;

    &:active {
      border-color: black;
    }

    a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      color: black;
      text-decoration: none;

      &:hover {
        background: grey;
      }
    }
  }
}
</style>
