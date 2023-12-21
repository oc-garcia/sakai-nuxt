import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    // Verifica se está no lado do cliente
    const publicRoutes = [
      "/login",
      "/register",
      "/forgot-password",
      "/reset-password",
      "/auth-token",
    ];

    const token = localStorage.getItem("token");
    console.log(token);
    console.log(to._route.fullPath);

    if (token == null && !publicRoutes.includes(to._route.fullPath)) {
      console.log(token, to._route.fullPath);
      navigateTo("login");
    }
  }
});
