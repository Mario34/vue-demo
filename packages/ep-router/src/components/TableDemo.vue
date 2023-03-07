<template>
  <table style="width:100%">
    <tr>
      <th>Date</th>
      <th>Name</th>
      <th>Address</th>
    </tr>
    <tr v-for="item in data">
      <td>{{ item.date  }}</td>
      <td>{{ item.name  }}</td>
      <td>{{ item.address  }}</td>
    </tr>
  </table>
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