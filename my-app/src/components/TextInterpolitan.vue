<template>


  <div>
    <!-- data bind yang ada di dalam double kurung kurawal {{  }} dinamakan mustache syntax, bagian dalam adalah data yang ingin di render atau di bind -->
    <h1>{{ greting }}</h1>



    <h2 :id="blogId" v-bind:class="blogClass">{{ blog }}</h2>


    <!-- jika kita ingin tetep mem binding raw html kedalam maka kita menggunakan directive dengan v-html -->
    <div>
      <h2 v-html="blog"></h2>
    </div>


  </div>
</template>

<script setup>


  /**
   * kita bisa melakukan binding data di dalam kurung kurawal
   * ini dinamkan text interpolition
   * kekurangan dari text interpolition kita tidak bisa membinding data yang sifat atau bentuknya raw html
   * kita bisa mengkombinasikan directive dengan mustache
   */

  const greting= "hello ";



  // pada mustache raw html tidak akan di jalankan
  const blog = '<p style="color:red;">ini adalah blog post</p>'

  // kita juga bisa menggunakan v-bind:id="" untuk mendefinisikan id pada element html kita
  // kalo kita ingin menggunakan shortcut cukup tuliskan :id=""
  const blogId = "blog1"

  // kita juga bisa menggunakan v-bind:class untuk mendefinisikan class pada element html kita
  const blogClass = 'text-2xl flex flex-col'


</script>

<style lang="scss" scoped>

</style>
