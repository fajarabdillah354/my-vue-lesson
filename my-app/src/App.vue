<script setup>
// import CompositionApi from "./components/CompositionApi.vue";
import MainButton from "./components/MainButton.vue"

// using composition API
// import Composition from "./components/CompositionApi.vue";

// using options API, dengan tipi local scope
import OptionsApi from "./components/OptionsApi.vue";
import TextInterpolitan from "./components/TextInterpolitan.vue";


// kita bisa menambahkan variabel lalu memasukakkannya ke dalam tag template dan memanggillnya di dalam  {{ name }}  dengna 2 kurung kurawal
//dengan kata lain kita bisa menambahkan logic apapun yang kita mau
const name = "fajar abdillah ahmad"
</script>

<template>
    <!-- karna menggunakan scope global, maka kita tidak perlu import lagi di component filenya, cukup memanggil  -->
    <CompositionApik/>


    <OptionsApi/>

    <h1>HELLO WELCOME TO MY LEARN VUE</h1>
    <h3>this is my first application with Vue</h3>
    <p>{{ name }}</p>
    <MainButton></MainButton>
    <MainButton></MainButton>

    <!-- //kita juga bisa menggunakan self closing state -->
    <MainButton />

    <div>
      <TextInterpolitan/>
    </div>
</template>

<style scoped></style>







