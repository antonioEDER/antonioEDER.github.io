const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "sobre-mim", component: () => import("pages/Sobre.vue") },
      { path: "o-que-eu-faco", component: () => import("pages/OqueEuFaco.vue") },
      { path: "onde-trabalhei", component: () => import("pages/OndeTrabalheio.vue") },
      { path: "portfolio", component: () => import("pages/Portfolio.vue") },
      { path: "cursos", component: () => import("pages/Cursos.vue") },
      { path: "videos", component: () => import("pages/Videos.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
