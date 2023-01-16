<template>
  <div class="login flex justify-center items-center min-h-screen text-center">
    <form @submit.prevent="register()" class="login-box">
      <h1 class="text-sky-500 text-2xl font-bold mb-4">Registrarse</h1>
      <div
        class="box shadow bg-white w-80 border-2 space-y-4 flex flex-col p-5"
      >
        <input
          v-model="user.username"
          type="text"
          class="input-field border outline-none px-3 py-2"
          placeholder="Username"
        />
        <input
          v-model="user.password"
          type="password"
          placeholder="password"
          class="input-field input-field border outline-none px-3 py-2"
        />
        <button
          class="button bg-sky-600 transition border border-sky-500 text-white rounded p-2 px-4 hover:bg-sky-50 hover:text-black hover:border-sky-600"
          type="submit"
        >
          Registrarse
        </button>
      </div>
      <p class="text-sm font-semibold mt-4">
        Ya tengo una cuenta
        <router-link to="/login" class="text-sky-500 underline"
          >Ingresar</router-link
        >
      </p>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { reactive } from "vue";
const store = useStore();

const user = reactive({
  username: "",
  password: "",
});

const register = async () => {
  if (!user.username || !user.password) {
    alert("Datos no aceptados");
  } else {
    console.log(store.dispatch("auth/register", user));
  }
};
</script>

<style></style>
