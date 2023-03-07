<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="date1" label="Date" />
    <el-table-column prop="name1" label="Name" />
    <el-table-column prop="address1" label="Address" />
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
    date1: '2016-05-03',
    name1: 'Tom',
    address1: 'No. 189, Grove St, Los Angeles',
  }))
})
</script>