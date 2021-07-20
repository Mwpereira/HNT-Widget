<template>
  <div id="app">
    <div style="z-index: 100; position: absolute; width: 100%; height: 45px;" id="dragBar"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh !important;
  min-height: 100% !important;
}

#dragBar{
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

h1,
p {
  font-family: "Montserrat", sans-serif !important;
}

p {
  font-size: 18px;
}

html,
body,
div .section {
  background-color: #26224a;
}

.light-blue {
  background-color: #0093ee !important;
  border-color: #0093ee !important;
  color: white !important;
}

.card {
  background-color: #10173c !important;
  color: white !important;
}
</style>
