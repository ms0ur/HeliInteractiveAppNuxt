<script setup>

const text = ref("soon...")

</script>

<template>
    <div class="bg-cover bg-center bg-no-repeat fixed inset-0 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10 p-8 lg:p-12" style="background-image: url('/blob-scene-haikei.svg');">
        <div class="text-white text-2xl flex flex-col gap-2">
            <h3> {{ text }} </h3>
        </div>
    </div>
</template>