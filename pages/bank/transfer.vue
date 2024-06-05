<script lang="ts" setup>
definePageMeta({
    middleware: ["check-auth"],
})

const recipient = ref('');
const amount = ref(0);
const showConfirmation = ref(false);

const handleSubmit = () => {
  showConfirmation.value = true;
};

const handleCancel = () => {
  showConfirmation.value = false;
};

const handleConfirm = () => {
  showConfirmation.value = false;

  // Perform the transfer logic here

  alert('Transfer successful!');
  //redirect to /lk
  navigateTo('/lk');
};

</script>

<template>
<div class="h-full bg-cover bg-center bg-no-repeat fixed inset-0 px-10" style="background-image: url('/blob-scene-haikei.svg');">
    <div class="card py-5 px-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <button @click="navigateTo('/lk')" class="bg-red-500 text-white px-4 py-2 mb-8 rounded-lg"><BootstrapIcon name="arrow-left" /> Назад</button>
        <h2 class="text-3xl font-bold text-center text-white">Перевод виртуальной валюты</h2>
        <template v-if="showConfirmation">
        <PaymentConfirmComponent
            :recipient="recipient"
            :amount="amount"
            class="text-2xl mt-8"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        />
        </template>
        <template v-else>
        <form @submit.prevent="handleSubmit" class="mt-8">
            <div class="flex flex-col">
            <label for="recipient" class="text-2xl text-white">Ник получателя</label>
            <input v-model="recipient" type="text" id="recipient" class="w-full p-4 rounded-lg border border-gray-300 mt-2 bg-transparent text-white" />
            </div>
            <div class="flex flex-col mt-6">
            <label for="amount" class="text-2xl text-white">Сумма</label>
            <input v-model="amount" type="number" id="amount" class="w-full p-4 rounded-lg border border-gray-300 mt-2 bg-transparent text-white" />
            </div>
            <button type="submit" class="bg-blue-500 px-6 py-4 rounded-lg mt-6 font-bold text-white">Перевести <BootstrapIcon name="arrow-return-left" /></button>
        </form>
        </template>
    </div>
</div>
</template>

<style scoped>

</style>