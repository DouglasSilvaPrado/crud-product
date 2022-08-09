<template>
     <div class="row"> 
        <div class="col-md-6 col-lg-4 mb-3" v-for="product in products" :key="product.id" v-show="true">
            <ProductCard 
            :name="product.name"
            :description="product.description"
            :image="product.image"
            :qtd="product.qtd"
            :price="product.price"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProductCard from "../../components/layout/ProductCard.vue";
import IProduct from "../../interfaces/IProduct";
import Product from "../../services/product";

let products = ref<IProduct[]>([])

async function list() {
  await Product.list().then((res) => {
    products.value = res.data;
  });
}

onMounted(() => {
  list();
});

</script>

<style scoped>

</style>