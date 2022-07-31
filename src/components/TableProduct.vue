<template>
    <!-- table -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Valor</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.qtd }}</td>
          <td>{{ product.value }}</td>
          <td>
            <button @click="$emit('onUpdate', product)" class="btn btn-info text-white mx-2">Update</button>
            <button @click="remove(product)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import IProduct from "../interfaces/IProduct";
import Product from "../services/product";

let products = ref<IProduct[]>([]);

const emit = defineEmits<{
  (e: 'onUpdate', product: IProduct): void;
}>()

async function list() {
  await Product.list().then((res) => {
    products.value = res.data;
  });
}

async function remove(product: IProduct) {
  await Product.delete(product).then((res) => {
    list()
  });
}
  
onMounted(() => {
  list();
});

</script>

<style scoped>

</style>