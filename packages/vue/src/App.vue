<script setup lang="ts">
import { ref } from 'vue'
import Demo from './components/Demo.vue'
import Dialog from './components/Dialog.vue'
const visible = ref(false)
</script>

<template>
  <button @click="visible = !visible">switch</button>
  <Dialog v-model="visible">
    <Demo :num="10000" />
  </Dialog>
</template>


