<template>
  <NavBarVue />
  <router-view />
</template>

<script>
import NavBarVue from "./modules/components/NavBar.vue";

export default {
  components: {
    NavBarVue,
  },
};
</script>

<style>
#app {
  font-family: Consolas, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 80px;
}

html, body {
  background: rgb(159, 189, 246);
}

.containerForm {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.datos {
  display: flex;
  flex-direction: column;
  width: 30%;
  background: cornflowerblue;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
}

input {
  height: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-inline: 10px;
  overflow: hidden;
  text-align: justify;
  font-size: 1.2vw;
}

label {
  text-align: left;
  color: white;
  font-weight: bold;
  font-size: 1.2vw;
}

table { 
  width: 100%;
  background: white;
}

button {
  width: 10%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1.2vw;
  cursor: pointer;
}

button:hover {
  background: rgb(0, 76, 219);
  color: white;
}

#token {
  height: 70px;
}
</style>
