<template>
  <div class="relative text-white font-sans mb-5">

    <!-- Counter -->
    <div class="absolute -top-2 -right-2 z-20 bg-red-500 text-white text-xs font-semibold px-2 py-[2px] rounded-full">
      5
    </div>

    <!-- Stack -->
    <div class="relative h-[90px]">

      <!-- Back card 2 -->
      <div class="absolute inset-0 rounded-2xl translate-y-4 scale-[0.96] blur-[0.6px] shadow-xl back-card-2"></div>

      <!-- Back card 1 -->
      <div class="absolute inset-0 rounded-2xl translate-y-2 scale-[0.98] blur-[0.3px] shadow-xl back-card-1"></div>

      <!-- Front card -->
      <div class="absolute inset-0 z-10 rounded-2xl shadow-2xl p-4 flex gap-3 front-card">

        <!-- Icon -->
        <div class="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center">
          <span class="text-lg">📊</span>
        </div>

        <!-- Content -->
        <div class="flex-1">
          <p class="text-xs text-slate-400 mb-1">
            Bugün 06:00
          </p>

          <p class="text-sm font-semibold leading-snug">
            Aylık hesap özetin oluşturuldu.
          </p>

          <p class="text-xs text-slate-400 mt-1 leading-snug">
            Eylül ayında neler yaptığını görmek için tıkla
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.front-card {
  background:  #111117;
  border: 1px solid #2A2A2A;
}

.back-card-1 {
  background: rgba(42, 42, 42, 0.6);
  border: 1px solid rgba(42, 42, 42, 0.6);
  width: 95%;
  left: 50%;
  margin-left: -47.5%;
}

.back-card-2 {
  background: rgba(42, 42, 42, 0.4);
  border: 1px solid rgba(42, 42, 42, 0.4);
  width: 90%;
  left: 50%;
  margin-left: -45%;
}
</style>
