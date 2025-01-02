<template>
  <div>
    <button @click="sayheey()">this is Options API</button>
  </div>
</template>

<script>


  /** Options API
    1. menggunakan pendekatan deklaratif berbasis kategori(data, methods, ...)
    2. menggunakan mixins atau extend
   */
  export default {
    data(){
      return {
        message: "hello fajar"
      }
    },

    methods: {
      sayheey(){
        console.log(this.message)
      }
    }

  }

</script>

<style lang="scss" scoped>

</style>
