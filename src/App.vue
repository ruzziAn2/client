<script setup>
import { useStore } from "vuex";
import TheLoading from "./components/TheLoading.vue";
import { computed } from "vue";
import TheToast from "./components/TheToast.vue";

const store = useStore();

const loading = computed(() => {
  return store.state.loading;
});

const toastShow = computed(() => {
  return store.state.toast.show;
});
</script>

<template>
  <div class="parent p-4 bg-slate-100">
    <TheLoading v-show="loading" />
    <TheToast v-show="toastShow" />
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
