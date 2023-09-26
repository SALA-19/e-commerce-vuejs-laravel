<template>

  <template v-if="!loading.chartData">
      <LineChart :data=chartData :height="240"/>
  </template>
  <Spinner v-else text="" class=""/>    
</template>
  
  <script setup>
  
  import axiosClient from "../../axios.js";
  import {ref, watch} from "vue";
  import LineChart from "../../components/core/Charts/Bar.vue";
  import Spinner from "../../components/core/Spinner.vue";
  import {useRoute} from "vue-router";
  
  const route = useRoute();
  const chartData = ref({});
  const loading = ref({
    chartData: true
  })
  
  watch(route, (rt) => {
    getData();
  }, {immediate: true})
  
  function getData() {
    axiosClient.get('report/customers', {params: {d: route.params.date}})
      .then(({data}) => {
        chartData.value = data;
        loading.value.chartData = false;
      })
  }
  </script>
  
  <style scoped>
  
  </style>