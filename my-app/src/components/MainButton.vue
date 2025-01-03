<script setup>
  const buttonDisable = true

  const isLoading = true

  //atau jika ada banyak value yuang harus diubah kita bisa menggunakan object

  const buttonAttr = {
    disabled: isLoading,
    class: 'text4l flex-col-3'
  }


  //kita tidak bisa memasukan state kedalam data bind, misal {{ var 1 = 1}} atau  {{if (ok) { return message } }}
  //maka cukup gunakan ternery operator
  //kita juga bisa merender function ke dalam template, 
  const renderIsLoading = () => {
    if (isLoading) {
      return'Loading'
    } else {
      return'Submit'
    }
  }

</script>

<template>
    <button v-bind="buttonAttr">{{ renderIsLoading() }}</button>
</template>

<style scoped></style>
