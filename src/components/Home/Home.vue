<template>
    <div class="p-4">
        <h1 class="p-4 text-2xl">Pokemon</h1>
        <Search />
        <div v-if="!loading" class="flex justify-around flex-wrap">
            <div class="m-2 border-slate-400 border-solid border rounded shadow-lg"
                v-for="pokemon in pokemons" :key="pokemon.id">
                <Card :pokemon="pokemon" :key="pokemon.id" />
            </div>

            <div v-if="!pokemons.length">
                No result for {{ query }}
            </div>
        </div>
        <div v-if="loading">Loading</div>
    </div>
</template>

<style scoped>
</style>

<script src="./Home.js"></script>