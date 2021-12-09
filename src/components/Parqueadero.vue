<template>
  <div
    class="bg-green-two py-2 px-3 rounded w-50 d-flex justify-content-between"
  >
    <div class="d-flex align-items-center">
      <img src="@/assets/parqueadero.png" alt="" width="45" />
      <h3 class="text-green-one m-0">Parqueadero</h3>
    </div>
    <button @click="modalToggle" class="btn btn-green-one">Nuevo</button>
  </div>

  <Form ref="form" />
  <form class="text-black text-start" @submit.prevent="onSubmit">
    <div class="form-group my-2">
      <label class="py-1" for="name">Nombre</label>
      <input
        type="text"
        v-model="datos.name"
        class="form-control"
        id="name"
        placeholder="Enter name"
      />
    </div>
    <div class="form-group my-2">
      <label class="py-1" for="admistrador">Admistrador</label>
      <input
        type="text"
        v-model="datos.admistrador"
        class="form-control"
        id="admistrador"
        placeholder="Enter admistrador"
      />
    </div>
    <div class="form-group my-2">
      <label class="py-1" for="telefono">Telefono</label>
      <input
        type="number"
        v-model="datos.telefono"
        class="form-control"
        id="telefono"
        placeholder="Enter telefono"
      />
    </div>
    <div class="form-group my-2">
      <label class="py-1" for="precio">Precio</label>
      <input
        type="number"
        v-model="datos.precios"
        class="form-control"
        id="precio"
        placeholder="Enter precio"
      />
    </div>
    <div class="form-group my-2">
      <label class="py-1" for="direccion">Direccion</label>
      <input
        type="text"
        v-model="datos.direccion"
        class="form-control"
        id="direccion"
        placeholder="Enter dreccion"
      />
    </div>
    <div class="d-flex justify-content-center my-4">
      <button type="submit" class="btn btn-green-one">Guardar</button>
    </div>
  </form>
</template>

<script></script>
