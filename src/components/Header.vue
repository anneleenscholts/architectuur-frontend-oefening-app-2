<!-- Applicatie header -->

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
    <header class="app-header">
        <div class="logo">
            <h1>Mijn Shop</h1>
        </div>
        <nav>
            <ul>
                <li><button @click="router.push({ name: 'dashboard' })">Dashboard</button></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #364adb;
    color: #fff;
}

.logo h1 {
    margin: 0;
    font-size: 1.5rem;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
}

nav a {
    color: #fff;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}
</style>