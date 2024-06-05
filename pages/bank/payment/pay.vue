<script lang="ts" setup>
const paymentCode = ref("");
const showTransactionDetails = ref(false);
const transaction = ref({
  recipient: "",
  amount: 0,
  date: "",
});
const handleSubmit = () => {
    transaction.value = {
        recipient: "ms0ur",
        amount: 100,
        date: new Date().toLocaleString(),
    };
    showTransactionDetails.value = true;
};

const handleCancel = () => {
showTransactionDetails.value = false;
};

const handleConfirm = () => {

  // Perform the transfer logic here

  alert('Transfer successful!');
  //redirect to /lk
  navigateTo('/lk');
};
</script>

<template>
    <div class="bg-cover bg-center bg-no-repeat fixed inset-0 min-h-screen flex items-center justify-center" style="background-image: url('/blob-scene-haikei.svg');">
      <div class="card py-5 px-6 rounded-lg shadow-md w-96 text-white">
        <h1 class="text-2xl font-bold mb-4">Оплата услуги</h1>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block font-bold mb-2" for="payment-code" :class="showTransactionDetails ? 'text-gray-300' : 'text-white'">
              Введите код платежа
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="payment-code"
              type="text"
              v-model="paymentCode"
              :disabled="showTransactionDetails"
            />
          </div>
          <button
            class=" font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="showTransactionDetails"
            :class="showTransactionDetails ? 'bg-green-900 text-gray-300' : 'bg-green-500 hover:bg-green-700 text-white'"
            >
            Подтвердить
          </button>
        </form>
        <div v-if="showTransactionDetails" class="mt-8">
          <PaymentDetailsComponent
            :recipient="transaction.recipient"
            :amount="transaction.amount"
            :date="transaction.date"
            @confirm="handleConfirm"
            @cancel="handleCancel"
          />
        </div>
      </div>
    </div>
  </template>

<style scoped></style>