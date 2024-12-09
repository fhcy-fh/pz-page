<template>
  <div>
    <bizTurnover></bizTurnover>
    <bizCount></bizCount>
    <bizSnacksTurnover></bizSnacksTurnover>
    <div style="margin-top: 10vw;">
      <customBarChart :title="'7日单量'" :x="echartData.x" :y="echartData.y"></customBarChart>
    </div>
  </div>
</template>

<script setup lang="ts">
import customBarChart from '@/components/custom/custom-bar-chart.vue';
import bizTurnover from '@/components/biz/biz-turnover.vue';
import bizCount from '@/components/biz/biz-count.vue';
import bizSnacksTurnover from '@/components/biz/biz-snacks-turnover.vue';
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
