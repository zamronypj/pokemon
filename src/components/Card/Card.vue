<template>
    <div class="p-4">
        <div><img :src="pokemon.images.small"></div>
        <div>
            <div class="flex mt-2 mb-2">
                <div class="text-lg font-bold">{{pokemon.name}}</div>
            </div>
            <div class="flex items-center justify-between">
                <div>HP</div>
                <div>{{pokemon.hp}}</div>
            </div>
            <div class="flex items-center justify-between">
                <div>Rarity</div>
                <div>{{pokemon.rarity}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>

export default {
    props : {
        pokemon: {
            type : Object,
            required : true
        }
    }
}
</script>
