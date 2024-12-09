<template>
    <div style="margin: 2vw;">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>零食总营</el-text>
              <el-text type="danger" size="large" tag="b">1021</el-text>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>零食本月</el-text>
              <el-text type="danger" size="large" tag="b">299</el-text>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>零食今日</el-text>
              <el-text type="danger" size="large" tag="b">9</el-text>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.card-container {
  display: flex;
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  text-align: center;
}

.content {
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  /* 两个文本之间的间距 */
}
</style>