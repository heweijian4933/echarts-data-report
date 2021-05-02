<template>
  <common-card v-bind="chartData" class="common-card">
    <template #chart>
      <div id="total-order-chart" class="chart"></div>
    </template>
    <template #total>
      <div class="order">
        <span> 昨日订单量: </span>
        <span class="font-bold">2,000.00</span>
      </div>
    </template>
  </common-card>
</template>

<script setup>
import CommonCard from '../CommonCard'
import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
const { proxy } = getCurrentInstance()
const chartData = reactive({
  title: '订单总额',
  value: '22,045.00'
})

onMounted(() => {
  console.log('onMounted=>')
  const chartElem = document.getElementById('total-order-chart')
  console.log(proxy)
  const chart = proxy.$echarts.init(chartElem, 'light', { render: 'svg' })
  const chartData = {
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: false
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: 'line',
        data: [520, 434, 233, 428, 230, 327, 500, 229, 488],
        areaStyle: {
          color: 'purple'
        },
        smooth: true,
        lineStyle: {
          width: 0
        },
        itemStyle: {
          opacity: 0
        }
      }
    ],
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
  chart.setOption(chartData)
})
</script>

<style lang="scss">
.common-card {
  .chart {
    height: 50px;
    width: 100%;
  }
  .order {
    // font-size: 15px;
  }
}
</style>
