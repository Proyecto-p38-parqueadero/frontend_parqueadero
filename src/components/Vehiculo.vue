<template>
  <div class="vehiculo">
    <div class="container_vehiculo">
      <img class="Logo" src="@/assets/vehiculo.png" alt="Logo" width="200" />
      <br />
      <h2>Registrar Vehiculo</h2>

      <br />

      <form v-on:submit.prevent="Createvehiculo">
        <div class="form-group">
          <label for="placa">Placa</label>
          <input
            type="text"
            v-model="vehiculo.placa"
            class="form-control"
            id="placa"
            placeholder="Ingresar Placa"
          />
        </div>

        <div class="form-group">
          <label for="propietario">Propietario</label>
          <input
            type="propietario"
            v-model="vehiculo.propietario"
            class="form-control"
            id="propietario"
            placeholder="Enter Propietario"
          />
        </div>

        <br />
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  name: "Createvehiculo",

  data: function () {
    return {
      vehiculo: {
        placa:"",
        propietario:"",
      },
    };
  },

  methods:{
      car: function(){
              {
              
              this.$router.push({ name: "profile" })
               }
          alert("vehículo ingresado correctamente")

      },

    Createvehiculo: async function(){
       await this.$apollo.mutate(
        {
          mutation: gql`
                   mutation Createvehiculo($vehiculo: vehiculoCreate!) {
  createvehiculo(vehiculo: $vehiculo) {
    placa
    propietario
    fecha_ingreso
  }
}
  `,
    variables:{
      vehiculo: this.vehiculo
      }

    })

        {
                alert("vehículo ingresado correctamente")
                this.$router.push({ name: "profile" })
        }

    }

  }
};


</script>

<style>
.vehiculo {
  margin: 0%;
  padding: 0%;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container_vehiculo {
  background-color: #136fb5;
  border-radius: 10px;

  width: 350px;

  height: 520px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.signUp_user h2 {
  color: #136fb5;
}

.vehiculo form {
  color: #136fb5;
}

.vehiculo input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #136fb5;
}

.vehiculo button {
  color: #fdfaf6;
  background: #136fb5;
}

.vehiculo button:hover {
  color: #0a150c;
  background: #8bac97;
  border: 0;
}
</style>
