<template lang="pug">
  section.works
      .container.works__container
        .section__header
          h2.section__title Блок "Работы"
        form.section-editing
          .section-editing__container

            .section-editing__header
              h3.section-editing__header-title Редактирование работы

            .section-editing__content

              .left
                .section-editing__photo
                  p.photo__desc Перетащите или загрузите для загрузки изображения
                  label.photo__btn(for="upload")
                    input#upload(value="загрузить" disabled name="upload").photo__btn-item.btn

              .right
                label.section-editing__label
                  h4.label__title Название
                  input.label__input(type="text" value="Дизайн сайта для авто салона Porsche" name="name")
                label.section-editing__label
                  h4.label__title Ссылка
                  input.label__input(type="text" value="https://www.porsche-pulkovo.ru" name="link")
                label.section-editing__label
                  h4.label__title Описание
                  textarea.label__textarea(type="text" name="desc") Порше Центр Пулково - является официальным диллером марки Фольксваген и тд и тп
                label.section-editing__label
                  h4.label__title Добавление тэга
                  input.label__input(type="text" value="Jquery, Vue.js, HTML5" name="tags")
                ul.section-editing__tags
                  li.section-editing__tags-item HTML
                    button.tags-cross
                  li.section-editing__tags-item CSS
                    button.tags-cross
                  li.section-editing__tags-item Javascript
                    button.tags-cross
                .section-editing__btns
                  label.btns-item
                    input.btns-item__cancel(type="reset" value="отмена")
                  label.btns-item.btns-item--save
                    input.btns-item__save.btn(type="submit" value="сохранить")

        ul.section-list
          li.section-list__item.section-list__item--btn
            label.item__label
              button.label__btn.btn +
              h6.label__title Добавить работу
          li.section-list__item
            .created
              .created__pic
                img.created__pic-item(src="../../images/content/slider-1.png")
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
                img.created__pic-item(src="../../images/content/slider-2.png")
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
                img.created__pic-item(src="../../images/content/slider-3.png")
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
import style from '../styles/worksAbout.module.pcss'
export default {

}
</script>