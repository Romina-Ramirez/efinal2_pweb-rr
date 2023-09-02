<template>
  <div class="container">
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/generarToken">Generar Token</router-link>
    <router-link to="/guardarEstudiante">Guardar Estudiante</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  color: white;
}

a {
  padding: 10px 80px;
}

.container {
  background: #4868fa;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2.5px solid #091645;
}
</style>