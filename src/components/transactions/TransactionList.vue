<script setup>
import TransactionItem from './TransactionItem.vue'
import { ChevronRight } from 'lucide-vue-next'

const transactions = [
  {
    id: 1,
    name: 'Netflix',
    type: 'Abonelik Ödemesi',
    date: '26 Ara',
    amount: '-99,99',
    currency: '₺',
    isNegative: true,
    avatar: null,
    avatarBg: 'bg-red-600',
    initials: 'N',
  },
  {
    id: 2,
    name: 'Spotify',
    type: 'Abonelik Ödemesi',
    date: '25 Ara',
    amount: '-59,99',
    currency: '₺',
    isNegative: true,
    avatar: null,
    avatarBg: 'bg-green-600',
    initials: 'S',
  },
  {
    id: 3,
    name: 'Ali Yılmaz',
    type: 'Para Transferi',
    date: '24 Ara',
    amount: '+250,00',
    currency: '₺',
    isNegative: false,
    avatar: null,
    avatarBg: 'bg-blue-500',
    initials: 'AY',
  },
  {
    id: 4,
    name: 'Migros',
    type: 'Market Alışverişi',
    date: '23 Ara',
    amount: '-342,50',
    currency: '₺',
    isNegative: true,
    avatar: null,
    avatarBg: 'bg-orange-500',
    initials: 'M',
  },
  {
    id: 5,
    name: 'YouTube Premium',
    type: 'Abonelik Ödemesi',
    date: '22 Ara',
    amount: '-79,99',
    currency: '₺',
    isNegative: true,
    avatar: null,
    avatarBg: 'bg-red-500',
    initials: 'YT',
  },
]
</script>

<template>
  <div class="px-4">
    <!-- Header -->
    <button class="flex items-center gap-2 mb-4 group">
      <span class="text-xs font-semibold text-text-secondary uppercase tracking-wider group-hover:text-white transition-colors">
        Hesap Hareketleri
      </span>
      <ChevronRight class="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
    </button>
    
    <!-- Transaction list -->
    <div class="space-y-1">
      <TransactionItem 
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
