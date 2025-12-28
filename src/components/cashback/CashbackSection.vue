<script setup>
import { ChevronRight, Lock } from 'lucide-vue-next'

const remainingAmount = '500,00'
const completedPercent = 0

const promoCards = [
  {
    id: 1,
    month: 'Ekim',
    year: '2025',
    amount: '₺960',
    subtitle: 'anında nakit kazan',
    brands: ['🌀', '🛒', '🚗'],
    image: '/images/promo-1.png',
  },
  {
    id: 2,
    month: 'Kasım',
    year: '2025',
    amount: '₺1.200',
    subtitle: 'süper fırsat',
    brands: ['🎮', '📱', '💳'],
    image: '/promo-2.png',
  },
]
</script>

<template>
  <div class="px-4">
    <!-- Header -->
    <button class="flex items-center gap-1 mb-4 group">
      <span class="text-xs font-medium text-text-secondary uppercase tracking-wider group-hover:text-white transition-colors">
        Cashback
      </span>
      <ChevronRight class="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
    </button>
    
    <!-- Main cashback container with border -->
    <div class="rounded-2xl border border-papara-border">
      <!-- Top section with background -->
      <div class="bg-papara-card rounded-t-2xl">
        <!-- Lock target card -->
        <div class="flex items-center gap-3 p-4">
          <!-- Square rounded lock icon -->
          <div class="w-10 h-10 rounded-lg bg-papara-bg flex items-center justify-center flex-shrink-0">
            <Lock class="w-5 h-5 text-text-muted" />
          </div>
          
          <!-- Text -->
          <div class="flex-1">
            <p class="text-sm font-medium text-white">
              ₺500 harcama hedefini tamamla,
            </p>
            <p class="text-xs text-text-muted">
              Cashback kazanmaya başla.
            </p>
          </div>
          
          <!-- Info icon -->
          <button class="w-6 h-6 rounded-full border border-papara-border flex items-center justify-center text-text-muted hover:text-white transition-colors">
            <span class="text-xs">?</span>
          </button>
        </div>
        
        <!-- Thick border separator -->
        <div class="border-t-2 border-papara-border"></div>
        
        <!-- Progress stats in top bg -->
        <div class="flex justify-between items-center p-4">
          <div class="flex items-center gap-1">
            <span class="text-lg font-bold text-white">₺{{ remainingAmount }} kaldı</span>
            <button class="w-4 h-4 rounded-full border border-text-muted flex items-center justify-center">
              <span class="text-[8px] text-text-muted">?</span>
            </button>
          </div>
          <span class="text-sm text-text-muted">%{{ completedPercent }} Tamamlandı</span>
        </div>
      </div>
      
      <!-- Ad cards section -->
      <div class="p-4">
        <!-- Horizontal scrollable promo cards -->
        <div class="overflow-x-auto scroll-hidden touch-pan-x -mx-4 px-4">
          <div class="flex gap-3 scroll-content">
            <div 
              v-for="promo in promoCards"
              :key="promo.id"
              class="w-96 h-56 rounded-2xl overflow-hidden flex-shrink-0 border-[3px] border-papara-border bg-transparent flex"
            >
              <!-- Left content -->
              <div class="flex-1 p-4 flex flex-col justify-between">
                <!-- Month/Year -->
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-papara-green flex items-center justify-center">
                    <span class="text-xs">✨</span>
                  </div>
                  <div>
                    <p class="text-white text-sm font-medium">{{ promo.month }}</p>
                    <p class="text-text-muted text-xs">{{ promo.year }}</p>
                  </div>
                </div>
                
                <!-- Amount -->
                <div>
                  <div class="bg-papara-green text-white px-3 py-1.5 rounded-lg inline-block mb-1">
                    <span class="text-xl font-bold">{{ promo.amount }}</span>
                  </div>
                  <p class="text-white text-sm font-medium">{{ promo.subtitle }}</p>
                </div>
                
                <!-- Brand icons -->
                <div class="flex gap-2">
                  <div 
                    v-for="(brand, i) in promo.brands" 
                    :key="i"
                    class="w-8 h-8 rounded-full bg-papara-card shadow-sm flex items-center justify-center"
                  >
                    <span class="text-base">{{ brand }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Right image section -->
              <div class="relative w-[45%] flex items-center justify-center py-2 pr-2">
                <!-- Lock badge on top right -->
                <div class="absolute top-0 right-0 w-10 h-10 rounded-bl-xl bg-papara-card border-l-[3px] border-b-[3px] border-papara-border flex items-center justify-center z-10">
                  <Lock class="w-4 h-4 text-text-muted" />
                </div>
                
                <!-- Promo image -->
                <img 
                  :src="promo.image" 
                  :alt="promo.month + ' ' + promo.year"
                  class="h-[85%] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-content {
  width: max-content;
}
</style>
