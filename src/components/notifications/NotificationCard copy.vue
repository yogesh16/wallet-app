<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const notifications = [
  {
    id: 1,
    time: 'Bugün 06:00',
    title: 'Aylık hesap özetin oluşturuldu.',
    description: 'Eylül ayında neler yaptığını görmek için tıkla',
    icon: '📊',
    iconBg: 'bg-orange-500',
  },
  {
    id: 2,
    time: 'Dün 14:30',
    title: 'Yeni kampanya başladı!',
    description: 'Alışverişlerinde %10 cashback kazan',
    icon: '🎉',
    iconBg: 'bg-purple-500',
  },
  {
    id: 3,
    time: '2 gün önce',
    title: 'Güvenlik bildirimi',
    description: 'Hesabına yeni bir cihazdan giriş yapıldı',
    icon: '🔒',
    iconBg: 'bg-blue-500',
  },
  {
    id: 4,
    time: '3 gün önce',
    title: 'Para transferi başarılı',
    description: 'Ali Yılmaz hesabına ₺250 gönderildi',
    icon: '✓',
    iconBg: 'bg-green-500',
  },
  {
    id: 5,
    time: '4 gün önce',
    title: 'Yeni özellik!',
    description: 'Altın al-sat özelliği artık kullanımda',
    icon: '⭐',
    iconBg: 'bg-amber-500',
  },
]

const remainingCount = notifications.length - 1

// Swipe to dismiss
const dismissCurrentNotification = () => {
  if (currentIndex.value < notifications.length - 1) {
    currentIndex.value++
  }
}

const currentNotification = () => notifications[currentIndex.value]
</script>

<template>
  <div class="relative">
    <!-- Stacked cards behind (peeking from bottom) -->
    <div 
      v-if="currentIndex < notifications.length - 2"
      class="absolute inset-x-4 bottom-0 translate-y-3 h-6 rounded-xl bg-papara-card border border-papara-border/40 -z-20"
    ></div>
    <div 
      v-if="currentIndex < notifications.length - 1"
      class="absolute inset-x-2 bottom-0 translate-y-1.5 h-5 rounded-xl bg-papara-card border border-papara-border/60 -z-10"
    ></div>
    
    <!-- Main notification card -->
    <div 
      class="relative rounded-xl border border-papara-border bg-papara-bg p-4 cursor-pointer z-10"
      @click="dismissCurrentNotification"
    >
      <!-- Notification count badge -->
      <div 
        v-if="notifications.length - currentIndex > 1"
        class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-papara-red text-white text-[10px] font-bold flex items-center justify-center shadow-md"
      >
        {{ notifications.length - currentIndex }}
      </div>
      
      <div class="flex items-start gap-3">
        <!-- Icon circle -->
        <div 
          class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          :class="currentNotification().iconBg"
        >
          <span class="text-lg text-white">{{ currentNotification().icon }}</span>
        </div>
        
        <!-- Notification content -->
        <div class="flex-1 min-w-0">
          <p class="text-[10px] text-text-muted mb-0.5">
            {{ currentNotification().time }}
          </p>
          <p class="text-sm font-semibold text-white">
            {{ currentNotification().title }}
          </p>
          <p class="text-xs text-text-muted mt-0.5">
            {{ currentNotification().description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
