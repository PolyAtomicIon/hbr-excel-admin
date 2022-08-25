<template>
  <div class="left-drawer">
    <div>
      <router-link to="/" class="close-btn">X</router-link>
      <ul class="list">
        <li>
          <router-link to="/">table</router-link>
        </li>
        <li><a href="#">overview</a></li>
        <li>
          <router-link to="/images">images</router-link>
        </li>
      </ul>
    </div>
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
  data() { },
  components: {},
  mounted() { },
  methods: {},
};
</script>

<style>
.left-drawer {
  background: #54617d;
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list {
  list-style: none;
  padding: 3px;
  margin: 0;
}

.list li {
  margin: 12px auto;
  overflow: hidden;
  border-radius: 50%;
  height: 54px;
  width: 54px;
  box-sizing: border-box;
}

.list li a {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: rgb(222, 208, 208);
  text-decoration: none;

  transition: all .2s ease-in;
}

.list li a:hover {
  background: #d7dee4;
  color: rgb(73, 66, 66);
}

.list li a:active,
li a:focus {
  background: #a8bae1;
  color: #e8ecef;
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 12px auto;
  margin-top: 24px;
  overflow: hidden;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  box-sizing: border-box;
  color: rgb(222, 208, 208);
  font-weight: bold;
  text-decoration: none;
}
</style>
