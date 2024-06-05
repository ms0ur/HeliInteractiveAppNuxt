<script setup>
import axios from 'axios';

const props = defineProps({
  nickname: String,
  time: String,
  weather: String,
  players: Number
});

const playerHead = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`https://api.helicraft.ru/skin/${props.nickname}/head`, { responseType: 'blob' });
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(response.data);
    playerHead.value = imageUrl;
  } catch (error) {
    console.error('Error fetching player head:', error);
  }
});
</script>

<template>
  <div class="flex items-center">
    <div class="flex-shrink-0 mr-4">
      <img v-if="playerHead" :src="playerHead" alt="Player Head" class="w-20 h-20 rounded-lg" />
    </div>
    <div class="flex-1">
      <h1 class="text-white text-4xl lg:text-5xl font-bold">Добро пожаловать, {{ nickname }}</h1>
    </div>
  </div>
  <div class="text-white text-2xl flex flex-col gap-2 mt-4">
    <h4>Время: {{ time }}</h4>
    <h4>Погода: {{ weather }}</h4>
    <h4>Количество игроков: {{ players }}</h4>
  </div>
</template>