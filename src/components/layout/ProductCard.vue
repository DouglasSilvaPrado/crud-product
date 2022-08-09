<template>
    <div class="card h-100 mt-5" >
        <img :src="props.image" class="card-img-top" :alt="props.name" />
        <div class="card-body">
            <h5 class="card-title text-center mb-4">{{props.description}}</h5>
            <p class="card-text-secondary card-text-line-through">R${{total}}</p>
            <p class="card-text-primary">R$ {{props.price}}</p>
            <p class="card-text-secondary">À vista no PIX</p> 
        </div>
        <button class="card-btn btn mb-3">Adicionar ao carrinho</button> 
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


export interface Props {
    id: number | null;
    image: string;
    name: string;
    description: string;
    qtd: number;
    price: number;
    type: string;
}

const props = withDefaults(defineProps<Props>(), {
    id: null,
    image: "",
    name: "",
    description: "",
    qtd: 0,
    price: 0,
    type: ""
})

const total = computed(() => {
    return (props.price + (props.price * 0.15)).toFixed(2)
})

</script>

<style scoped >
.card {
    display: flex;
    border: none;
    box-shadow: rgb(40 41 61 / 8%) 0px 0px 1px, #60617029 0px 0.5px 2px;
}
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px #0000001f, 0 4px 8px rgba(0, 0, 0, .06);
    transition: 0.8s;
}
.card-body {
    padding-bottom: 0px;
}
.card-img-top {
    max-height: 200px;
}
.card-text-primary{
    font-size: 1.5rem;
    margin-bottom: 0px;
    color: #ff6500;
    font-weight: 700;
}
.card-text-secondary{
    font-size: 0.8rem;
    color: #7f858d;  
}
.card-text-line-through{
    text-decoration: line-through;
}
.card-btn{
    bottom: 0px;
    color: #ff6500;
    border-color: #ff6500;
    background: none;
}

.card-btn:hover{
    transition: none;
    background: #ff6500;
    color: #fff;
    border-color: #fff;
}

</style>