<script setup lang="ts">
import { ref } from 'vue'
import Demo from '../components/Demo.vue'
import ElTableDemo from '../components/ElTableDemo2.vue'
import TableDemo from '../components/TableDemo.vue'
import Dialog from '../components/Dialog.vue'
const visible = ref(false)
</script>

<template>
  <button @click="visible = !visible">switch</button>
  <Dialog :key="1" v-model="visible">
    <ElTableDemo />
  </Dialog>
</template>


