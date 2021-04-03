<template>
  <div class="section settings">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <div class="level is-mobile">
            <h1 class="sub-title has-text-white has-text-centered">Settings</h1>
            <b-button class="is-dark" type="submit" v-on:click="pageSwitch('')">
              <b-icon icon="times" pack="fas" size="is-medium"> </b-icon>
            </b-button>
          </div>

          <div class="columns">
            <div class="column">
              <div class="column">
                <h3 class="has-text-white">Refresh</h3>
                <b-radio v-model="refresh" name="refresh"> 1m </b-radio>
                <b-radio v-model="refresh" name="refresh"> 5m </b-radio>
                <b-radio v-model="refresh" name="refresh"> 15m </b-radio>
              </div>
            </div>
            <div class="column">
              <h3 class="has-text-white">Launch on Windows Start up</h3>
              <b-checkbox></b-checkbox>
            </div>
          </div>

          <h3 class="has-text-white">BobCat Credentials</h3>
          <h3 class="has-text-white">Creator</h3>
          <p>Author: Michael Pereira</p>
          <p>
            Found a bug?
            <a
              href="https://github.com/Mwpereira/hnt-widget/issues/"
              rel="noopener"
              target="_blank"
              auto-id="href-github-issues"
              >Post here</a
            >
          </p>
          <div class="level is-mobile">
            <div class="level-item">
              <b-button class="is-dark is-fullwidth" type="submit">
                <b-icon icon="github" pack="fab" size="is-medium"> </b-icon>
              </b-button>
            </div>
            <div class="level-item">
              <b-button class="is-primary is-fullwidth">
                <b-icon icon="linkedin" pack="fab" size="is-medium"> </b-icon>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Settings",
  data() {
    return {
      refresh: 0,
    };
  },
  methods: {
    pageSwitch(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>

<style>
h1,
p {
  font-family: "Montserrat", sans-serif !important;
}

p {
  font-size: 18px;
}

html,
body {
  background-color: #26224a;
}

#currentPrice {
  font-size: 48px;
  font-weight: 600;
}

.card {
  background-color: #10173c !important;
  color: white !important;
}

.is-primary {
  background-color: #0093ee !important;
}
</style>
