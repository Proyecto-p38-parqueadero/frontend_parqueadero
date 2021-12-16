<template>
  <div class="welcome">
    <h1>
      ¡Bienvenido <span> </span>!
    </h1>
  </div>

<div class="vehiculoByplaca">
    <div class="container_vehiculoByplaca">
      <h2>Consultar vehículo</h2>

      <form v-on:submit.prevent="vehiculoByplaca">
        <div class="form-outline mb-3">
          <input
            type="text"
            v-model="placa"
            id="placa"
            class="form-control"
            placeholder="PLaca a consultar"
          />
        </div>
      <div><h3>Placa consultada:</h3></div>
      <div class="estilo1"><li>{{vehiculoByplaca.placa}}</li></div>
      <div><h3>Propietario:</h3></div>
      <div class="estilo1"><li>{{vehiculoByplaca.propietario}}</li></div>
      <div><h3>Fecha Ingreso</h3></div>
      <div class="estilo1"><li>{{vehiculoByplaca.fecha_ingreso}}</li></div>
      
      </form>
    
    </div>
  </div>
</template>

<script>
 import gql from 'graphql-tag';
  export default {
    name: "vehiculoByplaca",
     data: function(){
            return {
                
                    placa : "abc123",
            }
        },
   apollo: {
     vehiculoByplaca: {
       query: gql`
        query Query($placa: String!) {
  vehiculoByplaca(placa: $placa) {
    placa
    propietario
    fecha_ingreso
  }
    }`,  variables(){
          return{
       
         placa: this.placa
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

.estilo1 {
font-family: sans-serif;
font-size: 18px;
font-weight: 400;
color: #ffffff;
background: #889ccf;
margin: 0 0 25px;
overflow: hidden;
padding: 20px;
size: 500px;
}
</style>
