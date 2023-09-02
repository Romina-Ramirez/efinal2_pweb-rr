<template>
  <div class="containerForm">
    <h1>Token</h1>
    <div class="datos">
      <label for="">Semilla</label>
      <input v-model="semilla" type="text" />
      <label for="">Tiempo de vigencia</label>
      <input v-model="expiracion" type="number" />
      <label for="">Token</label>
      <input id="token" v-model="token" type="text" disabled />
    </div>
    <button @click="generarToken">Generar</button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/TokenCliente.js";

export default {
  data() {
    return {
      semilla: null,
      expiracion: null,
      token: null,
    };
  },
  methods: {
    async generarToken() {
      const objeto = {
        username: "RomiR",
        password: "Michis123",
        secret: this.semilla,
        expiration: this.expiracion,
      };

      const data = await obtenerTokenFachada(objeto);
      this.token = data;
    },
  },
};
</script>

<style>
</style>