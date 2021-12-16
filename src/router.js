import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from "./components/Inicio.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import Profile from "./components/Profile.vue";
import Parqueadero from "./components/Parqueadero.vue";
import Vehiculo from "./components/Vehiculo.vue";
import IntermedioParqueadero from "./components/IntermedioParqueadero.vue";
import ConsultasParqueadero from "./components/ConsultasParqueadero.vue";
import IntermedioCarro from "./components/IntermedioCarro.vue";
import ConsultasCarros from "./components/ConsultasCarros.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/IntermedioParqueadero",
    name: "IntermedioParqueadero",
    component: IntermedioParqueadero,
  },
  {
    path: "/IntermedioCarro",
    name: "IntermedioCarro",
    component: IntermedioCarro,
  },
  {
    path: "/ConsultasCarros",
    name: "ConsultasCarros",
    component: ConsultasCarros,
  },
  {
    path: "/ConsultasParqueadero",
    name: "ConsultasParqueadero",
    component: ConsultasParqueadero,
  },
  {
    path: "/user/login",
    name: "login",
    component: Login,
  },
  {
    path: "/user/signup",
    name: "signUp",
    component: SignUp,
  },

  {
    path: "/user/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/parqueadero",
    name: "parqueadero",
    component: Parqueadero,
  },
  {
    path: "/vehiculo",
    name: "vehiculo",
    component: Vehiculo,
  },
  
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
