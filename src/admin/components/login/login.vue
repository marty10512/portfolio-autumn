<template lang="pug">
  .login
    .login-container
      form.login-form
        .login-form__container
          button.login-form__exit
              .login-form__exit-item
          h1.login-form__title Авторизация
          label.login-form__name.login-form__name--login Логин
            input.login-form__name-input(
              type="text"
            )
          label.login-form__name.login-form__name--password Пароль
            input.login-form__name-input(
              type="password"
            )
          label.login-form__submit отправить
            input.visuallyHidden(type='submit')
</template>