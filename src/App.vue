<script lang="ts">
import Banner from "./components/Banner.vue";
import ConteudoPrincipal from './components/ConteudoPrincipal.vue'
import Rodape from "./components/Rodape.vue";
export default {
  components : {Banner :Banner,
    ConteudoPrincipal: ConteudoPrincipal,
    Rodape : Rodape
  }
}
</script>

<template>  
  <Banner />
  <ConteudoPrincipal />
  <Rodape />
</template>

<!-- O scoped do style no vue serve para aplicar o estilo em questão somente no escopo arquivo atual -->
<style scoped>

</style>