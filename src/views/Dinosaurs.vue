<template >
    <div class="container">
        <div v-for="(dinosaur, index) in dinosaurs" :key="index" class="dinosaur-wrapper">
            <span class="dinosaur">
                <router-link :to="{ name: 'Dinosaur', params: { dinosaur: `${dinosaur.name.toLowerCase()}` } }">
                    <span @click="dinosaurState.setDinosaur(dinosaur.name, dinosaur.description)">
                        {{ dinosaur.name }}
                    </span>
                </router-link>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAppStateStore } from '../store'

const dinosaurs = ref([])

const dinosaurState = useAppStateStore()
const fetchDinosaurs = async function () {
    const res = await fetch('https://great-bee-79.deno.dev/api/')
    const dinosaurs = await res.json()
    return dinosaurs
}
onMounted(() => {
    console.log('Dinosaurs mounted')

    fetchDinosaurs().then((data) => {
        console.log(data)
        dinosaurs.value = data
    })
})



</script>
<style lang="css" scoped>
.dinosaur {}

.dinosaur-wrapper {
    display: inline-block;
    margin: 0.15rem 1rem;
    padding: 0.15rem 1rem;
}

.container {
    text-align: left;
}
</style>