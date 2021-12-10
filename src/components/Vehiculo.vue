<template>
  <div class="vehiculo">
    <div class="container_vehiculo">
      <img class="Logo" src="@/assets/vehiculo.png" alt="Logo" width="200" />
      <br />
      <h2>Registrar Vehiculo</h2>

      <br />

      <form v-on:submit.prevent="processVehiculo">
        <div class="form-group">
          <label for="Placa">Placa</label>
          <input
            type="text"
            v-model="user.Placa"
            class="form-control"
            id="Placa"
            placeholder="Enter Placa"
          />
        </div>

        <div class="form-group">
          <label for="Propietario">Propietario</label>
          <input
            type="Propietario"
            v-model="user.Propietario"
            class="form-control"
            id="Propietario"
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
export default {
  name: "Vehiculo",

  data: function () {
    return {
      user: {
        Placa: "",
        Propietario: "",
      },
    };
  },
};

/*methods: {
    processSignUp: function () {
      axios
        .post("https://av-api-p36.herokuapp.com/agencia/user/", this.user)
        .then((result) => {
          this.user = {
            username: "",
            password: "",
            name: "",
            email: "",
          };

          this.$router.push({ name: "LogIn" });
        })

        .catch((error) => {
          console.log(error);
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
*/
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
