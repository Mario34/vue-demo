<template>
  <button v-for="i in num" @click="onClick(i)">{{i}} button</button>
</template>

<script setup lang="ts">
defineProps<{
  num: Number
}>()
function onClick(i) {
  console.log(i)
}
</script>