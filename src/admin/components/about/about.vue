<template lang="pug">
  section.about 
      .container.about__container
        .section__header
          h2.section__title Блок "Обо мне"
          label.about__add(for="add-btn")
            button(type="button").about__add-btn.btn
            h4.about__add-title Добавить группу
        aboutContent
</template>

<script>
import aboutContent from './aboutContent'
export default {
  components: {
    aboutContent
  }
}
</script>