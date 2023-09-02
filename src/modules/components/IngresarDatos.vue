<template>
  <div class="containerForm">
    <h1>Estudiante</h1>
    <div class="datos">
      <label for="">Token</label>
      <input id="token" v-model="token" type="text" />
      <label for="">Nombre</label>
      <input v-model="nombre" type="text" />
      <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
      <label for="">Cédula</label>
      <input v-model="cedula" type="text" />
    </div>
    <button @click="guardarEstudiante">Guardar</button>
  </div>
</template>

<script>
import { insertarEstudianteFachada } from "../helpers/EstudianteCliente";

export default {
  data() {
    return {
      token: null,
      nombre: null,
      apellido: null,
      cedula: null,
      lista: [],
    };
  },
  methods: {
    guardarEstudiante() {
      const estudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };
      
      const data = insertarEstudianteFachada(estudiante, this.token);

      this.lista.push(data);
    },
  },
};
</script>

<style>
</style>