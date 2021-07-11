<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/test">Test</router-link>
    </div>
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
}

#nav {
  // padding: 30px;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  left: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
