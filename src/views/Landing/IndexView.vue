<template>
  <div
    class="landing min-h-screen w-full flex flex-col justify-center items-center"
  >
    <div class="min-h-screen bg-white min-w-[400px] text-center border-2 p-5">
      <h1 class="landing-title font-bold text-sky-500 text-2xl">Bienvenido!</h1>
      <p class="landing-desc mt-4 opacity-70">
        Hola cari! Debes iniciar sesion
      </p>
      <div class="landing-links mt-8 space-x-3">
        <router-link
          to="/register"
          class="bg-sky-500 border border-sky-500 text-white transition rounded p-2 px-4 hover:bg-sky-600 hover:border-sky-600"
          >Registrarme</router-link
        >
        <router-link
          to="/login"
          class="bg-white border text-black transition rounded p-2 px-4 hover:bg-gray-100"
          >Acceder</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
