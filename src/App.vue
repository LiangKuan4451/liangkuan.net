<template>
  <el-container>
    <el-aside width="250px"><navMenu></navMenu></el-aside>
    <el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import navMenu from "./components/navMenu.vue";
export default {
  components: { navMenu },
};
</script>
