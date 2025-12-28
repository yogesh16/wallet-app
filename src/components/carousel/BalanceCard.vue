<script setup>
import { ref } from 'vue'
import { Eye, EyeOff, Copy, Download, Send } from 'lucide-vue-next'

const props = defineProps({
  card: {
    type: Object,
    required: true,
  }
})

const showBalance = ref(true)

const toggleBalance = () => {
  showBalance.value = !showBalance.value
}

const formatBalance = (balance, currency) => {
  if (!showBalance.value) {
    return '••••••'
  }
  return `${currency}${balance}`
}
</script>

<template>
  <div class="card bg-gradient-to-br from-papara-card to-[#252525] border border-papara-border">
    <!-- Header: Title with flag -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <span class="text-xl">{{ card.flag }}</span>
        <span class="text-sm font-medium text-text-secondary">{{ card.title }}</span>
      </div>
    </div>
    
    <!-- Balance display -->
    <div class="flex items-center gap-3 mb-4">
      <span class="text-3xl font-bold tracking-tight">
        {{ formatBalance(card.balance, card.currency) }}
      </span>
      <button 
        @click="toggleBalance"
        class="text-text-secondary hover:text-white transition-colors"
      >
        <Eye v-if="showBalance" class="w-5 h-5" />
        <EyeOff v-else class="w-5 h-5" />
      </button>
    </div>
    
    <!-- IBAN info (only for TL account) -->
    <div v-if="card.showIban" class="mb-4">
      <div class="flex items-center gap-2">
        <span class="text-xs text-text-muted">IBAN</span>
        <span class="text-xs text-text-secondary">{{ card.iban }}</span>
        <button class="text-text-secondary hover:text-white transition-colors">
          <Copy class="w-4 h-4" />
        </button>
      </div>
    </div>
    
    <!-- Action buttons -->
    <div class="flex gap-3 mt-auto">
      <button class="flex-1 btn-primary flex items-center justify-center gap-2">
        <Download class="w-5 h-5" />
        <span class="text-sm">Yatır / Çek</span>
      </button>
      <button class="flex-1 btn-secondary flex items-center justify-center gap-2">
        <Send class="w-5 h-5" />
        <span class="text-sm">Gönder</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
