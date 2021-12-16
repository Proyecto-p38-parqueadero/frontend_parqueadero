<template>
  <div class="signUp_user">
    <div class="container_signUp_user">
      <img class="Logo" src="@/assets/parkinglogo.png" alt="Logo" width="80" />
      <br />
      <h2>Registrarse</h2>

      <br />

      <form v-on:submit.prevent="signUpUser">
        <div class="form-group">
          <label for="username">Usuario</label>
          <input
            type="text"
            v-model="user.username"
            class="form-control"
            id="username"
            placeholder="Enter Username"
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            v-model="user.password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>

        <div class="form-group">
          <label for="name">Nombre</label>
          <input
            type="text"
            v-model="user.name"
            class="form-control"
            id="name"
            placeholder="Enter name"
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
        <br />
        <button type="submit" class="btn btn-primary">Registrarme</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: "SignUp",

  data: function () {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        email: "",
      },
    };
  },

methods: {
    signUpUser: async function () {
      await this.$apollo.mutate({

        mutation: gql`
        mutation Mutation($userInput: SignUpInput) {
        signUpUser(userInput: $userInput) {
              refresh
              access
    
  }
} ` ,
        variables: {
          userInput: this.user
        }

      })
          {
                    
          this.$router.push({ name: "inicio" })
          }
        alert("Usuario Creado correctamente")
      
    },
  },
};

</script>

<style>
/*
.signUp_user {
  margin: 0%;
  padding: 0%;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container_signUp_user {
  background-color: #c2bcb5;
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

.signUp_user form {
  color: #136fb5;
}

.signUp_user input {
  height: 40px;
  width: 100%;

  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #136fb5;
}

.signUp_user button {
  color: #fdfaf6;
  background: #136fb5;
}

.signUp_user button:hover {
  color: #0a150c;
  background: #8bac97;
  border: 0;
*/
</style>
