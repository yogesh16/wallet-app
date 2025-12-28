<script setup>
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'

// Provide global state for bottom sheets
const activeSheet = ref(null)
provide('activeSheet', activeSheet)

const openSheet = (sheetName) => {
  activeSheet.value = sheetName
}
provide('openSheet', openSheet)

const closeSheet = () => {
  activeSheet.value = null
}
provide('closeSheet', closeSheet)
</script>

<template>
  <div class="min-h-screen text-text-primary">
    <!-- Mobile container with max width for larger screens -->
    <div class="mx-auto max-w-md min-h-screen relative">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
/* Ensure the app takes full viewport on mobile */
</style>
