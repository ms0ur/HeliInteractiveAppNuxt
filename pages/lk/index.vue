<script setup lang="ts">
definePageMeta({
    middleware: ["check-auth"],
})
import Cookies from 'js-cookie'



const nickname = Cookies.get("nickname")

const time = ref('14:39')
const weather = ref('В питере пасмурно')
const players = ref(0)

const health = ref('100%')
const location = ref('X: 0, Y: 0')
const diam = ref(0)
const isOnline = ref(true)

const bank1 = ref(0)
const bank2 = ref(0)
</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat fixed inset-0 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10 p-8 lg:p-12" style="background-image: url('/blob-scene-haikei.svg');">
    <div class="card py-5 px-6 flex flex-col gap-10 lg:py-10 lg:px-8">
      <FirstTileComponent 
        :nickname="nickname" 
        :time="time" 
        :weather="weather" 
        :players="players" />
    </div>
    <div class="card py-5 px-6 flex flex-col gap-10 lg:py-10 lg:px-8">
      <SecondTileComponent 
        :nickname="nickname"
        :health="health" 
        :loc="location" 
        :diam="diam"
        :is-online="isOnline" />
    </div>
    <div class="card py-5 px-6 flex flex-col gap-10 lg:py-10 lg:px-8">
      <ThirdTileComponent 
      :bank1 = "bank1"
      :bank2 = "bank2"
      />
         
        
    </div>
    <div class="card py-5 px-6 flex flex-col gap-10 lg:py-10 lg:px-8"></div>
    <div class="card py-5 px-6 flex flex-col gap-10 lg:py-10 lg:px-8"></div>
    <div class="card py-5 px-6 flex flex-col gap-10 lg:py-10 lg:px-8">
      <SixthTileComponent 
      
      />
    </div>
  </div>
</template>

<style scoped>
</style>
