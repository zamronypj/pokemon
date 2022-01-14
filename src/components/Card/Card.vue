<template>
    <div class="p-4">
        <div><img :src="pokemon.images.small"></div>
        <div>
            <div class="flex mt-2 mb-2">
                <div class="text-lg font-bold">{{ pokemon ? pokemon.name : '-' }}</div>
            </div>
            <div class="flex items-center justify-between">
                <div>HP</div>
                <div class="text-blue-900">{{ pokemon? pokemon.hp : '-'}}</div>
            </div>
            <div class="flex items-center justify-between">
                <div>Rarity</div>
                <div class="text-blue-900">{{ pokemon ? pokemon.rarity : '-' }}</div>
            </div>
            <div class="flex items-center justify-between">
                <div>Type</div>
                <div class="text-blue-900">{{ pokemon && pokemon.types ? pokemon.types.join(', ') : '-'}}</div>
            </div>
            <div class="flex items-center justify-between">
                <div>Set</div>
                <div class="text-blue-900">{{ pokemon && pokemon.set ? pokemon.set.name : '-'}}</div>
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
