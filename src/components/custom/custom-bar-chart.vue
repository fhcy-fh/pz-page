<template>
  <div ref="chart" style="width: 100%; height: 270px"></div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import * as echarts from 'echarts';

interface Props {
  title: string;
  x: string[];
  y: number[];
}
const props = defineProps<Props>();

const chart = ref(null);

watch(
  () => props.y,
  (newValue: any) => {
    init(props.title, props.x, newValue);
  },
  { deep: true }
);

const init = (title: string, xData: string[], yData: number[]) => {
  let myChart = echarts.init(chart.value);
  const option = ref({
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: '#333',        // 标题颜色
        fontSize: 15,         // 标题字体大小
        fontFamily: 'Arial',  // 标题字体族
        fontWeight: 'bold',   // 标题字体粗细
        lineHeight: 30,       // 行高
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '单量',
        type: 'bar',
        barWidth: '50%',
        data: yData
      }
    ]
  });
  myChart.setOption(option.value);
};
</script>
<style scoped lang="scss"></style>
