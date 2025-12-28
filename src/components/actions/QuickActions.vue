<script setup>
import { useRouter } from 'vue-router'
import { ChevronRight, Upload, CreditCard, User } from 'lucide-vue-next'

const router = useRouter()

const actions = [
  {
    id: 1,
    title: 'Hesabına',
    subtitle: 'Para Yatır',
    iconName: 'upload',
    route: null,
  },
  {
    id: 2,
    title: 'Papara Card',
    subtitle: 'İste',
    iconName: 'creditCard',
    route: '/card',
  },
  {
    id: 3,
    title: 'Harcama',
    subtitle: 'Özeti',
    iconName: 'user',
    route: '/analytics',
  },
]

const handleClick = (action) => {
  if (action.route) {
    router.push(action.route)
  }
}
</script>

<template>
  <div class="px-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-1">
        <span class="text-xs font-medium text-text-secondary uppercase tracking-wider">
          Daha İyi Bir Papara Deneyimi
        </span>
        <ChevronRight class="w-4 h-4 text-text-muted" />
      </div>
      <span class="text-xs text-papara-green font-medium">2 / 5</span>
    </div>
    
    <!-- Horizontally scrollable action cards -->
    <div class="overflow-x-auto scroll-hidden touch-pan-x -mx-4 px-4">
      <div class="flex gap-3 scroll-content">
        <button 
          v-for="action in actions"
          :key="action.id"
          class="flex items-center gap-3 px-4 py-3 rounded-xl border border-papara-border bg-transparent hover:bg-papara-card transition-colors flex-shrink-0"
          @click="handleClick(action)"
        >
          <!-- Icon circle - cream/light background, smaller icon centered -->
          <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
            <Upload v-if="action.iconName === 'upload'" class="w-4 h-4 text-gray-800" />
            <CreditCard v-else-if="action.iconName === 'creditCard'" class="w-4 h-4 text-gray-800" />
            <User v-else class="w-4 h-4 text-gray-800" />
          </div>
          
          <!-- Title - two lines -->
          <div class="text-left">
            <p class="text-sm font-medium text-white leading-tight">
              {{ action.title }}
            </p>
            <p class="text-sm font-medium text-white leading-tight">
              {{ action.subtitle }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-content {
  width: max-content;
}
</style>
