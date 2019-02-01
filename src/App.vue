<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <router-link to="/team" class="btn btn-success">
      <i class="fa fa-soccer-ball-o"> Team</i>
    </router-link>
    <router-link to="/manager" class="btn btn-primary">  
      <i class="fa fa-user"> Manager</i>
    </router-link>
    <router-link to="/player" class="btn btn-warning"> 
      <i class="fa fa-users"> Players</i>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mode: 'history'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
