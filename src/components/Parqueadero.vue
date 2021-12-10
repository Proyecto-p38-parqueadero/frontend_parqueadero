<template>
  <div class="Parqueadero">
    <div class="container_Parqueadero">
      <img class="Logo" src="@/assets/parqueadero.png" alt="Logo" width="100" />
      <br />
      <h2>Registrar Parqueadero</h2>

      <br />

      <form v-on:submit.prevent="processParqueadero">
        <div class="form-group">
          <label for="Nombre">Nombre</label>
          <input
            type="text"
            v-model="user.Nombre"
            class="form-control"
            id="Nombre"
            placeholder="Enter Nombre"
          />
        </div>

        <div class="form-group">
          <label for="Administrador">Administrador</label>
          <input
            type="Administrador"
            v-model="user.Administrador"
            class="form-control"
            id="Administrador"
            placeholder="Enter Administrador"
          />
        </div>

        <div class="form-group">
          <label for="Telefono">Telefono</label>
          <input
            type="text"
            v-model="user.Telefono"
            class="form-control"
            id="Telefono"
            placeholder="Enter Telefono"
          />
        </div>

        <div class="form-group">
          <label for="Direccion">Direccion</label>
          <input
            type="text"
            v-model="user.Direccion"
            class="form-control"
            id="Direccion"
            placeholder="Enter Direccion"
          />
        </div>
        <div class="form-group">
          <label for="name">Email</label>
          <input
            type="email"
            v-model="user.email"
            class="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="Ciudad">Ciudad</label>
          <input
            type="text"
            v-model="user.Ciudad"
            class="form-control"
            id="Ciudad"
            placeholder="Enter Ciudad"
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
  name: "Parqueadero",

  data: function () {
    return {
      user: {
        Nombre: "",
        Administrador: "",
        Telefono: "",
        Direccion: "",
        email: "",
        Ciudad: "",
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
