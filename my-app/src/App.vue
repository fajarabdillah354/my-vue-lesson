<script setup>
import MainButton from "./components/MainButton.vue"

// using composition API
import Composition from "./components/CompositionApi.vue";
// using options API
import OptionsApi from "./components/OptionsApi.vue";



// kita bisa menambahkan variabel lalu memasukakkannya ke dalam tag template dan memanggillnya di dalam  {{ name }}  dengna 2 kurung kurawal
//dengan kata lain kita bisa menambahkan logic apapun yang kita mau
const name = "fajar abdillah ahmad"
</script>

<template>

    <Composition/>
    <OptionsApi/>

    <h1>HELLO WELCOME TO MY LEARN VUE</h1>
    <h3>this is my first application with Vue</h3>
    <p>{{ name }}</p>
    <MainButton></MainButton>
    <MainButton></MainButton>
    <MainButton /> //kita juga bisa menggunakan self closing state
</template>

<style scoped></style>







