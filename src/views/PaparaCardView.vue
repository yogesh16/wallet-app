<script setup>
import { useRouter } from 'vue-router'
import { ChevronLeft } from 'lucide-vue-next'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header with back button -->
    <div class="p-4">
      <button 
        @click="goBack"
        class="w-10 h-10 flex items-center justify-center text-white"
      >
        <ChevronLeft class="w-6 h-6" />
      </button>
    </div>
    
    <!-- Content -->
    <div class="flex-1 flex flex-col px-6">
      <!-- Title -->
      <h1 class="text-2xl font-bold text-white text-center mb-4">
        Akbank ATM'leri tamamen ücretsiz.
      </h1>
      
      <!-- Subtitle -->
      <p class="text-text-secondary text-center text-sm mb-12">
        Papara Card ile tüm ATM'lerden para çekebilir,<br>
        Akbank ATM'lerinde tamamen ücretsiz para<br>
        yatırabilir ve çekebilirsin.
      </p>
      
      <!-- Stacked Cards Display -->
      <div class="relative flex justify-center items-center h-80 mb-auto">
        <!-- Gray Card (Left) -->
        <div 
          class="absolute w-44 h-64 rounded-2xl shadow-2xl transform -rotate-12 -translate-x-20 card-gray"
        >
          <div class="p-4 h-full flex flex-col justify-between">
            <div class="text-white/80 font-bold text-xl tracking-wider">papara</div>
            <div class="text-white/60 text-xs uppercase tracking-wider">GRAY</div>
          </div>
        </div>
        
        <!-- Black Card (Center) -->
        <div 
          class="absolute w-48 h-72 rounded-2xl shadow-2xl z-10 card-black"
        >
          <div class="p-5 h-full flex flex-col justify-between">
            <div class="flex items-center gap-2">
              <div class="w-8 h-6 bg-amber-400/80 rounded"></div>
              <div class="text-white/60">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="currentColor">
                  <path d="M10 0c1.5 0 3 .5 4 1.5C15 .5 16.5 0 18 0v16c-1.5 0-3-.5-4-1.5-1 1-2.5 1.5-4 1.5s-3-.5-4-1.5C5 15.5 3.5 16 2 16V0c1.5 0 3 .5 4 1.5C7 .5 8.5 0 10 0z"/>
                </svg>
              </div>
            </div>
            <div>
              <div class="text-white/70 font-semibold text-xl tracking-wider mb-2">papara</div>
              <div class="flex items-end justify-between">
                <div class="text-white/50 text-xs uppercase tracking-wider">BLACK</div>
                <div class="flex gap-1">
                  <div class="w-6 h-6 rounded-full bg-red-500"></div>
                  <div class="w-6 h-6 rounded-full bg-amber-500 -ml-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- EDU Card (Right) -->
        <div 
          class="absolute w-44 h-64 rounded-2xl shadow-2xl transform rotate-12 translate-x-20 card-edu"
        >
          <div class="p-4 h-full flex flex-col justify-between">
            <div class="flex justify-end">
              <div class="text-white/70">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                  <path d="M8 0c1.2 0 2.4.4 3.2 1.2.8-.8 2-1.2 3.2-1.2v12c-1.2 0-2.4-.4-3.2-1.2-.8.8-2 1.2-3.2 1.2s-2.4-.4-3.2-1.2C4 11.6 2.8 12 1.6 12V0c1.2 0 2.4.4 3.2 1.2C5.6.4 6.8 0 8 0z"/>
                </svg>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="bg-white/20 px-2 py-1 rounded text-white text-xs font-semibold">EDU</div>
              <div class="flex gap-1">
                <div class="w-5 h-5 rounded-full bg-red-500"></div>
                <div class="w-5 h-5 rounded-full bg-amber-500 -ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Buttons -->
    <div class="p-6 space-y-3">
      <button class="w-full py-4 bg-papara-card hover:bg-papara-card-hover rounded-full text-white font-medium transition-colors">
        ATM Bul
      </button>
      <button class="w-full py-4 bg-transparent border border-papara-border hover:bg-papara-card rounded-full text-white font-medium transition-colors">
        Papara Card İste
      </button>
    </div>
  </div>
</template>

<style scoped>

.card-gray {
  background: linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%);
}

.card-black {
  background: linear-gradient(135deg, #374151 0%, #1F2937 100%);
}

.card-edu {
  background: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
}
</style>
