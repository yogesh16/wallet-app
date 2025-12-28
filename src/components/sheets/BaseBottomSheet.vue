<script setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])

// Close on escape key
const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  // Prevent body scroll when sheet is open
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

const handleBackdropClick = () => {
  emit('close')
}
</script>

<template>
  <!-- Backdrop -->
  <div 
    class="sheet-backdrop"
    @click="handleBackdropClick"
  ></div>
  
  <!-- Sheet container -->
  <div class="sheet-container" @click.stop>
    <!-- Handle -->
    <div class="sheet-handle"></div>
    
    <!-- Content -->
    <div class="pb-4">
      <slot></slot>
      
      <!-- Cancel button -->
      <div class="px-4 mt-4">
        <button 
          @click="emit('close')"
          class="w-full py-4 bg-white text-papara-bg font-semibold rounded-2xl text-center"
        >
          Vazgeç
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
