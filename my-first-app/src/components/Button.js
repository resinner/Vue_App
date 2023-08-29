/* eslint-disable */
import Vue from "vue";

//===========================================================

// const Button = Vue.component("Btn", {
//   template: "<button>Click me</button>",
// });

//===========================================================

const Button = Vue.component("Btn", {
  render(createElement) {
    return createElement("button", this.$slots.default);
  },
});

export default Button;
