<script setup>
  const buttonDisable = true

  //atau jika ada banyak value yuang harus diubah kita bisa menggunakan object

  const buttonAttr = {
    disabled: true,
    class: 'text4l flex-col-3'
  }

</script>

<template>
    <button v-bind="buttonAttr">Button</button>
</template>

<style scoped></style>
