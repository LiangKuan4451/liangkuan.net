<template>
  <div class="home">
    <img class="" alt="Vue logo" src="../assets/logo.png" />
    <WDJS></WDJS>
    <a href="sdsd">sdsd</a>
    <p>sdsdsdsd</p>
  </div>
</template>
<style></style>
<script>
import WDJS from "../components/table.vue";
// import axios from "axios";
export default {
  data() {
    return {
      tabledb: [{}],
    };
  },
  name: "HomeView",
  components: {
    WDJS,
  },
  created() {},
  methods: {},
};
</script>
