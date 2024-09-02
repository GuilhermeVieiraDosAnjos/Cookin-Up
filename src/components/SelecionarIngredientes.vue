<script lang="ts">
import { obterCategorias } from "@/http/index";
import type ICategoria from "@/interfaces/ICategorias";
import CardCategoria from "./CardCategoria.vue";
import MainButton from "./MainButton.vue";

export default {
  data() {
    return {
      categorias: [] as ICategoria[],
    };
  },

  async created() {
    this.categorias = await obterCategorias();
  },
  components: { CardCategoria, MainButton },
  emits: ['adicionarIngrediente', 'removerIngrediente', 'buscarReceitas']
};
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita :
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategoria 
          :categoria="categoria"
          @remover-ingrediente='$emit("removerIngrediente", $event)'
          @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
         />
      </li>
    </ul>

    <p class="paragrafo dica">
      *Atenção consiremos que voce tem em casa sal, pimenta e água.
    </p>

    <MainButton texto="Buscar Receitas!" @click="$emit('buscarReceitas')" />
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
