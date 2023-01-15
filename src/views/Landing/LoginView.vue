<template>
  <div class="login flex justify-center items-center min-h-screen text-center">
    <form class="login-box">
      <h1 class="text-sky-500 text-2xl font-bold mb-4">Login</h1>
      <div
        class="box shadow bg-white w-80 border-2 space-y-4 flex flex-col p-5"
      >
        <input
          type="text"
          class="input-field border outline-none px-3 py-2"
          placeholder="Username"
        />
        <input
          type="text"
          placeholder="password"
          class="input-field input-field border outline-none px-3 py-2"
        />
        <button
          class="button bg-sky-600 transition border border-sky-500 text-white rounded p-2 px-4 hover:bg-sky-50 hover:text-black hover:border-sky-600"
          type="submit"
        >
          Ingresar
        </button>
      </div>
      <p class="text-sm font-semibold mt-4">
        No tengo cuenta
        <router-link to="/register" class="text-sky-500 underline"
          >Registrarse</router-link
        >
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style></style>
