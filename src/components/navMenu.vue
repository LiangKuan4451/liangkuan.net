<template>
  <div class="menu">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/">
        <el-icon><home-filled /></el-icon>
        <span>主页</span>
      </el-menu-item>
      <el-menu-item index="about">
        <el-icon><document /></el-icon>
        <span>游戏</span>
      </el-menu-item>
      <el-menu-item index="game">
        <el-icon><setting /></el-icon>
        <span>表格</span>
      </el-menu-item>
      <el-menu-item index="about">
        <el-icon><pie-chart /></el-icon>
        <span>数据图</span>
      </el-menu-item>
      <el-menu-item index="about">
        <el-icon><document /></el-icon>
        <span>关于</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup></script>
<script>
export default {
  name: "navMenu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style></style>
