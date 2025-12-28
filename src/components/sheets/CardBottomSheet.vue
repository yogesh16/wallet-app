<script setup>
import { CreditCard, Eye, Snowflake, Lock, Settings } from 'lucide-vue-next'

const cardActions = [
  {
    id: 1,
    title: 'Kart Bilgilerini Gör',
    iconName: 'eye',
  },
  {
    id: 2,
    title: 'Kartı Dondur',
    iconName: 'snowflake',
  },
  {
    id: 3,
    title: 'PIN Değiştir',
    iconName: 'lock',
  },
  {
    id: 4,
    title: 'Kart Ayarları',
    iconName: 'settings',
  },
]
</script>

<template>
  <div class="py-2">
    <!-- Actions list -->
    <div class="space-y-0">
      <button 
        v-for="action in cardActions"
        :key="action.id"
        class="w-full flex items-center gap-4 px-4 py-4 hover:bg-white/5 transition-colors text-left"
      >
        <Eye v-if="action.iconName === 'eye'" class="w-6 h-6 text-white flex-shrink-0" />
        <Snowflake v-else-if="action.iconName === 'snowflake'" class="w-6 h-6 text-white flex-shrink-0" />
        <Lock v-else-if="action.iconName === 'lock'" class="w-6 h-6 text-white flex-shrink-0" />
        <Settings v-else class="w-6 h-6 text-white flex-shrink-0" />
        <span class="text-base text-white">{{ action.title }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
