<template lang="pug">
  nav.tabs
    .container.tabs__container
      ul.tabs-list
        li.tabs-list__item(v-for="tab in tabs")
          router-link(
            tag="button"
            :to="tab.href"
          ) {{tab.title}}
</template>

<script>

export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/"},
        { title: "Работы", href: "/works"},
        { title: "Отзывы", href: "/comments"}
      ]
    }
  }
}
</script>