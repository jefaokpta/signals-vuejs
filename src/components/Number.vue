<script setup>

import {computed} from 'vue'
import {getNumber, increment} from "@/soma.service.js";

const numero = computed(() => getNumber())

const doIncrement = () => increment()

</script>

<template>
  <div>
    <h1>numero é: {{numero}}</h1>
    <button @click="doIncrement">Incrementar</button>
  </div>
</template>

<style scoped>

</style>