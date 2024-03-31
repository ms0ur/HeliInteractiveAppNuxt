<script lang="ts" setup>
import axios from 'axios';
import Cookies from 'js-cookie'


const nickname = ref('')
const password = ref('')
const warn = ref(false)
const pwarnB = ref(false)
const pwarn = ref('')

const isAuth = async () => {
  if(await isAuthValid()){
    console.log('auth valid')
    navigateTo('/lk')
  } else {
    console.log('auth invalid')
    Cookies.remove('token')
    Cookies.remove('nickname')
}
}




  const isAuthValid = async () => {
    if (Cookies.get('token') !== undefined && Cookies.get('token') !== null && Cookies.get('token') !== "") {
      await axios.post('https://api.helicraft.ru/auth', {
        request: "validate",
        token: Cookies.get('token'),
        username: Cookies.get('nickname')
      }).then(function (response) {
        console.log(response.status)
        if(response.status == 200){
          console.log('auth valid')
          return true
        } else {
          return false
          
        }
      }).catch(function (error) {
        return false
      })

    } else {
      return false
    }
  }

  onMounted(() => {
  isAuth()
})

  const formSubmit = async () =>{
    warn.value = false
    pwarnB.value = false
    pwarn.value = ''
    if (nickname.value == '' || password.value == '') {
      warn.value = true
    } else {

      await axios.post('https://api.helicraft.ru/auth', {
        request: "login",
        nickname: nickname.value,
        password: password.value
      }).then(function (response) {
        if(response.status == 200){
          console.log(response.data.nickname)
          Cookies.set('token', response.data.token, { expires: 7, secure: true, sameSite: 'strict' })
          Cookies.set('nickname', response.data.username, { expires: 7, secure: true, sameSite: 'strict' })
          navigateTo('/lk')
        } else if(response.status == 401){
          pwarn.value = "Неверный логин или пароль"
          pwarnB.value = true
          
        }
      }).catch(function (error) {
        pwarnB.value = true
        pwarn.value = error.response.data.message
      })
    }
  }

</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat fixed inset-0 flex px-10 flex-row" style="background-image: url('/blob-scene-haikei.svg');">
    <div class="text-left container h-full flex flex-col justify-center gap-5">
      <h1 class="text-white text-5xl flex flex-row gap-8 items-center"><span class="press-start">HeliCraft</span> <span class="anta text-6xl">Interactive</span></h1>
      <h3 class="text-2xl text-gray-300 monserrat">Цифровая платформа для взаимодействия с сервером</h3>
    </div>
    <div class="flex items-center justify-left" style="height: 100%">
      
      <div class="">
        <div class="flex items-center flex-col justify-center">
          <form class="card px-8 py-8 rounded-lg shadow-lg" @submit.prevent="formSubmit">
            <h2 class="text-2xl monserrat text-gray-100 pb-5">Вход</h2>
            <input type="text" v-model="nickname" class="block w-full bg-gray-800 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-0066ff" placeholder="Никнейм">
            <input type="password" v-model="password" class="block w-full bg-gray-800 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-0066ff mt-4" placeholder="Пароль с сервера">
            <div v-if="warn" class="bg-red-500 mt-3 text-white px-4 py-2 rounded-md">Не все поля заполнены</div>
            <div v-if="pwarnB" class="bg-red-500 mt-3 text-white px-4 py-2 rounded-md">{{ pwarn }}</div>
            <button type="submit" class="mt-3"><NextButtonComponent :text="'Войти'" /></button>
          </form>
        </div>
      </div>
      
    </div>
  </div>


</template>

<style scoped>
.card {
    backdrop-filter: blur(16px) saturate(176%);
    -webkit-backdrop-filter: blur(16px) saturate(176%);
    background-color: rgba(17, 25, 40, 0.72);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>