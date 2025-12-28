<script setup>
import { ref, inject } from 'vue'
import { Home, QrCode, Send, FileText, CreditCard } from 'lucide-vue-next'

const openSheet = inject('openSheet')
const activeTab = ref('home')

const navItems = [
  { id: 'home', label: 'Ana Sayfa', icon: Home, action: null },
  { id: 'qr', label: 'QR İşlemleri', icon: QrCode, action: 'qr' },
  { id: 'transfer', label: 'Para Transferi', icon: Send, action: 'transfer' },
  { id: 'payments', label: 'Ödemeler', icon: FileText, action: 'payments' },
  { id: 'card', label: 'Papara Card', icon: CreditCard, action: 'card' },
]

const handleNavClick = (item) => {
  if (item.action) {
    openSheet(item.action)
  } else {
    activeTab.value = item.id
  }
}
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 nav-bg border-t border-papara-border safe-bottom z-30">
    <div class="mx-auto max-w-md">
      <div class="flex items-stretch justify-around py-1">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="handleNavClick(item)"
          class="nav-item flex-1"
          :class="{ 'active': activeTab === item.id && !item.action }"
        >
          <component 
            :is="item.icon" 
            class="w-6 h-6"
            :class="activeTab === item.id && !item.action ? 'text-papara-green' : 'text-text-muted'"
          />
          <span class="text-[10px] font-medium">{{ item.label }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .nav-bg {
    background:  #111117;
  }
</style>
