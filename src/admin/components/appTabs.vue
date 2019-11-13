<template lang="pug">
  nav.tabs
    .container.tabs__container
      ul.tabs-list
        li.tabs-list__item.active
          router-link(
            tag="button"
            to="/"
            
          ) Обо мне
        li.tabs-list__item
          router-link(
            tag="button"
            to="/works"
          ) Работы
        li.tabs-list__item
          router-link(
            tag="button"
            to="/comments"
          ) Отзывы
</template>

<script>

export default {
  
}
</script>