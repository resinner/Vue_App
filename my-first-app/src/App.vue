<template>
  <div :id="$style.app">
    <h1>{{ title }}</h1>
    <Button @click="increment">Click me</Button>
    <DirectivesTest></DirectivesTest>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
import DirectivesTest from "./components/DirectivesTast.vue";

export default {
  name: "App",
  components: {
    Button,
    DirectivesTest,
  },
  data() {
    return {
      amountOfClick: 0,
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClick}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClick += 1;
    },
  },
};
</script>

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
