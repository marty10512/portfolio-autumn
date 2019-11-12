<template lang="pug">
  section.comments
      .container.comments__container
        .section__header
          h2.section__title Блок "Отзывы"
        form.section-editing
          .section-editing__container

            .section-editing__header
              h3.section-editing__header-title Новый отзыв

            .section-editing__content

              .left
                .photo__preview
                  img.photo__preview-item(src="../../../images/icons/user.png")
                button(href="#").photo__btn-item Добавить фото

              .right
                .right__group
                  label.section-editing__label
                    h4.label__title Имя автора
                    input.label__input(type="text" value="Ковальчук Дмитрий" name="author")
                  label.section-editing__label
                    h4.label__title Титул автора
                    input.label__input(type="text" value="Основатель LoftSchool" name="position")
                label.section-editing__label
                  h4.label__title Отзыв
                  textarea.label__textarea(type="text" name="comment") Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .section-editing__btns
                  label.btns-item
                    input.btns-item__cancel(type="reset" value="Отмена")
                  label.btns-item.btns-item--save
                    input.btns-item__save.btn(type="submit" value="сохранить")

        ul.section-list
          li.section-list__item.section-list__item--btn
            label.item__label
              button.label__btn.btn +
              h6.label__title Добавить работу
          li.section-list__item
            .created
              .created__author
                .author-left
                  img.author__pic(src="../../../images/content/wouwa.jpg")
                .author-right
                  h6.author__name Владимир Сабанцев
                  p.author__position Преподаватель
              .created__desc
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
          li.section-list__item
            .created
              .created__author
                .author-left
                  img.author__pic(src="../../../images/content/wouwa.jpg")
                .author-right
                  h6.author__name Владимир Сабанцев
                  p.author__position Преподаватель
              .created__desc
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
          li.section-list__item
            .created
              .created__author
                .author-left
                  img.author__pic(src="../../../images/content/wouwa.jpg")
                .author-right
                  h6.author__name Владимир Сабанцев
                  p.author__position Преподаватель
              .created__desc
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
          li.section-list__item
            .created
              .created__author
                .author-left
                  img.author__pic(src="../../../images/content/wouwa.jpg")
                .author-right
                  h6.author__name Владимир Сабанцев
                  p.author__position Преподаватель
              .created__desc
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
</template>

<script>
export default {
  
}
</script>