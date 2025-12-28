<script setup>
import { Receipt, Smartphone, Gamepad2, CreditCard, ShoppingCart, Bus, GraduationCap, Shield } from 'lucide-vue-next'

const paymentActions = [
  {
    id: 1,
    title: 'Fatura Öde',
    iconName: 'receipt',
  },
  {
    id: 2,
    title: 'Telefon TL Yükle',
    iconName: 'smartphone',
  },
  {
    id: 3,
    title: 'Oyun Kodu Al',
    iconName: 'gamepad',
  },
  {
    id: 4,
    title: 'Kart ile Ödeme Yap',
    iconName: 'creditCard',
  },
]
</script>

<template>
  <div class="py-2">
    <!-- Actions list -->
    <div class="space-y-0">
      <button 
        v-for="action in paymentActions"
        :key="action.id"
        class="w-full flex items-center gap-4 px-4 py-4 hover:bg-white/5 transition-colors text-left"
      >
        <Receipt v-if="action.iconName === 'receipt'" class="w-6 h-6 text-white flex-shrink-0" />
        <Smartphone v-else-if="action.iconName === 'smartphone'" class="w-6 h-6 text-white flex-shrink-0" />
        <Gamepad2 v-else-if="action.iconName === 'gamepad'" class="w-6 h-6 text-white flex-shrink-0" />
        <CreditCard v-else class="w-6 h-6 text-white flex-shrink-0" />
        <span class="text-base text-white">{{ action.title }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
