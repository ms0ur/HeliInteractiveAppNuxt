<script setup lang="ts">
</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat fixed inset-0 flex px-10 flex-row" style="background-image: url('/blob-scene-haikei.svg');">
    <div class="text-left container h-full flex flex-col justify-center gap-5">
      <h1 class="text-white text-5xl flex flex-row gap-8 items-center"><span class="press-start">HeliCraft</span> <span class="anta text-6xl">Interactive</span></h1>
      <h3 class="text-2xl text-gray-300 monserrat">Цифровая платформа для взаимодействия с сервером</h3>
    </div>
    <div class="flex items-center justify-center" style="height: 100%">
      <div class="">
        <div class="">
          <a class="p-0" href="/login"><NextButtonComponent class=" scale-150" :text="'Войти'"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

