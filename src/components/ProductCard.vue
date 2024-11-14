<!-- Tonen van individuele product info -->

<script lang="ts" setup>
import type { Product } from './models';
defineProps<{ product: Product }>()
</script>

<template>
    <div class="product-card">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Prijs: €{{ product.price }}</p>
    </div>
</template>