<template>
  <div id="app">
    <Notification />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>


<script>
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/header";
import Notification from "./components/notifications";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
    Notification,
  },
};
</script>


<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  flex-grow: 1;
}
</style>
