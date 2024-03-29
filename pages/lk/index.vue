<script setup lang="ts">
definePageMeta({
    middleware: ["check-auth"],
})
import Cookies from 'js-cookie'

const nickname = Cookies.get("nickname")

const time = ref('00:00')
const weather = ref('Солнечно')
const players = ref(0)
</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat fixed inset-0 grid grid-cols-3 grid-rows-2 gap-10 p-8" style="background-image: url('/blob-scene-haikei.svg');">
    <div class="card py-5 px-6 flex flex-col gap-10">
        <h1 class="text-white text-4xl text-center monserrat">Добро пожаловать, {{ nickname }}</h1>
        <div class="text-white text-2xl flex flex-col gap-2">
            <h4>Время: {{ time }}</h4>
            <h4>Погода: {{ weather }}</h4>
            <h4>Количество игроков: {{ players }}</h4>
        </div>
    </div>
    <div class="card">
        
    </div>
    <div class="card">
        
    </div>
    <div class="card">
        
    </div>
    <div class="card">
        
    </div>
    <div class="card">
        
    </div>
  </div>
</template>

<style scoped>
</style>
