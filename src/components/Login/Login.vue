<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 class="text-2xl font-bold text-center">Login to your account</h3>

            <div v-if="!!errMessage" class="m-2 flex items-center justify-center text-red-600">
                {{errMessage}}
            </div>

            <form v-on:submit.prevent="login">
                <div>
                    <div class="mt-4 " :class="{ error: validator.username.$errors.length }">
                        <label class="block">Username
                            <input type="text"
                                placeholder="Username"
                                v-model="username"
                                class="w-full
                                    px-4
                                    py-2
                                    mt-2
                                    border
                                    rounded-md
                                    focus:outline-none
                                    focus:ring-1
                                    focus:ring-blue-600">
                        </label>
                        <div class="input-errors" v-for="error of validator.username.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                    <div class="mt-4" :class="{ error: validator.password.$errors.length }">
                        <label class="block" >Password
                            <input type="password"
                                placeholder="Password"
                                v-model="password"
                                class="w-full
                                px-4
                                py-2
                                mt-2
                                border
                                rounded-md
                                focus:outline-none
                                focus:ring-1
                                focus:ring-blue-600">

                        </label>
                        <div class="input-errors" v-for="error of validator.password.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="flex items-baseline justify-between">
                        <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

    .error label input {
        @apply border-red-500;
    }

    .error .input-errors .error-msg {
        @apply text-xs text-red-500;
    }

</style>

<script src="./Login.js"></script>