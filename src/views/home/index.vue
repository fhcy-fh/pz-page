<template>
  <div>

    <div style="margin: 2vw;">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>总营业额</el-text>
              <el-text type="danger" size="large" tag="b">1021</el-text>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>本月营业额</el-text>
              <el-text type="danger" size="large" tag="b">299</el-text>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>今日营业额</el-text>
              <el-text type="danger" size="large" tag="b">9</el-text>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>


    <div style="margin: 2vw;">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>总单量</el-text>
              <el-text type="primary" size="large" tag="b">1021</el-text>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>本月</el-text>
              <el-text type="primary" size="large" tag="b">299</el-text>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="card-container">
            <div class="content">
              <el-text>今日</el-text>
              <el-text type="primary" size="large" tag="b">9</el-text>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 10vw;">
      <CustomBarChart :title="'7日单量'" :x="echartData.x" :y="echartData.y"></CustomBarChart>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomBarChart from '@/components/custom-bar-chart.vue';
import type { BarChartDto } from '@/dto/EchartDto';
import { onMounted, ref } from 'vue';

const echartData = ref<BarChartDto>({
  title: '',
  x: [],
  y: []
});

onMounted(() => {
  echartData.value.x = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  echartData.value.y = [5, 6, 7, 5, 8, 9, 4];
})

</script>

<style scoped>
.card-container {
  display: flex;
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
  text-align: center;
  /* 文本居中 */
}

.content {
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  /* 两个文本之间的间距 */
}
</style>
