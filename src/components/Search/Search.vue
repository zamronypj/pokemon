<template>
    <div class="flex justify-center">
        <div class="flex mb-3">
            <div class="input-group relative flex items-stretch w-full m-1">
                <input
                    :value="query"
                    @input="setQuery"
                    type="search"
                    class="form-control
                        relative
                        flex-auto
                        min-w-0
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white
                        border border-solid
                        border-gray-300
                        rounded
                        m-0
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none"
                    placeholder="Search name"
                >
            </div>

            <!--
                Should use vue-select but cannot due it does not yet support vue 3
                So we use plain HTML
            -->
            <select class="form-select
                    appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white
                    border
                    border-solid
                    border-gray-300
                    rounded
                    m-1
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none"
                    :value="type"
                    @change="setType"
                    placeholder="Select type">
                <option v-for="atype in pokemonTypes || []" :key="atype">{{ atype }}</option>
            </select>

            <select class="form-select
                    appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white
                    border
                    border-solid
                    border-gray-300
                    rounded
                    m-1
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none"
                    :value="rarity"
                    @change="setRarity">
                <option v-for="ararity in pokemonRarities || []" :key="ararity">{{ ararity }}</option>
            </select>

            <PokemonSet />
        </div>
    </div>
</template>

<style scoped>
</style>

<script src="./Search.js"></script>
