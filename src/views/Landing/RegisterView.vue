<template>
  <div class="login flex justify-center items-center min-h-screen text-center">
    <form @submit.prevent="register()" class="login-box">
      <h1 class="text-sky-500 text-2xl font-bold mb-4">Registrarse</h1>
      <div
        class="box shadow bg-white w-80 border-2 space-y-4 flex flex-col p-5"
      >
        <input
          v-model.trim="user.fullname"
          type="text"
          class="input-field border outline-none px-3 py-2"
          placeholder="Nombre completo"
        />
        <input
          v-model.trim="user.username"
          type="text"
          class="input-field border outline-none px-3 py-2"
          placeholder="username"
        />
        <input
          v-model.trim="user.email"
          type="email"
          placeholder="email"
          class="input-field border outline-none px-3 py-2"
        />
        <input
          v-model.trim="user.password"
          type="password"
          placeholder="password"
          class="input-field border outline-none px-3 py-2"
        />
        <select v-model="user.gender" class="border outline-none px-3 py-2">
          <option value="NE">No especificado</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
        <button
          :disabled="loading"
          class="button bg-sky-600 transition border border-sky-500 text-white rounded p-2 px-4 hover:bg-sky-50 hover:text-black hover:border-sky-600 disabled:bg-gray-200 disabled:cursor-default disabled:border-none"
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
import { reactive, computed } from "vue";
const store = useStore();

const user = reactive({
  fullname: "",
  username: "",
  password: "",
  email: "",
  gender: "",
});

const loading = computed(() => {
  return store.state.loading;
});

const register = async () => {
  // store.commit("setLoading", true, { root: true });
  if (!user.username || !user.password || !user.email || !user.fullname) {
    store.commit("setLoading", false, { root: true });
    alert("Datos no aceptados");
  } else {
    store.dispatch("auth/register", user);
  }
};
</script>

<style></style>
