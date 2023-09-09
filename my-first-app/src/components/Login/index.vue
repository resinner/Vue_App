<template>
  <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
    <CustomInput
      v-model="formData.email"
      placeholder="Email"
      autocomplete="email"
      name="email"
      :rules="emailRules"
      class="login__input"
    />
    <CustomInput
      v-model="formData.password"
      placeholder="Password"
      autocomplete="current-password"
      type="password"
      name="password"
      :rules="passwordRules"
      class="login__input"
    />
    <Button class="login__btn" type="submit" :loading="loading">Вход</Button>
  </Form>
</template>

<script>
import Form from "../shared/form";
import CustomInput from "../shared/CustomInput";
import Button from "../shared/Button";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../utils/validationRules";

export default {
  name: "Login",
  components: {
    Form,
    CustomInput,
    Button,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();

      if (isFormValid) {
        console.log(this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
