<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { X } from 'lucide-vue-next'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

const router = useRouter()
const chartRef = ref(null)

const goBack = () => {
  router.back()
}

// Spending categories with their data
const categories = [
  { id: 1, name: 'Ulaşım Kartları', color: '#22C55E', amount: 512.50, iconChar: '🚌' },
  { id: 2, name: 'Oyun & Dijital Kod', color: '#8B5CF6', amount: 410.10, iconChar: '🎮' },
  { id: 3, name: 'Şans Oyunları', color: '#7C3AED', amount: 615.35, iconChar: '🎰' },
  { id: 4, name: 'Bağış', color: '#EF4444', amount: 273.40, iconChar: '❤️' },
  { id: 5, name: 'Findeks', color: '#14B8A6', amount: 341.75, iconChar: '📊' },
  { id: 6, name: 'Havalimanı Hizmetleri', color: '#3B82F6', amount: 512.50, iconChar: '✈️' },
  { id: 7, name: 'GSM TL/Paket', color: '#F97316', amount: 751.90, iconChar: '📱' },
]

const totalAmount = '₺3.417,50'

// Custom plugin to draw icons on chart segments
const iconPlugin = {
  id: 'doughnutIcons',
  afterDraw: (chart) => {
    const ctx = chart.ctx
    const meta = chart.getDatasetMeta(0)
    
    meta.data.forEach((arc, index) => {
      // Get the middle angle of the arc
      const startAngle = arc.startAngle
      const endAngle = arc.endAngle
      const midAngle = (startAngle + endAngle) / 2
      
      // Calculate position on the arc
      const innerRadius = arc.innerRadius
      const outerRadius = arc.outerRadius
      const midRadius = (innerRadius + outerRadius) / 2
      
      const x = arc.x + Math.cos(midAngle) * midRadius
      const y = arc.y + Math.sin(midAngle) * midRadius
      
      // Draw icon background
      const iconSize = 24
      ctx.save()
      ctx.fillStyle = categories[index].color
      ctx.beginPath()
      ctx.roundRect(x - iconSize/2, y - iconSize/2, iconSize, iconSize, 4)
      ctx.fill()
      
      // Draw emoji icon
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(categories[index].iconChar, x, y)
      ctx.restore()
    })
  }
}

// Chart.js data configuration
const chartData = {
  labels: categories.map(c => c.name),
  datasets: [
    {
      data: categories.map(c => c.amount),
      backgroundColor: categories.map(c => c.color),
      borderWidth: 0,
      cutout: '55%',
      spacing: 4,
      borderRadius: 6,
    }
  ]
}

// Chart.js options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#1F1F1F',
      titleColor: '#fff',
      bodyColor: '#fff',
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: function(context) {
          return `₺${context.parsed.toFixed(2).replace('.', ',')}`
        }
      }
    }
  }
}

// Chart plugins array
const chartPlugins = [iconPlugin]
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- Özet indicator in top right -->
    <div class="absolute top-6 right-6 flex flex-col items-center z-10">
      <div class="text-text-secondary text-xs mb-1">Özet</div>
      <div class="w-8 h-8 rounded-full border-2 border-dashed border-text-muted flex items-center justify-center overflow-hidden">
        <div class="w-full h-full rounded-full summary-gradient"></div>
      </div>
      <!-- Arrow pointing to chart -->
      <svg class="absolute top-10 right-10 w-12 h-12 text-text-muted transform rotate-12" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3">
        <path d="M40 10 Q 20 20 15 40" />
        <path d="M15 35 L 15 42 L 22 40" stroke-dasharray="none" />
      </svg>
    </div>
    
    <!-- Main content -->
    <div class="flex-1 flex flex-col items-center justify-center px-6 pt-16">
      <!-- Donut Chart with vue-chartjs and custom icon plugin -->
      <div class="relative w-72 h-72 mb-8">
        <Doughnut 
          ref="chartRef"
          :data="chartData" 
          :options="chartOptions"
          :plugins="chartPlugins"
        />
        
        <!-- Center content overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span class="text-text-secondary text-sm">Toplam</span>
          <span class="text-white text-2xl font-bold">{{ totalAmount }}</span>
        </div>
      </div>
      
      <!-- Legend -->
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8 px-4">
        <div 
          v-for="category in categories" 
          :key="category.id"
          class="flex items-center gap-2"
        >
          <div 
            class="w-3 h-3 rounded-sm"
            :style="{ backgroundColor: category.color }"
          ></div>
          <span class="text-text-secondary text-xs">{{ category.name }}</span>
        </div>
      </div>
      
      <!-- Description text -->
      <p class="text-white text-xl font-semibold text-center leading-relaxed mb-8">
        Ödemelerini aylık olarak<br>
        kategori bazlı<br>
        görüntüleyebilirsin.
      </p>
    </div>
    
    <!-- Close button -->
    <div class="p-8 flex flex-col items-center">
      <button 
        @click="goBack"
        class="w-14 h-14 rounded-full bg-white flex items-center justify-center transition-colors mb-2 hover:bg-gray-100"
      >
        <X class="w-6 h-6 text-black" />
      </button>
      <span class="text-text-secondary text-sm">Anladım</span>
    </div>
  </div>
</template>

<style scoped>
.summary-gradient {
  background: conic-gradient(
    #22C55E 0deg,
    #8B5CF6 50deg,
    #7C3AED 100deg,
    #EF4444 140deg,
    #14B8A6 180deg,
    #3B82F6 220deg,
    #F97316 280deg,
    #22C55E 360deg
  );
}
</style>
