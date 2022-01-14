<template>
    <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
            <div class="input-group relative flex items-stretch w-full mb-4">
                <input :value="query" @input="setQuery" type="search"
                    class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script src="./Search.js"></script>
