<template>
  <div class="login flex justify-center items-center min-h-screen text-center">
    <form class="login-box" @submit.prevent="login()">
      <h1 class="text-sky-500 text-2xl font-bold mb-4">Ingresar</h1>
      <div
        class="box shadow bg-white w-80 border-2 space-y-4 flex flex-col p-5"
      >
        <input
          v-model.trim="user.username"
          type="text"
          class="input-field border outline-none px-3 py-2"
          placeholder="Username"
        />
        <input
          v-model.trim="user.password"
          type="password"
          placeholder="password"
          class="input-field input-field border outline-none px-3 py-2"
        />
        <button
          :disabled="loading"
          class="button bg-sky-600 transition border border-sky-500 text-white rounded p-2 px-4 hover:bg-sky-50 hover:text-black hover:border-sky-600 disabled:bg-gray-200 disabled:cursor-default disabled:border-none"
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

<script setup>
import { useStore } from "vuex";
import { reactive, computed } from "vue";
const store = useStore();

const user = reactive({
  username: "",
  password: "",
});

const loading = computed(() => {
  return store.state.loading;
});

const login = async () => {
  if (!user.username || !user.password) {
    alert("Datos no aceptados");
  } else {
    store.dispatch("auth/login", user);
  }
};
</script>

<style></style>
