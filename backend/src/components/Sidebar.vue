<template>
    <div class="w-[200px] transition-all bg-amber-500 text-black py-4 px-2">
      <router-link :to="{name: 'app.dashboard'}"
                   class="flex items-center p-2 rounded transition-colors hover:bg-white/70">
        <span class="mr-2">
          <HomeIcon class="w-5"/>
        </span>
        <span class="text-md">
          Dashboard
        </span>
      </router-link>
      <router-link :to="{name: 'app.products'}"
                   class="flex items-center p-2 rounded transition-colors hover:bg-white/70">
        <span class="mr-2">
          <Bars4Icon class="w-5"/>
        </span>
        <span class="text-md">
          Products
        </span>
      </router-link>
      <router-link :to="{name: 'app.dashboard'}"
                   class="flex items-center p-2 rounded transition-colors hover:bg-white/70">
        <span class="mr-2">
          <UsersIcon class="w-5"/>
        </span>
        <span class="text-md">
          Users
        </span>
      </router-link>
      <router-link :to="{name: 'app.dashboard'}"
                   class="flex items-center p-2 rounded transition-colors hover:bg-white/70">
        <span class="mr-2">
          <ChartBarIcon class="w-5"/>
        </span>
        <span class="text-md">
          Reports
        </span>
      </router-link>
    </div>
  </template>
  
  <script setup>
    import {HomeIcon, UsersIcon, Bars4Icon, ChartBarIcon} from '@heroicons/vue/24/outline'
  </script>
  
  <style scoped>
  </style>