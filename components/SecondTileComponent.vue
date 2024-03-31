<script setup>
defineProps({
  nickname: String,
  health: String,
  loc: String,
  diam: Number,
  isOnline: Boolean
});
</script>

<template>
    <h1 class="text-white text-4xl lg:text-5xl text-center font-bold">{{ nickname }}:</h1>
      <div class="text-white text-2xl flex flex-col gap-16" v-if="isOnline">
        <div class="flex flex-col gap-2">
            <h4>Здоровье игрока: {{ health }}</h4>
            <h4>Координаты: {{ loc }}</h4>
            <h4>Кол-во алмазов: {{ diam }}</h4>  
        </div>
        <NextButtonComponent :text="'Подробнее'" />
      </div>
      <div class="text-white text-2xl flex flex-col gap-16" v-else>
        <h4>Игрок <span class="text-red-500">оффлайн</span></h4>
        <NextButtonComponent class="inactive" :text="'Подробнее'" />
      </div>
</template>