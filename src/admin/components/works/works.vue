<template lang="pug">
  section.works
      .container.works__container
        .section__header
          h2.section__title Блок "Работы"
        sectionEditing
        ul.section-list
          li.section-list__item.section-list__item--btn
            label.item__label
              button.label__btn.btn +
              h6.label__title Добавить работу
          li.section-list__item
            .created
              .created__pic
                img.created__pic-item(src="../../../images/content/slider-1.png")
              .created__desc
                .created__desc-title 
                  h5 Сайт школы образования
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                label.created__desc-link
                  a(href="http://loftschool.ru") http://loftschool.ru
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
          li.section-list__item
            .created
              .created__pic
                img.created__pic-item(src="../../../images/content/slider-2.png")
              .created__desc
                .created__desc-title 
                  h5 Сайт школы образования
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                label.created__desc-link
                  a(href="http://loftschool.ru") http://loftschool.ru
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
          li.section-list__item
            .created
              .created__pic
                img.created__pic-item(src="../../../images/content/slider-3.png")
              .created__desc
                .created__desc-title 
                  h5 Сайт школы образования
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                label.created__desc-link
                  a(href="http://loftschool.ru") http://loftschool.ru
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
</template>

<script>
import sectionEditing from '../sectionEditing/sectionEditing'
export default {
  components: {
    sectionEditing
  }
}
</script>