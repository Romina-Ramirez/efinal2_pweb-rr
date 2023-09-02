<template>
  <div>
    <div>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cédula</th>
        </tr>
        <tr v-for="item in lista" :key="item">
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>{{ item.cedula }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lista: [],
  },
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      cedula: null,
      lista: [],
    };
  },
};
</script>

<style>
</style>