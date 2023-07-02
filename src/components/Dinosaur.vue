<template>
    <div>
        Name: {{ dinosaurState.dinosaur.name }}
        <br>
        Description: {{ dinosaurState.dinosaur.description }}
    </div>
</template>
<script setup lang="ts">
import {useAppStateStore} from '../store'
const dinosaurState = useAppStateStore()

</script>
<style lang="">
    
</style>