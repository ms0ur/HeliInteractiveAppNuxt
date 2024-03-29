import axios from 'axios';
import Cookies from 'js-cookie'
    

export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthValid = async () => {
        if (Cookies.get('token') != undefined || null || "") {
          await axios.post('https://api.helicraft.ru/auth', {
            request: "validate",
            token: Cookies.get('token')
          }).then(function (response) {
            console.log(response.status)
            if(response.status == 200){
                console.log('auth valid')
              return true
            } else {
              console.log('auth invalid')
              Cookies.remove('token')
              Cookies.remove('nickname')
              navigateTo('/login')
              return false
            }
          }).catch(function (error) {
            console.log('auth einvalid')
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
    if (!isAuthValid()) {
        console.log('auth 2 invalid')
        return navigateTo('/login')
    }
})
