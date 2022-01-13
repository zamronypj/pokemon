<template>
    <div>
        <h1>Pokemon</h1>
        <div v-for="apokemon in pokemons" :key="apokemon.id">
            <Card :pokemon="apokemon"></Card>
        </div>
    </div>
</template>

<style scoped>
</style>

<script src="./Home.js"></script>