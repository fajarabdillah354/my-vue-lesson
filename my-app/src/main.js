import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import CompositionApi from "./components/CompositionApi.vue"

const app = createApp(App)


/**
 * saat menggunakan global scope, maka kita tidak perlu import dalam component filenya
 * cukup di deklarasikan di kelas App Mainnya saja, lalu tinggal di panggil nama component yang mau di include kedalam component lainnya
 * kita juga bisa menggunakan format API dalam penulisan global scoper component
  app
  .component("CompositionApik", CompositionApi)
  .component("AnotherComponent", AnotherComponent)
 */


app
  .component("CompositionApik", CompositionApi)




app.mount("#app")
