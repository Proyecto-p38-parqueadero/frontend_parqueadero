<template>
  <div id="app" class="app">
    <div class="header">
      <router-link to="/"></router-link>
      <nav>
        <button v-if="session" v-on:click="loadUserHome">Inicio Admin</button>
        <button v-if="session" v-on:click="logOut">Cerrrar Sesión</button>
        <button v-if="!session" v-on:click="loadSignUp">Registrarme</button>
        <button v-if="!session" v-on:click="loadLogIn">Iniciar Sesión</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view />
    </div>
  </div>
</template>

<script>
 export default{
 methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth == false) this.$router.push({ name: "inicio" });
      else this.$router.push({ name: "profile" });
    },

    loadLogIn: function () {
      this.$router.push({ name: "login" });
    },

    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },

    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    

    completedLogIn: function (data) {
      alert("Autenticación Exitosa");
     
     if (data ==false)
       this.$router.post({ name: "profile" })
  //    this.verifyAuth();
    },

    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
  },
  created: function () {
    this.verifyAuth();
  },
};

</script>

<style>
body {
  height: 100%;
}

.app {
  background-image: url(./assets/fondo.jpg);
  background-blend-mode: darken;
  background-color: #0000006b;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;

  font-family: Quicksand, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 75px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header nav {
  height: 100%;
  width: 20%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 18px;
}

.header nav button {
  color: #fdfaf6;
  background: #136fb5;

  border: 0px;
  border-radius: 10px;
  padding: 10px 10px;
}

.header button:hover {
  color: #0a150c;
  background: #8bac97;
  border: 0px;
}
</style>
