<template lang="pug">
  header.admin-header
      .container.admin-header__container
        .owner-data
          img.owner-data__photo(src="../../images/content/author.png")
          h2.owner-data__name Андрей Мартемьянов
        .admin-name
          h1.admin-name__title Панель администрирования
        .admin-quit
          a.admin-quit__link(href="#") Выйти
</template>

<script>
import style from '../styles/headerAdmin.module.pcss';

export default {
  
}
</script>