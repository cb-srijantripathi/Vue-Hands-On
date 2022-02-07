<template>
  <div id="app">
    <div id="nav">
      <h1 style="text-decoration: none; color:#659DBD;
      font-size:50px; font-weight:bold">Vue Hands-On</h1>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-decoration:none;
}
</style>
