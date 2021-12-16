<template>
  <div class="welcome">
    <h1>
      ¡Bienvenido <span>  </span>!
    </h1>
  </div>

  <div class="bloque">
    <div class="blq_items">
      <button type="button" class="btn btn-primary" v-on:click="RegistarVehiculo">
        <img
          alt="Logoapp"
          src="../assets/parqueadero.png"
          class="img-fluid"
          width="100"
          height="100"
        />
        <h2>Registrar Carro</h2>
      </button>
    </div>
    <div class="blq_items">
      <button type="button" class="btn btn-primary" v-on:click="ConsultasVehiculo">
        <img
          alt="Logoapp"
          src="../assets/vehiculo.png"
          class="img-fluid"
          width="100"
          height="100"
        />
        <h2>Consultas Carro</h2>
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
    RegistarVehiculo: function(){

      this.$router.push({ name: "vehiculo" })
    },

    ConsultasVehiculo: function(){

      this.$router.push({ name: "ConsultasCarros" })
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
</style>
