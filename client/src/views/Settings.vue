<template>
  <div class="section settings">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1 class="sub-title has-text-white has-text-centered mb-5">Settings
            <b-button class="is-dark" style="display: inline; z-index: 100; position: absolute; right: 15px; top: 15px;"
                      type="submit"
                      v-on:click="pageSwitch('')">
              <b-icon icon="times" pack="fas" size="is-small"></b-icon>
            </b-button>
          </h1>
          <div class="columns is-multiline">
            <div class="column is-6 mb-3">
              <p class="has-text-white has-text-weight-semibold">Refresh Time</p>
              <b-radio v-model="refreshTime" name="time" native-value="15000"> 15s</b-radio>
              <b-radio v-model="refreshTime" name="time" native-value="30000"> 30s</b-radio>
              <b-radio v-model="refreshTime" name="time" native-value="60000"> 1m</b-radio>
              <b-radio v-model="refreshTime" name="time" native-value="300000"> 5m</b-radio>
              <b-radio v-model="refreshTime" name="time" native-value="900000"> 15m</b-radio>
            </div>
            <!--            <div class="column is-6 mb-3">-->
            <!--              <p class="has-text-white has-text-weight-semibold">Launch on Windows Start up</p>-->
            <!--              <b-checkbox v-model="autoStartup" :checked="autoStartup" type="is-warning">Enabled</b-checkbox>-->
            <!--            </div>-->
            <!--            <div class="column is-6">-->
            <!--              <p class="has-text-white has-text-weight-semibold">Bobcat Credentials</p>-->
            <!--              <b-input class="ml-6 mr-6 mb-1" placeholder="username"></b-input>-->
            <!--              <b-input class="ml-6 mr-6" placeholder="password"></b-input>-->
            <!--              <div class="level">-->
            <!--                <b-button class="is-primary is-fullwidth mt-4 mr-3">Save Credentials</b-button>-->
            <!--                <b-button class="is-warning is-fullwidth mt-4">Please Read</b-button>-->
            <!--              </div>-->
            <!--            </div>-->
            <div class="column is-6">
              <p class="has-text-white has-text-weight-semibold">Creator</p>
              <p>Author: Michael Pereira</p>
              <p>
                Found a bug?
                <a
                    auto-id="href-github-issues"
                    href="https://github.com/Mwpereira/hnt-widget/issues/"
                    rel="noopener"
                    target="_blank"
                >Post here</a
                >
              </p>
              <div class="columns is-mobile">
                <div class="column">
                  <a href="https://github.com/Mwpereira" target="_blank">
                    <b-button class="is-dark is-fullwidth mt-3" type="submit">
                      <b-icon icon="github" pack="fab" size="is-medium"></b-icon>
                    </b-button>
                  </a>
                </div>
                <div class="column">
                  <a href="https://www.linkedin.com/in/michael-pereira-07/" target="_blank">
                    <b-button class="light-blue has-text-white is-fullwidth mt-3">
                      <b-icon icon="linkedin" pack="fab" size="is-medium"></b-icon>
                    </b-button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Settings',
  data() {
    return {
      autoStartup: false,
      refreshTime: 0,
    };
  },
  watch: {
    autoStartup(checked: boolean) {
      this.$store.dispatch('setAutoStartup', checked);
    },
    refreshTime(time: number) {
      this.$store.dispatch('setRefreshTime', time);
    },
  },
  methods: {
    pageSwitch(page: string): void {
      this.$router.push(`/${page}`);
    },
  },
  mounted() {
    this.autoStartup = this.$store.getters.autoStartup;
    this.refreshTime = this.$store.getters.refreshTime;
  },
};
</script>

<style>
html {
  overflow: visible !important;
}
</style>
