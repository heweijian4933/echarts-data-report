<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { isExternal as external } from '@/utils/common.js'
import { defineProps, computed } from 'vue'
const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  },
  width: {
    // <style> 动态变量注入
    type: String,
    default: '1em'
  },
  height: {
    // <style> 动态变量注入
    type: String,
    default: '1em'
  },
  color: {
    // <style> 动态变量注入
    type: String,
    default: '#000000'
  }
})

/**
 * 判断是否为外部图标
 */
const isExternal = computed(() => external(props.icon))
/**
 * 外部图标样式, 形式为 svg 链接
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
/**
 * 项目内图标,存放于 @/icons 文件夹
 */
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style scoped>
.svg-icon {
  width: v-bind(width);
  height: v-bind(height);
  vertical-align: -0.15em;
  fill: v-bind(color);
  overflow: hidden;
}

.svg-external-icon {
  background-color: v-bind(color);
  mask-size: cover !important;
  display: inline-block;
}
</style>
