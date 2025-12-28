<script setup>
import { Pin } from 'lucide-vue-next'

const shortcuts = [
  { 
    id: 1, 
    label: 'Papara Sticker Card', 
    icon: '🦋',
    hasPinned: true
  },
  { 
    id: 2, 
    label: 'Papara Superman Card', 
    icon: '🦸',
    hasPinned: true
  },
  { 
    id: 3, 
    label: 'e-Şans 150 TL Hediye', 
    icon: '🎰',
    hasPinned: false
  },
  { 
    id: 4, 
    label: 'Yatırım Hesabı', 
    icon: '📈',
    hasPinned: false
  },
  { 
    id: 5, 
    label: 'Altın Hediye', 
    icon: '🏆',
    hasPinned: false
  },
  { 
    id: 6, 
    label: 'Harcama Özeti', 
    icon: '📊',
    hasPinned: false
  },
]

</script>

<template>
  <div class="overflow-x-auto scroll-hidden touch-pan-x">
    <div class="flex gap-4 px-4 py-2 scroll-content">
      <button 
        v-for="shortcut in shortcuts" 
        :key="shortcut.id"
        class="flex flex-col items-center gap-2 min-w-[60px]"
      >
        <!-- White round border container with centered icon -->
        <div class="relative">
          <div class="w-14 h-14 rounded-full border-[3px] border-white flex items-center justify-center bg-transparent">
            <span class="text-2xl">{{ shortcut.icon }}</span>
          </div>
          
          <!-- Pin icon for first 2 items - top right -->
          <div 
            v-if="shortcut.hasPinned"
            class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center"
          >
            <span class="text-[10px]"><Pin class="w-3 h-3 text-black rotate-[25deg]" fill="black" /></span>
          </div>
        </div>
        
        <span class="text-[10px] text-text-secondary text-center leading-tight max-w-[60px]">
          {{ shortcut.label }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.scroll-content {
  width: max-content;
}
</style>
