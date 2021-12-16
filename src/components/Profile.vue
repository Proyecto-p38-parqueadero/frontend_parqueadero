<template>
  <div id ="profile" class="nav">
    <h1>
      ¡Bienvenido <span>  </span>!
      <nav>
  <button type= "submit" class="cerrar sesión" v-on:click="RegistarVehiculo" 
  >Cerrar sesión </button></nav>
    </h1>
  </div>

  <div class="bloque">
    <div class="blq_items">
      <button type="button" class="btn btn-primary" v-on:click="park">
        <img
          alt="Logoapp"
          src="../assets/parqueadero.png"
          class="img-fluid"
          width="100"
          height="100"
        />
        <h3>Parqueadero</h3>
      </button>
    </div>
    <div class="blq_items">
      <button type="button" class="btn btn-primary" v-on:click="cars">
        <img
          alt="Logoapp"
          src="../assets/vehiculo.png"
          class="img-fluid"
          width="100"
          height="100"
        />
        <h3>Vehiculo</h3>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",

  data: function () {
    return {
      username: localStorage.getItem("username") || "none",
    };
  },


methods: {
    park: function(){

      this.$router.push({ name: "IntermedioParqueadero" })
    },

    cars: function(){

      this.$router.push({ name: "IntermedioCarro" })
    },
    RegistarVehiculo: function(){

      this.$router.push({ name: "inicio" })
    }

}
}
</script>

<style>
.logo_ho {
  margin-left: 10px;
  margin-top: -135px;
  position: absolute;
  display: inline-block;
}

.welcome {
  color: #136fb5;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  position: relative;
}

.welcome h1 {
  font-size: 70px;
}

span {
  color: #e2ecf3;
  position: relative;
  font-style: italic;
}

.bloque {
  display: flex;
  margin-left: 270px;
  position: relative;
  margin-top: 50px;
}

.blq_items button {
  border: none;
  background: #136fb5;
  height: 200px;
  width: 200px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin: 100px;
}

.blq_items h3 {
  color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.blq_items img {
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.blq_items button:hover {
  color: #e5e7e9;
  background: #136fb5;
  border: 1px solid #136fb5;
}
.header button:hover {
  color: #0a150c;
  background: #8bac97;
  border: 0px;
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

</style>
