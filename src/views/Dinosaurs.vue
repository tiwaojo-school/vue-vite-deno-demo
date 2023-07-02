<template >
    <div>
        <div v-for="(dinosaur, index) in dinosaurs" :key="index">
            <span>
                <router-link :to="{name:'Dinosaur', params: {dinosaur: `${dinosaur.name.toLowerCase()}`}}">
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
import { storeToRefs } from 'pinia'


defineProps<{ msg?: string }>()
const count = ref(0)
const dinosaurs = ref([])

const dinosaurState = useAppStateStore()
// const {dinosaur} = storeToRefs(dinosaurState);

onMounted(() => {
    console.log('Dinosaurs mounted')
    
    const fetchDinosaurs = async function () {
        const res = await fetch('https://tiwaojo-school-musical-chainsaw-rj97vxjxpj9cx9jw-8000.preview.app.github.dev/api')
        const dinosaurs = await res.json()
        console.log(dinosaurs);
        
        return dinosaurs
    }

    fetchDinosaurs().then((data) => {
        console.log(data)
        dinosaurs.value = data
    })
})



</script>
<style lang="">
    
</style>