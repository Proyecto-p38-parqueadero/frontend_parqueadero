<template>
  <div class="welcome">
    <h1>
      ¡Bienvenido <span> </span>!
    </h1>
  </div>

<div class="parqueaderoByUsername">
    <div class="container_parqueaderoByUsername">
      <h2>Consultar Parqueadero</h2>

      <form v-on:submit.prevent="parqueaderoByUsername">
        <div class="form-outline mb-3">
          <input
            type="text"
            v-model="parqueaderoByUsernameId"
            id="parqueaderoByUsernameId"
            class="form-control"
            placeholder="Parqueadero a consultar"
          />
        </div>
      <div>Parqueadero Consultado:</div>
      <div>{{parqueaderoByUsernameId}}</div>

      
      </form>
    
    </div>
  </div>
</template>

<script>
 import gql from 'graphql-tag';
  export default {
    name: "parqueaderoByUsernameId",
     data: function(){
            return {
                
                    parqueaderoByUsernameId : 2,
            }
        },
   apollo: {
     ParqueaderoByUsername: {
       query: gql`
        query ParqueaderoByUsername($parqueaderoByUsernameId: Int!) {
     parqueaderoByUsername(id: $parqueaderoByUsernameId) {
    administrador
    nombre
    telefono
    direccion
    email
    ciudad
  }
}`,  variables(){
          return{
       
         parqueaderoByUsernameId: parseInt(this.parqueaderoByUsernameId)
          };
       }
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
