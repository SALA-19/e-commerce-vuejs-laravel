<template>
  
  <div class="flex items-center justify-between mb-3">
    <h1 class="text-3xl font-semibold">Produtos</h1>
    <button type="submit"
            @click="showProductModel"
            class="py-2 px-4 border text-sm font-medium rounded-md text-black bg-amber-500 hover:bg-white/70 focus:outline-none focus:ring-5 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Add novo Produto
    </button>
  </div>
  <ProductModel v-model="showModel" :product="productModel" @close="onModalClose" />
  <ProductsTable @clickEdit="editProduct"/>
    
    
</template>

<script setup>
import ProductsTable from './ProductsTable.vue';
import ProductModel from './ProductModel.vue';
import { ref } from 'vue';
import store from '../../store';


const showModel = ref(false)
const DEFAULT_PRODUCT = {
  id: '',
  title: '',
  description: '',
  image: '',
  price: ''
}

function showProductModel(){
  showModel.value = true
}
const productModel = ref({...DEFAULT_PRODUCT})

function editProduct(product) {
  store.dispatch('getProduct', product.id)
    .then(({data}) => {
      productModel.value = data
      showProductModel();
    })
}


function onModalClose() {
  productModel.value = {...DEFAULT_PRODUCT}
}
</script>

<style scoped>
</style>