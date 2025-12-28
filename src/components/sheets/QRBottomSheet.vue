<script setup>
import { QrCode, Banknote } from 'lucide-vue-next'

const qrActions = [
  {
    id: 1,
    title: 'QR ile Ödeme Yap',
    iconName: 'qrCode',
  },
  {
    id: 2,
    title: 'QR ile Ödeme Al',
    iconName: 'qrCode',
  },
  {
    id: 3,
    title: "QR ile ATM'den Para Çek",
    iconName: 'banknote',
  },
  {
    id: 4,
    title: "QR ile ATM'den Para Yatır",
    iconName: 'banknote',
  },
]
</script>

<template>
  <div class="py-2">
    <!-- Actions list -->
    <div class="space-y-0">
      <button 
        v-for="action in qrActions"
        :key="action.id"
        class="w-full flex items-center gap-4 px-4 py-4 hover:bg-white/5 transition-colors text-left"
      >
        <QrCode v-if="action.iconName === 'qrCode'" class="w-6 h-6 text-white flex-shrink-0" />
        <Banknote v-else class="w-6 h-6 text-white flex-shrink-0" />
        <span class="text-base text-white">{{ action.title }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
