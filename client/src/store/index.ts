import Vue from 'vue';
import Vuex from 'vuex';
import {AxiosResponse} from 'axios';
import BinanceService from '../services/binance-service';
const tinyTime = require('tinytime');

const template = tinyTime('{h}:{mm}:{ss}{a}');

Vue.use(Vuex);

let response: AxiosResponse;

export default new Vuex.Store({
    state: {
        autoStartup: false,
        currentPrice: 0,
        highPrice: 0,
        lastUpdated: '',
        lowPrice: 0,
        refreshTime: 60000,
    },
    mutations: {
        setAutoStartup(state, startup: boolean) {
            state.autoStartup = startup;
        },
        setCurrentPrice(state, price: string) {
            state.currentPrice = Number(parseFloat(price).toFixed(2));
        },
        setHighPrice(state, price: string) {
            state.highPrice = Number(parseFloat(price).toFixed(2));
        },
        setLastUpdated(state, time: string) {
            state.lastUpdated = time;
        },
        setLowPrice(state, price: string) {
            state.lowPrice = Number(parseFloat(price).toFixed(2));
        },
        setRefresh(state, time: number) {
            state.refreshTime = time;
        },
    },
    actions: {
        async getCurrentPrice({commit}) {
            response = await BinanceService.getHntData();
            commit('setCurrentPrice', response.data.lastPrice);
            commit('setHighPrice', response.data.highPrice);
            commit('setLowPrice', response.data.lowPrice);
            commit('setLastUpdated', template.render(new Date()));
        },
        getRefreshTime({commit}) {
            commit('setRefresh', Number(localStorage.getItem('refresh')));
        },
        async setAutoStartup({commit}, startup: number) {
            commit('setAutoStartup', startup);
        },
        setRefreshTime({commit}, time: number) {
            localStorage.setItem('refresh', time.toString());
            commit('setRefresh', time);
        },
    },
    modules: {},
    getters: {
        autoStartup: (state) => state.autoStartup,
        currentPrice: (state) => state.currentPrice,
        highPrice: (state) => state.highPrice,
        lastUpdated: (state) => state.lastUpdated,
        lowPrice: (state) => state.lowPrice,
        refreshTime: (state) => state.refreshTime,
    },
});
