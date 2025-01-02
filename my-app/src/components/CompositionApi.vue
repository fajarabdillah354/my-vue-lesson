<template>
  <div>
    <!-- @click adalah event handler -->
    <button @click="sayHello()">press this</button>
  </div>
</template>

<script setup>

  /**
   * ciri lainya dari compositions
   * 1. programatik
   * 2. fungsi dalam setup
   */

  const hello = "fajar abdillah ahmad";

  //ciri dari composition programming seperti functional programming
  function sayHello(){
    console.log(hello)
  }
</script>

<style lang="scss" scoped>

</style>
