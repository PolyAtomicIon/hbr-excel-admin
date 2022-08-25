<template>
  <div class="toolbar">
    <ul>
      <li>
        <router-link to="/">
          public
        </router-link>
      </li>
      <li>
        <router-link to="/">
          unpublic
        </router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link to="/">
          clothes
        </router-link>
      </li>
      <li>
        <router-link to="/">
          toys
        </router-link>
      </li>
      <li>
        <router-link to="/">
          bags
        </router-link>
      </li>
    </ul>

    <button>
      publish
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Toolbar",
  data() {
    return {

    }
  },
  components: {},
  methods: {},
});
</script>

<style scoped>
.toolbar {
  height: var(--header-height);

  padding: 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(79, 78, 78, 0.4);
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul>li {
  display: inline-block;
  margin-left: 24px;
}

ul li a {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: rgb(49, 44, 44);

  transition: all .2s ease-in;
}

ul li a:hover {
  color: rgb(113, 89, 89);
}

ul li a:active,
li a:focus {
  color: rgb(29, 29, 180);
}


button {
  border: none;
  margin: 0;
  padding: 8px 16px;
  width: auto;
  overflow: visible;
  font-size: 16px;
  border-radius: 15px;
  color: #fff;
  background: rgb(54, 54, 215);
  cursor: pointer;
}


button:hover {
  color: #fff;
  background: rgb(41, 41, 175);
}


button:active, button:focus {
  color: #fff;
  background: rgb(61, 61, 177);
}

</style>
