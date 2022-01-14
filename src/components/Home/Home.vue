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
                No result for
                <span class="ml-1" v-if="query">Name: <span class="font-bold">{{ query }}</span></span>
                <span class="ml-1" v-if="type">Type: <span class="font-bold">{{ type }}</span></span>
                <span class="ml-1" v-if="rarity">Rarity: <span class="font-bold">{{ rarity }}</span></span>
            </div>
        </div>
        <div class="flex justify-center" v-if="loading">Loading..</div>

        <VueTailwindPagination
            v-if="!loading && pokemons.length && (total > 20)"
            :current="page"
            :total="total"
            :per-page="20"
            @page-changed="updatePage($event)"
        />
    </div>
</template>

<style scoped>
</style>

<script src="./Home.js"></script>