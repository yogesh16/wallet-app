<script setup>
const props = defineProps({
  transaction: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="flex items-center gap-3 py-3 border-b border-papara-border last:border-b-0">
    <!-- Avatar/Logo -->
    <div 
      class="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
      :class="transaction.avatarBg"
    >
      <img 
        v-if="transaction.avatar" 
        :src="transaction.avatar" 
        :alt="transaction.name"
        class="w-full h-full rounded-full object-cover"
      />
      <span v-else class="text-sm font-semibold text-white">
        {{ transaction.initials }}
      </span>
    </div>
    
    <!-- Transaction details -->
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-white truncate">
        {{ transaction.name }}
      </p>
      <p class="text-xs text-text-muted truncate">
        {{ transaction.type }}
      </p>
    </div>
    
    <!-- Amount and date -->
    <div class="text-right flex-shrink-0">
      <p 
        class="text-sm font-semibold"
        :class="transaction.isNegative ? 'text-papara-red' : 'text-papara-green'"
      >
        {{ transaction.amount }} {{ transaction.currency }}
      </p>
      <p class="text-xs text-text-muted">
        {{ transaction.date }}
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
