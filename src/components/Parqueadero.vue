<template>
  <div class="Parqueadero">
    <div class="container_Parqueadero">
      <img class="Logo" src="@/assets/parqueadero.png" alt="Logo" width="100" />
      <br />
      <h2>Registrar Parqueadero</h2>

      <br />

      <form v-on:submit.prevent="registrarParqueadero">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            v-model="user.nombre"
            class="form-control"
            id="nombre"
            placeholder="Ingresar Nombre"
          />
        </div>

        <div class="form-group">
          <label for="administrador">Administrador</label>
          <input
            type="administrador"
            v-model="user.administrador"
            class="form-control"
            id="administrador"
            placeholder="Ingresar Administrador"
          />
        </div>

        <div class="form-group">
          <label for="telefono">Telefono</label>
          <input
            type="text"
            v-model="user.telefono"
            class="form-control"
            id="telefono"
            placeholder="Ingresar Telefono"
          />
        </div>

        <div class="form-group">
          <label for="direccion">Direccion</label>
          <input
            type="text"
            v-model="user.direccion"
            class="form-control"
            id="direccion"
            placeholder="Ingresar Direccion"
          />
        </div>
        <div class="form-group">
          <label for="name">Email</label>
          <input
            type="email"
            v-model="user.email"
            class="form-control"
            id="email"
            placeholder="Ingresar email"
          />
        </div>
        <div class="form-group">
          <label for="ciudad">Ciudad</label>
          <input
            type="text"
            v-model="user.ciudad"
            class="form-control"
            id="ciudad"
            placeholder="Ingresar Ciudad"
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
  name: "Parqueadero",

  data: function () {
    return {
      user: {
        nombre: "",
        administrador: "",
        telefono: "",
        direccion: "",
        email: "",
        ciudad: "",
      },
    };
  },

methods: {

  registrarParqueadero: async function(){
    await this.$apollo.mutate({

      mutation:gql`mutation Createparqueaero($parqueaderoCreate: ParkingCreate!) {
              createparqueaero(ParqueaderoCreate: $parqueaderoCreate) {
                nombre
                administrador
                telefono
                direccion
                email
                ciudad
  }
}`,
      variables:{
          parqueaderoCreate: this.user

      }

      })
          {
                    
          alert("Parqueadero Creado correctamente")
               this.$router.push({ name: "profile" })
          }
        
      
    },
  },
};




</script>

<style>
.Parqueadero {
  margin: 0%;
  padding: 0%;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container_Parqueadero {
  background-color: #136fb5;
  border-radius: 10px;

  width: 450px;

  height: 720px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Parqueadero h2 {
  color: #eff2f5;
}

.Parqueadero form {
  color: #136fb5;
}

.Parqueadero input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #136fb5;
}

.Parqueadero button {
  color: #136fb5;
  background: #f1f3f5;
  height: 40px;
  width: 70%;
}

.Parqueadero button:hover {
  color: #0a150c;
  background: #8bac97;
  border: 0;
}
</style>
