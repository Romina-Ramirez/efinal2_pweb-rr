<template>
  <IngresarDatosVue/>
  <br>
  <ListaEstudiantesVue />
</template>

<script>
import IngresarDatosVue from "../components/IngresarDatos.vue";
import ListaEstudiantesVue from "../components/ListaEstudiantes.vue";

export default {
  components: {
    ListaEstudiantesVue,
    IngresarDatosVue,
  },
};
</script>

<style>
</style>