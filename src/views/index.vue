<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-text class="mx-1" size="large" style="color: #ffffff">发财麻将</el-text>
      </el-header>
      <el-main class="main">
        <mahjong></mahjong>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mahjong from '@/views/mahjong/index.vue'
</script>

<style scoped>
.header {
  padding: 0;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  background-color: #011f3c;
}
.main {
}
</style>
