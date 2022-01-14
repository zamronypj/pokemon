<template>
    <div class="p-4 flex justify-between">
        <h1 class="text-2xl">Pokemon</h1>
        <div class="flex justify-end">
            <span>{{ username }}</span>
            <span class="ml-1 underline text-blue-500 cursor-pointer" @click="logout">Logout</span>
        </div>
    </div>

</template>

<script src="./Heading.js">
</script>