<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h3>Calculadora Milhas</h3>
      </div>

    </v-app-bar>

    <v-main>
      <Calculadora/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Calculadora from './components/Calculadora.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Calculadora,
  },

  data: () => ({
    //
  }),
});
</script>
