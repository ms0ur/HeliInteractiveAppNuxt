<script setup lang="ts">
const props = defineProps({
  recipient: String,
  amount: Number,
});
import Cookies from 'js-cookie'
import axios from 'axios';

const nickname = Cookies.get("nickname")

const playerHead = ref('');
const playerHeadTo = ref('');

onMounted(async () => {
  try {
    const response = await axios.get(`https://api.helicraft.ru/skin/${nickname}/head`, { responseType: 'blob' });
    const responsePT = await axios.get(`https://api.helicraft.ru/skin/${props.recipient}/head`, { responseType: 'blob' });
    const urlCreator = window.URL || window.webkitURL;
    const imageUrlPT = urlCreator.createObjectURL(responsePT.data);
    const imageUrl = urlCreator.createObjectURL(response.data);
    playerHead.value = imageUrl;
    playerHeadTo.value = imageUrlPT;
  } catch (error) {
    console.error('Error fetching player head:', error);
  }
});

const emit = defineEmits(['confirm', 'cancel']);

const handleConfirm = () => {
  emit('confirm');
};

const handleCancel = () => {
  emit('cancel');
};
</script>

<template>
    <div class="text-white text-2xl flex flex-col gap-8 mt-4">
        <div class="flex items-center gap-2">
            <p><BootstrapIcon name="arrow-left" /> Перевод со счета: {{ nickname }}</p>
            <div class="flex-shrink-0">
                <img v-if="playerHead" :src="playerHead" alt="Player Head" class="w-10 h-10 rounded-lg" />
            </div>
        </div>
        <div class="flex items-center gap-2">
            <p><BootstrapIcon name="arrow-right" /> Перевод на счет: {{ recipient }}</p>
            <div class="flex-shrink-0">
                <img v-if="playerHeadTo" :src="playerHeadTo" alt="Player Head" class="w-10 h-10 rounded-lg" />
            </div>
        </div>
      <p><BootstrapIcon name="cash" /> Сумма: {{ amount }}</p>
      <div class="flex gap-4 mt-4">
        <button @click="handleConfirm" class="bg-green-500 text-white px-4 py-2 rounded-lg">Подтвердить <BootstrapIcon name="arrow-return-left" /></button>
        <button @click="handleCancel" class="bg-red-500 text-white px-4 py-2 rounded-lg">Отменить <BootstrapIcon name="x" /></button>
      </div>
    </div>
</template>
