<script setup>
import { Menu, ScanLine, User } from 'lucide-vue-next'

const paparaNumber = '1234567890'

const copyNumber = () => {
  navigator.clipboard.writeText(paparaNumber)
  // Could add a toast notification here
}
</script>

<template>
  <header class="flex items-center justify-between px-4 py-3 pt-6 safe-top">
    <!-- Left side: Menu and QR with square rounded bg -->
    <div class="flex items-center gap-2">
      <!-- Menu button with notification badge -->
      <button class="w-10 h-10 rounded-lg bg-papara-card flex items-center justify-center relative">
        <Menu class="w-5 h-5 text-white" />
        <!-- Notification badge -->
        <span class="absolute -top-1 -right-1 w-4 h-4 bg-papara-red rounded-full border-2 border-papara-bg text-[8px] text-white font-bold flex items-center justify-center">7</span>
      </button>
      
      <!-- QR scan button -->
      <button class="w-10 h-10 rounded-lg bg-papara-card flex items-center justify-center">
        <ScanLine class="w-5 h-5 text-white" />
      </button>
    </div>
    
    <!-- Right side: Papara number and Profile avatar -->
    <div class="flex items-center gap-2">
      <button 
        @click="copyNumber"
        class="flex items-center gap-1 text-text-secondary hover:text-white transition-colors"
      >
        <span class="text-sm">Papara No:</span>
        <span class="text-sm">{{ paparaNumber.slice(0, 3) }}...</span>
      </button>
      
      <!-- User icon with square rounded bg -->
      <button class="w-10 h-10 rounded-lg bg-papara-card flex items-center justify-center">
        <User class="w-5 h-5 text-white" />
      </button>
    </div>
  </header>
</template>

<style scoped>
</style>
