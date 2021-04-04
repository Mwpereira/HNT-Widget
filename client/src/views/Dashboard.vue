<template>
  <div class="section dashboard">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1 class="sub-title has-text-white has-text-centered">HNT/USDT</h1>
          <div class="columns is-mobile">
            <div class="column">
              <p class="has-text-white">
                ${{ highPrice === 0 ? 0 : highPrice }}
              </p>
              <p class="has-text-white">
                <b-icon
                    icon="caret-up"
                    pack="fas"
                    size="is-medium"
                    style="color: lightgreen"
                >
                </b-icon>
                24 Hour High
              </p>
            </div>
            <div class="column">
              <p id="currentPrice" class="has-text-white">
                ${{ currentPrice === 0 ? 0 : currentPrice }}
              </p>
            </div>
            <div class="column">
              <p class="has-text-white">
                ${{ lowPrice === 0 ? 0 : lowPrice }}
              </p>
              <p class="has-text-white">
                <b-icon
                    icon="caret-down"
                    pack="fas"
                    size="is-medium"
                    style="color: red"
                >
                </b-icon>
                24 Hour Low
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns mt-5 is-mobile">
      <div class="column is-3 is-1-mobile">
        <b-button class="is-danger is-fullwidth" type="submit">
          Link Bobcat Account
        </b-button>
      </div>
      <div class="column is-3">
        <a href="https://ko-fi.com/michaelpereira" target="_blank">
          <b-button class="is-warning is-fullwidth" icon-left="coffee">
            Buy me a coffee
          </b-button>
        </a>
      </div>
      <div class="column is-3">
        <a
            href="https://www.tradingview.com/symbols/HNTUSDT/?exchange=BINANCE"
            target="_blank"
        >
          <b-button class="is-primary is-fullwidth" icon-left="chart-line">
            Trading View
          </b-button>
        </a>
      </div>
      <div class="column is-3">
        <b-button
            class="is-success is-fullwidth"
            icon-left="cog"
            v-on:click="pageSwitch('settings')"
        >
          Settings
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Dashboard",
  data() {
    return {
      getDataInterval: ''
    };
  },
  computed: {
    currentPrice(): number {
      return this.$store.getters.currentPrice;
    },
    highPrice(): number {
      return this.$store.getters.highPrice;
    },
    lowPrice(): number {
      return this.$store.getters.lowPrice;
    },
  },
  methods: {
    getData(){
      this.$store.dispatch("getCurrentPrice");
      this.$store.dispatch("getRefreshTime");
      // setTimeOut does not work as expected on MacOS
      // TODO: SWITCH TO WS OVER 'LONG POLLING'
      this.getDataInterval = setInterval(() => {
        console.log("Test")
        this.$store.dispatch("getCurrentPrice");
      }, this.$store.getters.refreshTime);
    },
    pageSwitch(page: string): void {
      this.$router.push(`/${page}`);
    },
    openLink(url: string) {
      window.open(url);
    }
  },
  beforeDestroy () {
    clearInterval(this.getDataInterval);
  },
  created () {
    this.getData();
  },
};
</script>

<style>
html {
  overflow: hidden !important;
}

#currentPrice {
  font-size: 48px;
  font-weight: 600;
}
</style>
