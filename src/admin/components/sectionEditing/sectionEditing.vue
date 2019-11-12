<template lang="pug">
  form.section-editing
    .section-editing__container
      .section-editing__header
        h3.section-editing__header-title Редактирование работы
      .section-editing__content.section-editing__content--works
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
              input.btns-item__cancel(type="reset" value="Отмена")
            label.btns-item.btns-item--save
              input.btns-item__save.btn(type="submit" value="сохранить")
</template>