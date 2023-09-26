<template>

    <template v-if="!loading.chartData">
        <BarChart :data=chartData :height="240"/>
    </template>
    <Spinner v-else text="" class=""/>    
</template>
  
  <script setup>
  
  import axiosClient from "../../axios.js";
  import {ref, watch} from "vue";
  import BarChart from "../../components/core/Charts/Bar.vue";
  import Spinner from "../../components/core/Spinner.vue";
  import {useRoute} from "vue-router";
  
  const loading = ref({
    chartData: true,
})
  const route = useRoute();
  const chartData = ref({});


  
  watch(route, (rt) => {
    getData();
  }, {immediate: true})
  
  function getData() {
    
    axiosClient.get('report/orders', {params: {d: route.params.date}})
      .then(({data}) => {
        chartData.value = data;
        loading.value.chartData = false;
      })
      
  }
  
  </script>
  
  <style scoped>
  
  </style>