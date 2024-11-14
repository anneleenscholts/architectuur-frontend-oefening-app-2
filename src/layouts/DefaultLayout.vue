<!-- De gedeelde layout van alle pagina's -->

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div>
        <Header />
        <main>
            <RouterView />
        </main>
    </div>
</template>