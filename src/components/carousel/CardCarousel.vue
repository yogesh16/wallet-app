<script setup>
import { ref, computed } from 'vue'
import { useSwipe } from '../../composables/useSwipe.js'
import { ChevronRight, Layers, TrendingUp, Flag, Layers2, Eye, EyeOff, Copy, Download, Send } from 'lucide-vue-next'

const carouselRef = ref(null)
const currentIndex = ref(0)
const showBalance = ref(true)

const toggleBalance = () => {
  showBalance.value = !showBalance.value
}

// 6 different card types - Balance card first, then feature cards
const cards = [
  {
    id: 1,
    type: 'balance',
    flag: '🇹🇷',
    title: 'Türk Lirası Hesabı',
    balance: '0,00',
    currency: '₺',
    iban: 'TR** **** **** **** **** 1234',
    showIban: true,
  },
  {
    id: 2,
    type: 'birikim',
    icon: Layers,
    iconBg: 'bg-papara-purple',
    titleLine1: 'Birikim',
    titleLine2: 'Hesabı',
    subtitle: 'Hedef belirle, birikim yap.',
    buttonText: 'Birikim Hesabı Aç',
    illustration: '🫙',
  },
  {
    id: 3,
    type: 'yatirim',
    icon: TrendingUp,
    iconBg: 'bg-papara-purple',
    titleLine1: 'Yatırım',
    titleLine2: 'Hesabı',
    subtitle: 'Hisse senedi al / sat',
    buttonText: 'Yatırım Hesabı Oluştur',
    illustration: '📡',
  },
  {
    id: 4,
    type: 'kiymetli',
    icon: Layers2,
    iconBg: 'bg-amber-500',
    titleLine1: 'Kıymetli',
    titleLine2: 'Madenler',
    subtitle: '(Altın, Gümüş, Platin)',
    buttonText: 'Kıymetli Madenler Hesabı Aç',
    illustration: '🪙',
  },
  {
    id: 5,
    type: 'dolar',
    icon: Flag,
    iconBg: 'bg-blue-600',
    titleLine1: 'Dolar',
    titleLine2: 'Hesabı',
    subtitle: 'Yatırım işlemlerin için dolar al/sat.',
    buttonText: 'Yatırım Hesabı Oluştur',
    illustration: '🐷',
  },
  {
    id: 6,
    type: 'varliklar',
    icon: Layers,
    iconBg: 'bg-papara-purple',
    title: 'Tüm Varlıklarım',
    balance: '₺0,00',
    accounts: [
      { name: 'Türk Lirası Hesabı', icon: '🇹🇷', balance: '₺0,00' },
      { name: 'Kıymetli Madenler', icon: '🥇', balance: '—' },
      { name: 'Yatırım Hesabı', icon: '📈', balance: '—' },
      { name: 'Birikim Hesabı', icon: '🪙', balance: '—' },
    ],
  },
]

// Calculate card width (80% of container) for peek effect
const cardWidth = 80
const gapPercent = 2

const goToCard = (index) => {
  currentIndex.value = index
}

const nextCard = () => {
  if (currentIndex.value < cards.length - 1) {
    currentIndex.value++
  }
}

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// Calculate transform with peek effect
const carouselTransform = computed(() => {
  // Center the current card with peek on both sides
  const offset = currentIndex.value * (cardWidth + gapPercent)
  const centerOffset = (100 - cardWidth) / 2
  return `translateX(calc(-${offset}% + ${centerOffset}%))`
})

// Set up swipe gestures
useSwipe(carouselRef, {
  threshold: 50,
  onSwipeLeft: nextCard,
  onSwipeRight: prevCard,
})
</script>

