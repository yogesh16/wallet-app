<script setup>
import { Send, ArrowLeftRight, Globe, ShieldCheck, CalendarSync } from 'lucide-vue-next'

const transferActions = [
  {
    id: 1,
    title: 'Para Gönder',
    iconName: 'send',
  },
  {
    id: 2,
    title: 'Para İste',
    iconName: 'arrowLeftRight',
  },
  {
    id: 3,
    title: 'Yurt Dışı Para Transferi',
    iconName: 'globe',
  },
  {
    id: 4,
    title: 'Güvenli Ödeme İşlemi',
    iconName: 'shieldCheck',
  },
  {
    id: 5,
    title: 'Düzenli Transfer',
    iconName: 'calendarSync',
  },
]
</script>

<template>
  <div class="py-2">
    <!-- Actions list -->
    <div class="space-y-0">
      <button 
        v-for="action in transferActions"
        :key="action.id"
        class="w-full flex items-center gap-4 px-4 py-4 hover:bg-white/5 transition-colors text-left"
      >
        <Send v-if="action.iconName === 'send'" class="w-6 h-6 text-white flex-shrink-0" />
        <ArrowLeftRight v-else-if="action.iconName === 'arrowLeftRight'" class="w-6 h-6 text-white flex-shrink-0" />
        <Globe v-else-if="action.iconName === 'globe'" class="w-6 h-6 text-white flex-shrink-0" />
        <ShieldCheck v-else-if="action.iconName === 'shieldCheck'" class="w-6 h-6 text-white flex-shrink-0" />
        <CalendarSync v-else class="w-6 h-6 text-white flex-shrink-0" />
        <span class="text-base text-white">{{ action.title }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
