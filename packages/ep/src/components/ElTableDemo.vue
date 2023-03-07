<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  num: {
    type: Number,
    default: 1000,
  },
})
const data = computed(() => {
  return Array.from({ length: props.num }).fill('').map((_, index) => ({
    id: index,
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }))
})
</script>