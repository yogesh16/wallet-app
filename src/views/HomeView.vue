<script setup>
import { inject } from 'vue'
import AppHeader from '../components/header/AppHeader.vue'
import HorizontalShortcuts from '../components/shortcuts/HorizontalShortcuts.vue'
import CardCarousel from '../components/carousel/CardCarousel.vue'
import NotificationCard from '../components/notifications/NotificationCard.vue'
import QuickActions from '../components/actions/QuickActions.vue'
import TransactionList from '../components/transactions/TransactionList.vue'
import CashbackSection from '../components/cashback/CashbackSection.vue'
import BottomNavigation from '../components/navigation/BottomNavigation.vue'
import BaseBottomSheet from '../components/sheets/BaseBottomSheet.vue'
import QRBottomSheet from '../components/sheets/QRBottomSheet.vue'
import TransferBottomSheet from '../components/sheets/TransferBottomSheet.vue'
import PaymentsBottomSheet from '../components/sheets/PaymentsBottomSheet.vue'
import CardBottomSheet from '../components/sheets/CardBottomSheet.vue'

const activeSheet = inject('activeSheet')
const closeSheet = inject('closeSheet')
</script>

<template>
  <div class="flex flex-col min-h-screen pb-20 safe-top">
    <!-- Scrollable content area -->
    <div class="flex-1 overflow-y-auto scroll-hidden">
      <!-- Header -->
      <AppHeader class="mt-4" />
      
      <!-- Horizontal shortcuts -->
      <HorizontalShortcuts class="mt-2" />
      
      <!-- Balance card carousel -->
      <CardCarousel class="mt-6" />
      
      <!-- Notification card -->
      <NotificationCard class="mt-4 mx-4" />
      
      <!-- Quick actions -->
      <QuickActions class="mt-6" />
      
      <!-- Transaction list -->
      <TransactionList class="mt-6" />
      
      <!-- Cashback section -->
      <CashbackSection class="mt-6 mb-6" />
    </div>
    
    <!-- Bottom navigation - fixed at bottom -->
    <BottomNavigation />
    
    <!-- Bottom Sheets -->
    <Teleport to="body">
      <!-- QR Sheet -->
      <BaseBottomSheet 
        v-if="activeSheet === 'qr'" 
        @close="closeSheet"
      >
        <QRBottomSheet />
      </BaseBottomSheet>
      
      <!-- Transfer Sheet -->
      <BaseBottomSheet 
        v-if="activeSheet === 'transfer'" 
        @close="closeSheet"
      >
        <TransferBottomSheet />
      </BaseBottomSheet>
      
      <!-- Payments Sheet -->
      <BaseBottomSheet 
        v-if="activeSheet === 'payments'" 
        @close="closeSheet"
      >
        <PaymentsBottomSheet />
      </BaseBottomSheet>
      
      <!-- Card Sheet -->
      <BaseBottomSheet 
        v-if="activeSheet === 'card'" 
        @close="closeSheet"
      >
        <CardBottomSheet />
      </BaseBottomSheet>
    </Teleport>
  </div>
</template>

<style scoped>
</style>
