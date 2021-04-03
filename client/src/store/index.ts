import Vue from "vue";
import Vuex from "vuex";
import { AxiosResponse } from "axios";
import BinanceService from "@/services/binance-service";

Vue.use(Vuex);

let response: AxiosResponse;

export default new Vuex.Store({
  state: {
    currentPrice: null,
    highPrice: null,
    lowPrice: null,
  },
  mutations: {
    setCurrentPrice(state, price) {
      state.currentPrice = parseFloat(price).toFixed(2);
    },
    setHighPrice(state, price) {
      state.highPrice = parseFloat(price).toFixed(2);
    },
    setLowPrice(state, price) {
      state.lowPrice = parseFloat(price).toFixed(2);
    },
  },
  actions: {
    async getCurrentPrice({ commit }) {
      response = await BinanceService.getHntData();
      commit("setCurrentPrice", response.data.lastPrice);
      commit("setHighPrice", response.data.highPrice);
      commit("setLowPrice", response.data.lowPrice);
    },
  },
  modules: {},
  getters: {
    currentPrice: (state) => state.currentPrice,
    highPrice: (state) => state.highPrice,
    lowPrice: (state) => state.lowPrice,
  },
});
