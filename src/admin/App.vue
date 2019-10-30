<template lang="pug">
  .admin-panel
    header.admin-header
      .container.admin-header__container
        .owner-data
          img.owner-data__photo(src="../images/content/author.png")
          h2.owner-data__name Андрей Мартемьянов
        .admin-name
          h1.admin-name__title Панель администрирования
        .admin-quit
          .admin-quit__link(href="#") Выйти
    nav.tabs
      .container.tabs__container
        ul.tabs-list
          li.tabs-list__item.active Обо мне
          li.tabs-list__item Работы
          li.tabs-list__item Отзывы
    section.about 
      .container.about__container
        .section__header
          h2.section__title Блок "Обо мне"
          label.about__add(for="add-btn")
            button(type="button").about__add-btn.btn +
            h4.about__add-title Добавить группу
        .about__content
          ul.content-list
            li.content-list__item
              form.skills-block
                .skills-block__head
                  input.skills-block__name(placeholder="Название новой группы")
                  label.skills-block__btn(for="submit")
                    input.visuallyHidden(type="submit")
                    button(type="button" href="#").skills-block__btn-item
                  button(type="button" href="#").skills-block__close-item
                .skills-block__content
                .skills-block__footer
                  form.add-skills
                    input.new-skill(placeholder="Новый навык")
                    .new-skill-percent
                      input.new-skill-percent__input.new-skill(value="100")
                    label.new-skill-btn(for="submit")
                      input.visuallyHidden(type="submit")
                      button(type="button").new-skill-btn__add.btn +
            li.content-list__item
              form.skills-block
                .skills-block__head
                  input.skills-block__name(placeholder="Название новой группы" value="Workflow")
                  label.skills-block__btn(for="submit")
                    input.visuallyHidden(type="submit")
                    button(type="button" href="#").skills-block__btn-item
                  button(type="button" href="#").skills-block__close-item
                .skills-block__content
                  ul.skills-list
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                .skills-block__footer
                  form.add-skills
                    input.new-skill(placeholder="Новый навык")
                    .new-skill-percent
                      input.new-skill-percent__input.new-skill(value="100")
                    label.new-skill-btn(for="submit")
                      input.visuallyHidden(type="submit")
                      button(type="button").new-skill-btn__add.btn +
            li.content-list__item
              form.skills-block
                .skills-block__head
                  input.skills-block__name(placeholder="Название новой группы" value="Workflow")
                  label.skills-block__btn(for="submit")
                    input.visuallyHidden(type="submit")
                    button(type="button" href="#").skills-block__btn-item
                  button(type="button" href="#").skills-block__close-item
                .skills-block__content
                  ul.skills-list
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item.active
                        input.item-name(value="Git")
                        .item-percent
                          input.item-percent__input.item-name(value="100")
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                        label.skills-block__btn(for="submit")
                          input.visuallyHidden(type="submit")
                          button(type="button" href="#").skills-block__btn-item
                        button(type="button" href="#").skills-block__close-item

                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                    li.skills-list__skill-item
                      form.skill-item
                        input.item-name(value="Git" readonly)
                        .item-percent
                          input.item-percent__input.item-name(value="100" readonly)
                        button(type="button" href="#").item-edit
                        button(type="button" href="#").item-delete
                .skills-block__footer
                  form.add-skills
                    input.new-skill(placeholder="Новый навык")
                    .new-skill-percent
                      input.new-skill-percent__input.new-skill(value="100")
                    label.new-skill-btn(for="submit")
                      input.visuallyHidden(type="submit")
                      button(type="button").new-skill-btn__add.btn +
    section.works
      .container.works__container
        .section__header
          h2.section__title Блок "Работы"
        .section-editing
          .section-editing__container

            .section-editing__header
              h3.section-editing__header-title Редактирование работы

            .section-editing__content

              .left
                .section-editing__photo
                  p.photo__desc Перетащите или загрузите для загрузки изображения
                  label.photo__btn(for="upload")
                    button#upload(href="#").photo__btn-item.btn загрузить

              .right
                label.section-editing__label
                  h4.label__title Название
                  input.label__input(type="text" value="Дизайн сайта для авто салона Porsche")
                label.section-editing__label
                  h4.label__title Ссылка
                  input.label__input(type="text" value="https://www.porsche-pulkovo.ru")
                label.section-editing__label
                  h4.label__title Описание
                  textarea.label__textarea(type="text") Порше Центр Пулково - является официальным диллером марки Фольксваген и тд и тп
                label.section-editing__label
                  h4.label__title Добавление тэга
                  input.label__input(type="text" value="Jquery, Vue.js, HTML5")
                ul.section-editing__tags
                  li.section-editing__tags-item HTML
                    button.tags-cross
                  li.section-editing__tags-item CSS
                    button.tags-cross
                  li.section-editing__tags-item Javascript
                    button.tags-cross
                .section-editing__btns
                  label.btns-item
                    button.btns-item__cancel Отмена
                  label.btns-item
                    button.btns-item__save.btn сохранить

        ul.section-list
          li.section-list__item.section-list__item--btn
            label.item__label
              button.label__btn.btn +
              h6.label__title Добавить работу
          li.section-list__item
            .created
              .created__pic
                img.created__pic-item(src="../images/content/slider-1.png")
              .created__desc
                .created__desc-title 
                  h5 Сайт школы образования
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                label.created__desc-link
                  <link href="http://loftschool.ru"> http://loftschool.ru
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
          li.section-list__item
            .created
              .created__pic
                img.created__pic-item(src="../images/content/slider-2.png")
              .created__desc
                .created__desc-title 
                  h5 Сайт школы образования
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                label.created__desc-link
                  <link href="http://loftschool.ru"> http://loftschool.ru
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
          li.section-list__item
            .created
              .created__pic
                img.created__pic-item(src="../images/content/slider-3.png")
              .created__desc
                .created__desc-title 
                  h5 Сайт школы образования
                .created__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                label.created__desc-link
                  <link href="http://loftschool.ru"> http://loftschool.ru
              .created__footer
                label.created__footer-btn Править
                  button.created__footer-btn-item.created__footer-btn-item--pencil
                label.created__footer-btn Удалить
                  button.created__footer-btn-item.created__footer-btn-item--cross
    section.comments
      .container.comments__container
        .section__header
          h2.section__title Блок "Отзывы"
        .section-editing
          .section-editing__container

            .section-editing__header
              h3.section-editing__header-title Новый отзыв

            .section-editing__content

              .left
                .photo__preview
                  img.photo__preview-item(src="../images/icons/user.png")
                button(href="#").photo__btn-item Добавить фото

              .right
                .right__group
                  label.section-editing__label
                    h4.label__title Имя автора
                    input.label__input(type="text" value="Ковальчук Дмитрий")
                  label.section-editing__label
                    h4.label__title Титул автора
                    input.label__input(type="text" value="Основатель LoftSchool")
                label.section-editing__label
                  h4.label__title Отзыв
                  textarea.label__textarea(type="text") Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .section-editing__btns
                  label.btns-item
                    button.btns-item__cancel Отмена
                  label.btns-item
                    button.btns-item__save.btn сохранить

        ul.section-list
          li.section-list__item.section-list__item--btn
            label.item__label
              button.label__btn.btn +
              h6.label__title Добавить работу
          li.section-list__item
            .created
              .created__author
                .author-left
                  img.author__pic(src="../images/content/wouwa.jpg")
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
                  img.author__pic(src="../images/content/wouwa.jpg")
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
                  img.author__pic(src="../images/content/wouwa.jpg")
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
                  img.author__pic(src="../images/content/wouwa.jpg")
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
<style lang="postcss">
  .admin-panel{
    min-height: 100vh;
    display: grid;
    grid-template-rows: 80px 80px 1fr;
    background-color: #f7f9fe;
    padding-bottom: 31px;
  }

  .btn{
    background: linear-gradient(90deg, #1459e2, #3f35cb);
    text-align: center;
    color: white;
    text-transform: uppercase;
    transition: .3s;
  }
  //header
  .admin-header{
    color: #fff;
    background-color: #40405f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__container{
      display: flex;

      .owner-data{
        display: flex;
         &__photo{
           display: block;
           height: 45px;
           width: 45px;
           border-radius: 50%;
           overflow: hidden;
           margin: auto;
         }
         &__name{
           font-size: 18px;
           font-weight: 600;
           margin: auto 0 auto 19px;
         }
      }
      .admin-name{
        margin-left: 28px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__title{
          font-size: 14px;
          color: #a0a0b2;
        }
      }

      .admin-quit{
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__link{
          color: #a0a0b2;
          text-decoration: underline;
          cursor: pointer;
          transition: .3s;
          &:hover{
            color: #dc9322;
          }
        }
      }
    }
  }

  //tabs
  .tabs{
    background-color: #fff;
    width: 100%;

    &-list{
      display: flex;
      line-height: 80px;

      &__item{
        width: 124px;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        transition: .3s;
        text-align: center;
        &:hover{
          color: #dc9322;
          border-color: #dc9322;
        }
      }

      .active{
        color: #383bcf;
        border-color: #383bcf;
      }
    }
  }
  //section
  .section__header{
    display: flex;
    padding-top:60px;
    .section__title{
      font-weight: bold;
      font-size: 21px;
      color: #414c63;
    }
  }

  //about
  .about{
    display: block;
    padding: 0 2.5%;
    
    &__add{
      display: flex;
      margin-left: 59px;
      cursor: pointer;
      &:hover{
        .about__add-title{
          border-color: #383bcf;
        }
        .btn{
          color: #dc9322;
        }
      }
    
      &-btn{        
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: auto;
      }
      &-title{
        margin-left: 14px;
        font-weight: bold;
        color: #383bcf;
        border-bottom: 2px solid transparent;
        transition: .3s;
      }
    }
    &__content{
      margin-top: 60px;

      .content-list{
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
        justify-items: stretch;
        align-items: strech;
        ::-webkit-input-placeholder{
          color: #b8bcc5;
        }

        &__item{
          max-width: 557px;
          max-height: 420px;
          background-color: #fff;
          box-shadow: 0 0 7px rgba(0, 0, 0, 0.205);

          .skills-block{
            display: grid;
            grid-template-rows: 75px 250px 95px ;
            justify-items: center;

            &__head{
              width: 95%;
              border-bottom: 1px solid #dedee0;
              padding-top: 4%;
              display: flex;
            }

            &__name{
              padding: 0 10px;
              width: 300px;
              border: none;
              border-bottom: 1px solid black;
              font-size: 18px;
              line-height: 34px;
              height: 34px;
              font-weight: bold;
              color: #414c63;
              transition: .3s;
              &:focus{
                border-color: #383bcf;
              }
            }

            &__btn{
              margin-left: auto;
              margin-right: 19px;
              &-item{
                width: 20px;
                height: 20px;
                background: svg-load("tick.svg", fill="#00d70a", width="15px", height="15px") center center no-repeat;
                transition: .3s;
                &:hover{
                  background: svg-load("tick.svg", fill="green", width="15px", height="15px") center center no-repeat;
                }
              }
            }
            &__close{
              &-item{
                width: 20px;
                height: 20px;
                background: svg-load("remove.svg", fill="#bf2929", width="13px", height="13px") center center no-repeat;
                transition: .3s;
                &:hover{
                  background: svg-load("remove.svg", fill="red", width="13px", height="13px") center center no-repeat;
                }
              }
            }

            &__content{
              width: 95%;
              overflow: auto;
              .skills-list{
                display: flex;
                flex-direction: column;

                &__skill-item{
                  width: 100%;
                  padding-top: 3%;
                  
                  .skills-block__btn{
                    display: none;
                    margin: auto;
                  }
                  .skills-block__close-item{
                    display: none;
                    margin: auto;
                  }
                  

                  .skill-item{
                    display: grid;
                    grid-template-columns: 1fr 90px 30px 30px;
                    line-height: 32px;

                    input:read-only{
                      border: none;
                    }

                    .item-name{
                      width: 90%;
                      color: #414c63;
                      padding: 0 10px;
                      border: none;
                      border-bottom: 1px solid #000;
                      transition: .3s;
                      &:focus{
                        border-color: #383bcf;
                      }
                    }
                    .item-percent{
                      display: block;
                      position: relative;
                      &:after{
                        position: absolute;
                        display: block;
                        content: "%";
                        color: #414c63;
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 25%;
                      }

                      &__input{
                        line-height: 32px;
                      }
                    }
                    .item-edit{
                      display: block;
                      height: 30px;
                      width: 30px;
                      display: block;
                      background: svg-load("pencil.svg", fill="#a0a5b1", width="15px", height="15px") center center no-repeat;
                      transition: .3s;
                      &:hover{
                        background: svg-load("pencil.svg", fill="#414c63", width="15px", height="15px") center center no-repeat;
                      }
                    }
                    .item-delete{
                      display: block;
                      height: 30px;
                      width: 30px;
                      display: block;
                      background: svg-load("trash.svg", fill="#a0a5b1", width="15px", height="15px") center center no-repeat;
                      transition: .3s;
                      &:hover{
                        background: svg-load("trash.svg", fill="#414c63", width="15px", height="15px") center center no-repeat;
                      }
                    }
                    

                  }
                  .active{
                    .item-edit{
                      display: none;
                    }
                    .item-delete{
                      display: none;
                    }
                    .skills-block__btn{
                    display: flex;
                    }
                    .skills-block__close-item{
                      display: block;
                    }
                  }
                }
              }
            }

            &__footer{
              padding: 0 10px;
              width: 100%;
              display: flex;
              justify-content: flex-end;
              ::-webkit-input-placeholder{
                color: #b2b6bf;
              }

              .add-skills{
                display: flex;
                padding-bottom: 51px;
                
                .new-skill{
                  display: block;
                  border: none;
                  border-bottom: 1px solid #000;
                  font-size: 16px;
                  line-height: 34px;
                  width: 220px;
                  padding: 0 20px;
                  &:focus{
                    border-color: #383bcf;
                  }

                  &-percent{
                    margin-left: 10px;
                    display: block;
                    position: relative;
                    &:after{
                      position: absolute;
                      display: block;
                      content: "%";
                      width: 20px;
                      height: 20px;
                      line-height: 20px;
                      top: 50%;
                      transform: translateY(-50%);
                      right:0;
                    }

                    &__input{
                      height: 100%;
                      width: 67px;
                      padding: 0 10px;
                    }
                  }

                  &-btn{
                    margin-left: 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    &:hover{
                      .btn{
                        color: #dc9322;
                      }
                    }

                    &__add{
                      width: 40px;
                      height: 40px;
                      border-radius: 50%;
                      font-size: 30px;
                      font-weight: bold;
                      line-height: 31px;
                    }
                  }
                }
              }
              
            }
          }
        }
      }
    }
  }

  //works
  .works{
    display: block;
    padding: 0 2.5%;
  }

  .section{
    &-editing{
      margin-top: 62px;
      background-color: #fff;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.205);
      padding-bottom: 31px;
      &__container{
        padding: 0 2.5%;
      }
      &__header{
        line-height: 76px;
        border-bottom: 1px solid #dedee0;
        width: 100%;
        padding: 0 10px;
        &-title{
          font-size: 18px;
          font-weight: bold;
          colgr: #414c63;
        }
      }
      &__content{
        padding-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        .left{
        .section-editing__photo{
          width: 100%;
          height: 276px;
          background-color: #dee4ed;
          background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: grey; stroke-width: 2; stroke-dasharray: 8 8'/></svg>");
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .photo__desc{
            font-weight: bold;
            line-height: 32px;
            color: #8f98a8;
            max-width: 50%;
          }
          .photo__btn{
            margin-top: 27px;
            cursor: pointer;
            &:hover{
              .btn{
                color: #dc9322;
              }
            }
            &-item{
              height: 50px;
              width: 180px;
              border-radius: 25px;
              line-height: 50px;
              font-weight: bold;
            }
          }
        }
        }
        .right{
        .section-editing__label{
          display: block;
          margin-top: 30px;
          &:first-child{
            margin-top: unset;
          }
          .label__title{
            font-size: 16px;
            line-height: 30px;
            font-weight: bold;
            color: #c0c3cb;
          }
          .label__input{
            font-size: 16px;
            font-weight: bold;
            color: #414c63;
            width: 100%;
            border: none;
            border-bottom: 1px solid black;
            line-height: 60px;
            transition: .3s;
            &:focus{
              border-color: #383bcf;
            }
          }
          .label__textarea{
            line-height: 30px;
            margin-top: 10px;
            resize: none;
            width: 100%;
            height: 145px;
            padding: 20px;
            border-color: #c0c3cb;
            font-size: 16px;
            font-weight: bold;
            color: #414c63;
            overflow: auto;
            transition: .3s;
            &:focus{
              border-color: #383bcf;
            }
          }
        }
        .section-editing__tags{
          display: flex;
          margin-top: 21px;
          &-item{
            background-color: #f3f5f9;
            font-size: 13px;
            line-height: 30px;
            font-weight: 600;
            padding:0 10px 0 20px;
            margin-left: 10px;
            border-radius: 25px;
            color: #656d76;
            &:first-child{
              margin-left: 0;
            }
            .tags-cross{
              display: inline-block;
              height: 12px;
              width: 12px;
              margin-left: 8px;
              background: svg-load("remove.svg", fill="#414c63", width="10px", height="10px") center center no-repeat;
            }
          }
        }
        .section-editing__btns{
          margin-top: 40px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          .btns-item{
            cursor: pointer;
            margin-left: 20px;
            &__cancel{
              line-height: 56px;
              padding: 0 40px;
              border-radius: 25px;
              font-size: 16px;
              font-weight: bold;
              color: #1459e2;
              border: 2px solid transparent;
              transition: .3s;
              &:hover{
                border-color: #1459e2;
              }
            }
            &__save{
              line-height: 60px;
              padding: 0 40px;
              border-radius: 25px;
              font-size: 16px;
              font-weight: bold;
              transition: .3s;
              &:hover{
                color: orange;
              }
            }
          }
        }
        }
      }
    }
    &-list{
      margin-top: 32px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 28px;
      &__item{
        height: 556px;
        box-shadow: 0 0 0.4375rem rgba(0,0,0,.205);
        &--btn{
          background: linear-gradient(90deg, #1459e2, #3f35cb);
          box-shadow: none;
        }
        .item__label{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          cursor: pointer;
          &:hover{
            .label__btn{
              border-color: #dc9322;
              color: #dc9322;
            }
            .label__title{
              color: #dc9322;
            }
          }
          .label__btn{
            background: unset;
            border: 2px solid #fff;
            border-radius: 50%;
            font-size: 72px;
            width: 150px;
            height: 150px;
            transition: .3s;
          }
          .label__title{
            margin-top: 30px;
            color: #fff;
            font-weight: bold;
            font-size: 18px;
            line-height: 30px;
            padding: 0 27%;
            text-align: center;
            transition: .3s;
          }
        }
        .created{
          display: grid;
          grid-template-rows: 190px 1fr 100px;
          height: 100%;
          &__pic{
            position: relative;
            &-item{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          &__desc{
            padding: 0 5%;
            &-title{
              margin-top: 30px;
              h5{
                font-size: 18px;
                font-weight: bold;
                line-height: 30px;
              }
            }
            &-text{
              margin-top: 10px;
              p{
                font-size: 16px;
                font-weight: bold;
                color: #afb4be;
                line-height: 30px;
              }
            }
            &-link{
              display: block;
              margin-top: 30px;
              cursor: pointer;
              font-size: 16px;
              font-weight: bold;
              color: #1459e2;
            }
          }
          &__footer{
            margin: auto 0;
            padding: 0 5%;
            display: flex;
            justify-content: space-between;
            &-btn{
              display: block;
              font-size: 16px;
              font-weight: bold;
              color: #a0a5b1;
              cursor: pointer;
              &:hover{
                .created__footer-btn-item--pencil{
                  background: svg-load("pencil.svg", fill="#1459e2", width="15px", height="15px") center center no-repeat;
                }
                .created__footer-btn-item--cross{
                  background: svg-load("remove.svg", fill="red", width="15px", height="15px") center center no-repeat;
                }
              }
              &-item{
                margin-left: 15px;
                display: inline-block;
                height: 20px;
                width: 20px;
                transition: .3s;
                &--pencil{
                  background: svg-load("pencil.svg", fill="#383bcf", width="15px", height="15px") center center no-repeat;
                }
                &--cross{
                  background: svg-load("remove.svg", fill="#c92e2e", width="15px", height="15px") center center no-repeat;
                }
              }
            }
          }
        }
      }
    }
  }

  //comments
  .comments{
    display: block;
    padding: 0 2.5%;

    .section-editing__content{
      grid-template-columns: 210px 1fr 110px;
    }

    .left{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .photo__preview{
      height: 200px;
      width: 200px;
      background-color: #dee4ed;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-item{
        display: block;
        margin: auto;
      }
    }

    .photo__btn-item{
      margin-top: 25px;
      font-size: 16px;
      font-weight: bold;
      color: #1459e2;
    }

    .right__group{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;

      .section-editing__label{
        margin-top: 0;
      }
    }

    .label__textarea{
      height: 115px;
    }

    .section-list__item{
      height: 380px;
      .created{
        grid-template-rows: 110px 1fr 90px;
      }
    }

    .created{
      padding: 0 5%;
    }

    .created__author{
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #dedee0;

      .author-left{
        margin: auto 0;
        .author__pic{
          display: block;
          height: 50px;
          width: 50px;
          object-fit: cover;
          object-position: top;
          border-radius: 50%;
        }
      }

      .author-right{
        margin: auto 0;
        .author__name{
          font-size: 18px;
          font-weight: bold;
        }
        .author__position{
          font-size: 16px;
          font-weight: bold;
          color: #a0a5b1;
        }
      }
    }
    .created__desc{
      padding: 0 2.5%;
    }
    .created__footer{
      padding: 0 2.5%;
    }
  }



  //mixins
  @mixin desktopHd() {
  @media screen and (max-width: $bp-desktop-hd) {
    @content;
  }
  }

  @mixin desktop() {
    @media screen and (max-width: $bp-desktop) {
      @content;
    }
  }

  @mixin tablets() {
    @media screen and (max-width: $bp-tablets) {
      @content;
    }
  }

  @mixin tabletsSmall() {
    @media screen and (max-width: $bp-tablets-small) {
      @content;
    }
  }

  @mixin phones() {
    @media screen and (max-width: $bp-phones) {
      @content;
    }
  }

  @mixin phonesSmall() {
    @media screen and (max-width: $bp-phones-samll) {
      @content;
    }
  }

  //width
  $bp-desktop-hd: 1800px;
  $bp-desktop: 1200px;
  $bp-tablets: 768px;
  $bp-tablets-small: 580px;
  $bp-phones: 480px;
  $bp-phones-samll: 370px;

  //colors
  

  //base
  html {
    @include desktop {
      font-size: 15px;
    }
    @include tablets {
      font-size: 14px;
    }
  }
  body,
  html {
    height: 100%;
  }

  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-color;
    margin: 0;
  }

  .wrapper {
    overflow: hidden;
    min-height: 100%;
    position: relative;
    background-color: #fff;
  }

  .maincontent{
    position: relative;
  }

  .container {
    margin: 0 auto;
    max-width: 1480px;
    width: 95%;
    // width: 1490px;

    @include tablets {
      width: 90%;
    }

    @include phones {
      width: 85%;
    }
  }

  .fullscreen-section {
    height: 100vh;
    min-height: 650px;
  }

  button {
    border: 0;
    cursor: pointer;
    outline: none;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button[type="button"] {
    cursor: pointer;
    background-color: transparent;
    padding: 0;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .visuallyHidden{
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  input:focus{
    outline-offset: 0;
    outline: none;
  }
  textarea:focus{
    outline-offset: 0;
    outline: none;
  }

  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type="button"],[type="reset"],[type="submit"],button{-webkit-appearance:button}[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
</style>