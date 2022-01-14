<template>
    <div class="p-4">
        <Heading />
        <Search />
        <div v-if="!loading">
            <div class="text-center" >
                <span v-if="!pokemons.length">No result for</span>
                <span v-if="pokemons.length">Result for</span>

                <span class="ml-1" >Name: <span class="font-bold">{{ query ? query : '-' }}</span></span>
                <span class="ml-1">Type: <span class="font-bold">{{ type ? type : '-' }}</span></span>
                <span class="ml-1">Rarity: <span class="font-bold">{{ rarity ? rarity : '-' }}</span></span>
                <span class="ml-1">Set: <span class="font-bold">{{ selectedSet && selectedSet.id ? selectedSet.name : '-' }}</span></span>
            </div>

            <div class="flex justify-around flex-wrap">
                <div class="m-2 border-slate-400 border-solid border rounded shadow-lg"
                    v-for="pokemon in pokemons || []" :key="pokemon.id">
                    <Card  :pokemon="pokemon" :key="pokemon.id" />
                </div>
            </div>
        </div>
        <div class="flex justify-center" v-if="loading">Loading..</div>

        <VueTailwindPagination
            class="mt-4"
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