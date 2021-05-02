<template>
  <common-card v-bind="chartData" class="common-card">
    <template #chart>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比: </span>
          <span class="font-bold">7.33%</span>
          <div class="flex justify-center items-center">
            <svg-icon icon="arrow-up" />
          </div>
        </div>
        <div class="compare">
          <span>月同比: </span>
          <span class="font-bold">6.33%</span>
          <div class="flex justify-center items-center">
            <svg-icon icon="arrow-down" />
          </div>
        </div>
      </div>
    </template>
    <template #total>
      <div class="amount">
        <span> 昨日销售总额: </span>
        <span class="font-bold">$ 3,000,000.00</span>
      </div>
    </template>
  </common-card>
</template>

<script setup>
import CommonCard from '../CommonCard'
import { reactive, ref } from 'vue'

const chartData = reactive({
  title: '标题',
  value: '32,039.00'
})
</script>

<style lang="scss">
.common-card {
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .compare {
      display: flex;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
  .amount {
    // font-size: 15px;
  }
}
</style>
