
<template>
   
    
      
    <GuestLayout title="Entrar">
      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" method="POST" @submit.prevent="login">
          <div v-if="errorMsg" class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded">
            {{ errorMsg }}
            <span
              @click="errorMsg = ''"
              class="w-5 h-5 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </span>
          </div>
          <div class="flex items-center justify-center">
            <input id="email-address" name="email" type="email" autocomplete="email" required="" v-model="user.email" placeholder="Enderço de E-mail"
              class="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-8" />
          </div>
          <div class="flex items-center justify-center mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required="" v-model="user.password" placeholder="Password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-8" />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" v-model="user.remember"
                    class="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"/>
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>

            <div class="flex items-center text-sm">
                <router-link :to="{name: 'requestPassword'}" class="font-medium text-gray-900 hover:text-amber-600"> Forgot
                    your password?
                </router-link>
            </div>
          </div>
  
          <div>
            <button type="submit"
                :disabled="loading" 
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
                :class="{
                  'cursor-not-allowed': loading,
                  'hover:bg-white/70': loading
                }"
                >
                <svg
                  v-if="loading"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4">
                  </circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon class="h-5 w-5 text-white group-hover:text-amber-400" aria-hidden="true"/>
                </span>
                Entrar
            </button>
          </div>
        </form>
  
      </div>
    </GuestLayout>
  </template>
  

<script setup>
import {ref} from 'vue'
import {LockClosedIcon} from '@heroicons/vue/24/solid'
import GuestLayout from '../components/GuestLayout.vue';

import store from "../store";
import router from "../router";

let loading = ref(false);
let errorMsg = ref("");

const user = {
  email: '',
  password: '',
  remember: false
}

function login() {
  
  loading.value = true;
  store.dispatch('login', user)
    .then(() => {
      loading.value = false;
      router.push({name: 'app.dashboard'})
    })
    .catch(({response}) => {
      loading.value = false;
      errorMsg.value = response.data.message;
    })
}

</script>

<style>

</style>