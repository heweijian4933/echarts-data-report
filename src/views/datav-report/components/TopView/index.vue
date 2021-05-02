<template>
  <div class="top-view">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover">
          <top-sales></top-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <common-card></common-card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <common-card></common-card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <common-card></common-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import CommonCard from '../CommonCard'
import TopSales from './TopSales'
</script>

<style lang="scss"></style>
