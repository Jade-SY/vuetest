<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="nav_item">Home</router-link>
      <router-link to="/about" class="nav_item">About</router-link>
      <router-link to="/play" class="nav_item">playground</router-link>
      <router-link to="/for" class="nav_item">for-if</router-link>
      <router-link to="/list" class="nav_item">list</router-link>
      <router-link to="/table" class="nav_item">table</router-link>
      <router-link to="/event" class="nav_item">event</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav_item {
  height: 13px;
  line-height: 13px;
  padding: 0 5px;
  border-right: 1px solid #2c3e50;
}
.nav_item:last-child {
  border-right: none;
}
</style>
