<template>
  <div>
    <div>
      
    </div>
    <CustomBarChart :title="'7日单量'" :x="echartData.x" :y="echartData.y"></CustomBarChart>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { BarChartDto } from '@/dto/EchartDto'
import CustomBarChart from '@/components/custom-bar-chart.vue';

const echartData = ref<BarChartDto>({
  title: '',
  x: [],
  y: []
});

onMounted(() => {
  echartData.value.x = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  echartData.value.y = [5,6,7,5,8,9,4];
})

</script>

<style scoped></style>
