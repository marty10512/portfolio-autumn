<template lang="pug">
  .login
    .login-container
      form(
        @submit.prevent="login"
      ).login-form
        .login-form__container
          button.login-form__exit
              .login-form__exit-item
          h1.login-form__title Авторизация
          label.login-form__name.login-form__name--login Логин
            input.login-form__name-input(
              type="text"
              v-model="user.name"
            )
          label.login-form__name.login-form__name--password Пароль
            input.login-form__name-input(
              type="password"
              v-model="user.password"
            )
          input.login-form__submit(type='submit' value="отправить")
</template>

<script>
import axios from '../../requests.js';
export default {
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      try {
        const response = await $axios.post("/login", this.user);
        console.log(response);
      } catch (error) {
        
      }
    }
  }
}
</script>