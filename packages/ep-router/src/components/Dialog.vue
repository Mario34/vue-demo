<template>
  <div class="dialog" v-if="modelValue">
    <div class="header">
      <button @click="emits('update:model-value', false)">Close</button>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: Boolean,
})
const emits = defineEmits<{
  (e: 'update:model-value', v: boolean): void
}>()
</script>

<style scoped>
.dialog {
  position: fixed;
  width: 500px;
  top: 100px;
  left: 100px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  padding: 10px;
}

.header {
  padding: 10px;
}

.content {
  padding: 10px;
  height: 500px;
  overflow-y: scroll;
}
</style>