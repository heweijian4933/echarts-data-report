<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <div class="value">$ {{ value }}</div>
    <div class="chart">
      <slot name="chart">表单加载中...</slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="total">金额计算中...</slot>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'
const props = defineProps({
  title: { type: String, default: '销售' },
  value: { type: String, default: '32,039.00' }
})
</script>

<style lang="scss">
.common-card {
  .title {
    font-size: 15px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart {
    height: 50px;
  }
  .line {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total {
    color: #666;
    font-size: 12px;
  }
}
</style>