<template>
  <div class="relative">
    <!-- Carousel container -->
    <div 
      ref="carouselRef"
      class="overflow-hidden touch-pan-x"
    >
      <div 
        class="flex transition-transform duration-300 ease-out gap-[2%]"
        :style="{ transform: carouselTransform }"
      >
        <div 
          v-for="(card, index) in cards" 
          :key="card.id"
          class="flex-shrink-0 transition-opacity duration-300"
          :class="currentIndex === index ? 'opacity-100' : 'opacity-50'"
          :style="{ width: `${cardWidth}%` }"
        >
          <!-- Balance Card (TL Account) -->
          <div 
            v-if="card.type === 'balance'"
            class="bg-gradient-to-br from-papara-card to-[#252525] border border-papara-border rounded-2xl p-5 h-[220px] flex flex-col"
          >
            <!-- Header: Title with flag -->
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xl">{{ card.flag }}</span>
              <span class="text-sm font-medium text-text-secondary">{{ card.title }}</span>
            </div>
            
            <!-- Balance display -->
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl font-bold tracking-tight">
                {{ showBalance ? `${card.currency}${card.balance}` : '••••••' }}
              </span>
              <button 
                @click="toggleBalance"
                class="text-text-secondary hover:text-white transition-colors"
              >
                <Eye v-if="showBalance" class="w-5 h-5" />
                <EyeOff v-else class="w-5 h-5" />
              </button>
            </div>
            
            <!-- IBAN info -->
            <div v-if="card.showIban" class="mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs text-text-muted">IBAN</span>
                <span class="text-xs text-text-secondary">{{ card.iban }}</span>
                <button class="text-text-secondary hover:text-white transition-colors">
                  <Copy class="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <!-- Action buttons -->
            <div class="flex gap-3 mt-auto">
              <button class="flex-1 btn-primary flex items-center justify-center gap-2 py-2.5 rounded-xl">
                <Download class="w-4 h-4" />
                <span class="text-sm">Yatır / Çek</span>
              </button>
              <button class="flex-1 btn-secondary flex items-center justify-center gap-2 py-2.5 rounded-xl border border-papara-border">
                <Send class="w-4 h-4" />
                <span class="text-sm">Gönder</span>
              </button>
            </div>
          </div>
          
          <!-- Feature Card Layout (Birikim, Yatırım, Kıymetli, Dolar) -->
          <div 
            v-else-if="card.type !== 'varliklar'"
            class="bg-papara-card rounded-2xl p-5 h-[220px] flex flex-col"
          >
            <!-- Top row: Content + Illustration side by side -->
            <div class="flex flex-1">
              <!-- Left content (50%) -->
              <div class="w-1/2 flex flex-col">
                <!-- Icon/Logos -->
                <div class="mb-2">
                  <!-- Extra icons for Kıymetli Madenler -->
                  <div v-if="card.extraIcons" class="flex gap-1">
                    <div 
                      v-for="(ic, i) in card.extraIcons" 
                      :key="i"
                      class="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-xs"
                    >
                      {{ ic }}
                    </div>
                  </div>
                  
                  <!-- Top logos for Yatırım -->
                  <div v-else-if="card.topLogos" class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded bg-papara-green flex items-center justify-center">
                      <span class="text-[8px] text-white font-bold">📈</span>
                    </div>
                    <span 
                      v-for="logo in card.topLogos" 
                      :key="logo"
                      class="text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-text-secondary"
                    >
                      {{ logo }}
                    </span>
                  </div>
                  
                  <!-- Regular icon -->
                  <div 
                    v-else
                    class="w-8 h-8 rounded-full flex items-center justify-center"
                    :class="card.iconBg"
                  >
                    <span class="text-lg">
                       <component
                          :is="card.icon"
                        />
                    </span>
                  </div>
                </div>
                
                <!-- Title -->
                <h3 class="text-2xl font-bold text-white leading-tight">
                  {{ card.titleLine1 }}<br>{{ card.titleLine2 }}
                </h3>
                
                <!-- Subtitle -->
                <p class="text-xs text-text-muted mt-1">
                  {{ card.subtitle }}
                </p>
              </div>
              
              <!-- Right: Illustration (50%) -->
              <div class="w-1/2 flex items-center justify-center">
                <span class="text-6xl opacity-80">{{ card.illustration }}</span>
              </div>
            </div>
            
            <!-- Bottom row: Button full width -->
            <button class="flex items-center justify-between w-full py-3 px-4 bg-papara-bg rounded-xl mt-3">
              <span class="text-sm font-medium text-white">{{ card.buttonText }}</span>
              <ChevronRight class="w-5 h-5 text-text-muted" />
            </button>
          </div>
          
          <!-- Varlıklarım Card (card 5) -->
          <div 
            v-else
            class="bg-papara-card rounded-2xl p-5 h-[220px] flex flex-col"
          >
            <!-- Header with balance -->
            <div class="flex items-center justify-between mb-4">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <div class="w-5 h-5 rounded-full bg-papara-purple flex items-center justify-center">
                    <span class="text-[10px]">💰</span>
                  </div>
                  <span class="text-xs text-text-white">Tüm Varlıklarım</span>
                </div>
                <p class="text-3xl font-bold text-white">
                  {{ showBalance ? card.balance : '••••••' }}
                </p>
              </div>
              <button 
                @click="toggleBalance"
                class="w-10 h-6 rounded-full bg-papara-bg flex items-center px-1"
                :class="showBalance ? 'justify-end' : 'justify-start'"
              >
                <div class="w-4 h-4 rounded-full bg-text-muted"></div>
              </button>
            </div>
            
            <!-- Account list -->
            <div class="space-y-2 flex-1">
              <div 
                v-for="account in card.accounts"
                :key="account.name"
                class="flex items-center justify-between"
              >
                <div class="flex items-center gap-2">
                  <span class="text-sm">{{ account.icon }}</span>
                  <span class="text-xs text-text-secondary">{{ account.name }}</span>
                </div>
                <span class="text-xs text-text-muted">{{ showBalance ? account.balance : '••••' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Pagination dots -->
    <div class="flex justify-center gap-2 mt-4">
      <button
        v-for="(card, index) in cards"
        :key="card.id"
        @click="goToCard(index)"
        class="w-2 h-2 rounded-full transition-all duration-200"
        :class="[
          currentIndex === index 
            ? 'bg-white w-6' 
            : 'bg-text-muted hover:bg-text-secondary'
        ]"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
