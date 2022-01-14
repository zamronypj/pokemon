<template>
        <div class="relative w-full">
            <div class="input-group
                relative
                flex
                items-stretch
                w-full
                m-1">
                <div class="form-control
                        absolute
                        flex-auto
                        block
                        w-full
                        h-10
                        truncate
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white
                        border border-solid
                        border-gray-300
                        rounded
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none">{{ visibleQuery }}</div>

                <!-- input DOM is intentionally hidden,
                    query is watched and we need to be able
                    display full name of Pokemon set selected
                    by user.

                    But we can't set query with name of selected set
                    otherwise it will cause HTTP Pokemon set search triggered again.
                -->
                <input
                    v-model="query"
                    type="search"
                    class="form-control
                        relative
                        flex-auto
                        block
                        w-full
                        px-3
                        py-1.5
                        m-0
                        opacity-0"

                    :placeholder="selectedSet && selectedSet.name"
                >
            </div>

            <div v-if="showList" class="border border-solid border-slate-300 absolute bg-white p-4 w-80">
                <div class="cursor-pointer" v-for="aset in pokemonSets || []"
                    :key="aset.id"
                    @click="setSet(aset)"
                >{{aset.name}}</div>
            </div>
        </div>
</template>

<style scoped>

</style>

<script src="./PokemonSet.js"></script>