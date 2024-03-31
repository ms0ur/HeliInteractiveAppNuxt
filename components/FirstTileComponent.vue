<script setup>
defineProps({
  nickname: String,
  time: String,
  weather: String,
  players: Number
});
</script>

<template>
    <h1 class="text-white text-4xl lg:text-5xl text-center font-bold">Добро пожаловать, {{ nickname }}</h1>
      <div class="text-white text-2xl flex flex-col gap-2">
        <h4>Время: {{ time }}</h4>
        <h4>Погода: {{ weather }}</h4>
        <h4>Количество игроков: {{ players }}</h4>
      </div>
</template>