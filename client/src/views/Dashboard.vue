<template>
  <div class="section dashboard">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1 class="sub-title has-text-white has-text-centered">HNT/USDT</h1>
          <div class="columns is-mobile">
            <div class="column">
              <p class="has-text-white">${{ highPrice === null ? 0 : highPrice }}</p>
              <p class="has-text-white">
                <b-icon
                    class="m-2"
                    icon="caret-up"
                    pack="fas"
                    size="is-small"
                    style="color: lightgreen;">
                </b-icon>
                24 Hour High
              </p>
            </div>
            <div class="column">
              <p id="currentPrice" class="has-text-white">${{ currentPrice === null ? 0 : currentPrice }}</p>
            </div>
            <div class="column">
              <p class="has-text-white">${{ lowPrice === null ? 0 : lowPrice }}</p>
              <p class="has-text-white">
                <b-icon
                    class="m-2"
                    icon="caret-down"
                    pack="fas"
                    size="is-small"
                    style="color: red;">
                </b-icon>
                24 Hour Low
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="level mt-5 is-mobile">
      <b-button
          class="is-danger mr-1 is-fullwidth"
          type="submit"
      >
        Link Bobcat Account
      </b-button>
      <a href="https://ko-fi.com/michaelpereira" target="_blank">
        <b-button
            class="is-warning ml-1 mr-1"
            icon-left="coffee"
        >
          Buy me a coffee
        </b-button>
      </a>
      <a href="https://www.tradingview.com/symbols/HNTUSDT/?exchange=BINANCE" target="_blank">
        <b-button
            class="is-primary ml-1 mr-1"
            icon-left="chart-line"
        >
          Trading View
        </b-button>
      </a>
      <b-button
          class="is-success ml-1"
          icon-left="cog"
          v-on:click="pageSwitch('/settings')"
      >
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Dashboard",
  computed: {
    currentPrice() {
      return this.$store.getters.currentPrice;
    },
    highPrice() {
      return this.$store.getters.highPrice;
    },
    lowPrice() {
      return this.$store.getters.lowPrice;
    },
  },
  methods:{
    pageSwitch(page) {
      this.$router.push(`/${page}`);
    },
  },
  mounted(){
    this.$store.dispatch('getCurrentPrice');
    setTimeout(()=>{
      this.$store.dispatch('getCurrentPrice');
    }, 30000);
  }
};
</script>

<style scoped>
html {
  overflow: hidden !important;
}

h1, p {
  font-family: 'Montserrat', sans-serif !important;
}

p {
  font-size: 18px;
}

html, body {
  background-color: #26224A;
}

#currentPrice {
  font-size: 48px;
  font-weight: 600;
}

.card {
  background-color: #10173C !important;
  color: white !important;
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

.is-primary {
  background-color: #0093ee !important;
}
</style>
