<script setup lang="ts">
import axios from 'axios';

const props = defineProps({
    amount: Number,
    recipient: String,
    date: String
});

const emit = defineEmits(['confirm', 'cancel']);

const handleConfirm = () => {
  emit('confirm');
};

const handleCancel = () => {
  emit('cancel');
};

const playerHeadTo = ref('');

onMounted(async () => {
  try {
    const responsePT = await axios.get(`https://api.helicraft.ru/skin/${props.recipient}/head`, { responseType: 'blob' });
    const urlCreator = window.URL || window.webkitURL;
    const imageUrlPT = urlCreator.createObjectURL(responsePT.data);
    playerHeadTo.value = imageUrlPT;
  } catch (error) {
    console.error('Error fetching player head:', error);
  }
});
</script>

<template>
    <div class="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-7">Оплата услуги</h2>
        <p class="mb-5">Вы оплачиваете услугу игроку {{ recipient }}, на общюю сумму {{ amount }}</p>
        <div class="mb-5 flex items-center gap-2">
            <span class="font-bold">Получатель:</span>
            <div class="flex-shrink-0">
                    <img v-if="playerHeadTo" :src="playerHeadTo" alt="Player Head" class="w-10 h-10 rounded-lg" />
            </div>
            {{ recipient }}
        </div>
        <div class="mb-5">
            <span class="font-bold">Оплата на сумму:</span> {{ amount }}
        </div>
        <div class="mb-5">
            <span class="font-bold">Налог:</span> 0%
        </div>
        <div class="flex gap-4 items-center">
            <button @click="handleConfirm" class="bg-green-500 text-white px-4 py-2 rounded-lg">Подтвердить</button>
            <button @click="handleCancel" class="bg-red-500 text-white px-4 py-2 rounded-lg">Отменить</button>
        </div>
    </div>
  </template>