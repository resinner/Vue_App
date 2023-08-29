<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Btn>Click me</Btn>
    <Title></Title>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Btn from './components/Button'
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Btn,
    Title
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
