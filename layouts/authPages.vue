<template>
    <NuxtLayout name="auth-pages">
      <NuxtPage v-if="isAuthValid()" />
    </NuxtLayout>
</template>

<script setup lang="ts">
import axios from 'axios';
import Cookies from 'js-cookie'
    const isAuthValid = () => {
    if (Cookies.get('token') != undefined || null || "") {
      axios.post('https://api.helicraft.ru/auth', {
        request: "validate",
        token: Cookies.get('token')
      }).then(function (response) {
        if(response.status == 200){
          return true
        } else {
          Cookies.remove('token')
          Cookies.remove('nickname')
          navigateTo('/login')
          return false
        }
      }).catch(function (error) {
        console.log(error)
        Cookies.remove('token')
        Cookies.remove('nickname')
        navigateTo('/login')
        return false
      })



    } else {
        navigateTo('/login')
        return false
    }
  }
</script>