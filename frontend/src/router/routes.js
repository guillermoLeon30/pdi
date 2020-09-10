
const routes = [
  {
    path: '/',
    component: () => import('layouts/PrincipalLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/breakers', component: () => import('pages/AsignarBreakers/AsignacionBreakers.vue') },
      { path: '/breakers/:idCliente/asignacion', component: () => import('pages/AsignarBreakers/Asignacion.vue'), props: true },
      { path: '/configuracion/clientes', component: () => import('pages/configuracion/Clientes/Clientes.vue') },
      { path: '/configuracion/clientes/:id/racks', component: () => import('pages/configuracion/Clientes/Racks.vue'), props: true },
      { path: '/configuracion/clientes/:idCliente/racks/:idRack/breakers', component: () => import('pages/configuracion/Clientes/Breakers.vue'), props: true },
      { path: '/configuracion/pdis', component: () => import('pages/configuracion/Pdi/Pdi.vue') },
      { path: '/configuracion/pdis/:id/canales', component: () => import('pages/configuracion/Pdi/Canales.vue'), props: true }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
