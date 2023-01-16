import api from "@/helpers/api";
import Cookies from "js-cookie";

// Cookies.get("token");
// Cookies.set("token", "");

const authModule = {
  namespaced: true,
  state: {
    account: Cookies.get("account") ? Cookies.get("account") : {},
    token: Cookies.get("token") ? Cookies.get("token") : "",
  },
  getters: {},
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async register({ commit }, payload) {
      try {
        const res = await api.post("/auth/register", payload);
        console.log(res.data);

        commit("setAccount", res.data.user);
        commit("setToken", res.data.token);

        Cookies.set("account", res.data.account);
        Cookies.set("token", res.data.token);
        console.log(res.data);
      } catch (error) {
        console.error(error.message);
      }
    },
    async login({ commit }, payload) {
      try {
        const res = await api.post("/auth/login", payload);
        console.log(res.data);

        commit("setAccount", res.data.user);
        commit("setToken", res.data.token);

        Cookies.set("account", res.data.account);
        Cookies.set("token", res.data.token);
        console.log(res.data);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};

export default authModule;
