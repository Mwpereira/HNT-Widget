import Vue from "vue";
import Vuex from "vuex";
import { AxiosResponse } from "axios";
import BinanceService from "@/services/binance-service";

Vue.use(Vuex);

let response: AxiosResponse;

export default new Vuex.Store({
  state: {
    autoStartup: false,
    currentPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    refreshTime: 60000,
  },
  mutations: {
    setAutoStartup(state, startup: boolean){
      state.autoStartup = startup;
    },
    setCurrentPrice(state, price: string) {
      state.currentPrice = parseFloat(price).toFixed(2);
    },
    setHighPrice(state, price: string) {
      state.highPrice = parseFloat(price).toFixed(2);
    },
    setLowPrice(state, price: string) {
      state.lowPrice = parseFloat(price).toFixed(2);
    },
    setRefresh(state, time: number) {
      state.refreshTime = time;
    },
  },
  actions: {
    async getCurrentPrice({ commit }) {
      response = await BinanceService.getHntData();
      commit("setCurrentPrice", response.data.lastPrice);
      commit("setHighPrice", response.data.highPrice);
      commit("setLowPrice", response.data.lowPrice);
    },
    getRefreshTime({ commit }){
      commit("setRefresh",  Number(localStorage.getItem('refresh')));
    },
    setRefreshTime({ commit }, time: number){
      localStorage.setItem('refresh', time.toString());
      commit("setRefresh", time);
    }
  },
  modules: {},
  getters: {
    autoStartup: (state) => state.autoStartup,
    currentPrice: (state) => state.currentPrice,
    highPrice: (state) => state.highPrice,
    lowPrice: (state) => state.lowPrice,
    refreshTime: (state) => state.refreshTime,
  },
});
