<script setup lang="ts">
import { ref } from "vue";
import IProduct from "../interfaces/IProduct";
import Product from "../services/product";
import TableProduct from "./TableProduct.vue";

const product = ref<IProduct>({
  id: null,
  name: "",
  qtd: 0,
  value: 0
});

function clean() {
  product.value = {
    id: null,
    name: "",
    qtd: 0,
    value: 0
  };
  window.location.reload();
}


async function save(){
  if(product.value.id){
    await Product.update(product.value).then((res) => {});
  }else{
    await Product.create(product.value).then((res) => {});
  }
  clean()
}

function update(prod: IProduct) {
  product.value.id = prod.id;
  product.value.name = prod.name;
  product.value.qtd = prod.qtd;
  product.value.value = prod.value;
}

</script>

<template>
  <div class="container my-5">
    <!-- form -->

    <form @submit.prevent="save" class="my-3">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="product.name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="qtd" class="form-label">QTD</label>
        <input
          type="text"
          class="form-control"
          id="qtd"
          v-model="product.qtd"
          required
        />
      </div>
      <div class="mb-3">
        <label for="value" class="form-label">Valor</label>
        <input
          type="text"
          class="form-control"
          id="value"
          v-model="product.value"
          required
        />
      </div>

      <button type="submit" class="btn btn-success">Salvar</button>
    </form>
  </div>

   <TableProduct @on-update="update"/>
</template>

