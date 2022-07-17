<template>
  <div>
    <div v-if="type === '1'">111</div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'SsButton',
})

defineProps({
  type: {
    type: String,
    default: '0',
  },
})
</script>
