<script setup>
defineProps({
    bank1: Number,
    bank2: Number
});
</script>

<template>
    <h1 class="text-white text-4xl lg:text-5xl text-center font-bold">Ваш банк:</h1>
      <div class="text-white text-2xl flex flex-col gap-2">
        <h5>Счет 1: {{ bank1 }}</h5>
        <h5>Счет 2: {{ bank2 }}</h5>
        <NuxtLink to="/bank/payment/pay"><NextButtonComponent :text="'Оплатить услугу'" /></NuxtLink>
        <NuxtLink to="/bank/transfer"><NextButtonComponent :text="'Перевести'" /> </NuxtLink>
      </div>
</template>