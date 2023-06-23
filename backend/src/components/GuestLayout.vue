
<template>
   
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-300">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-4 rounded-lg shadow">
        
        
            <img class="mx-auto h-36 w-auto" src="http://localhost:5173/src/assets/images/logo/AUTOWYL_LOGO.png" alt="AutoWly" />
            <h2 class="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {{ title }}
            </h2>
        
  
      <slot></slot>
      </div>
    </div>
  </template>
  

<script setup>

  const {title} = defineProps({
    title: String
  })


</script>