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
        .about__header
          h2.about__title Блок "Обо мне"
          label.about__add(for="add-btn")
            button(type="button").about__add-btn.add#add-btn
            h4.about__add-title Добавить группу
        .about__content
          ul.content-list
            li.content-list__item
              form.skills-block
                .skills-block__head
                  label.skills-block__name(for="skills-group")
                    input.skills-block__name-input#skills-group(placeholder="Название новой группы")
                  label.skills-block__btn(for="submit")
                    input.visuallyHidden(type="submit")
                    button.skills-block__btn-item(href="#")
                  label.skills-block__close(for="close")
                    input.visuallyHidden#close
                    button(type="button").skills-block__close-item(href="#")
                .skills-block__content
                .skills-block__footer
                  form.add-skills
                    label.new-skill(for="skill-name")
                      input.new-skill__input#skill-name(placeholder="Новый навык")
                    label.new-skill-percent(for="skill-percent")
                      input.new-skill-percent__input.new-skill__input#skill-percent(value="100")
                    label.new-skill-btn(for="submit")
                      input.visuallyHidden(type="submit")
                      button(type="button").new-skill-btn__add.add

</template>
<style lang="postcss">
  .admin-panel{
    min-height: 100vh;
    display: grid;
    grid-template-rows: 80px 80px 1fr;
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

  //about
  .about{
    background-color: #f7f9fe;
    display: block;

    &__header{
      display: flex;
      padding-top:60px;
    }
    &__title{
      font-weight: bold;
      font-size: 21px;
      color: #414c63;
    }
    &__add{
      display: flex;
      margin-left: 59px;
      cursor: pointer;
      &:hover{
        .about__add-title{
        border-color: #383bcf;
      }}
    
      &-btn{        
        width: 20px;
        height: 20px;
        &:after{
          font-size: 16px;
          height: 19Px;
        }
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

        &__item{
          max-width: 557px;
          max-height: 420px;
          background-color: #fff;

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
              ::-webkit-input-placeholder{
                color: #b2b6bf;
              }
              &-input{
                width: 300px;
                border: none;
                border-bottom: 1px solid black;
                font-size: 18px;
                line-height: 34px;
                font-weight: bold;
                color: #414c63;
              }
            }

            &__btn{
              margin-left: auto;
              margin-right: 19px;
              &-item{
                width: 20px;
                height: 20px;
                background: url('../images/icons/tick.png') center center no-repeat;
              }
            }
            &__close{
              &-item{
                width: 20px;
                height: 20px;
                background: url('../images/icons/cross.png') center center no-repeat;
              }
            }

            &__content{

            }

            &__footer{
              padding: 0 10px;
              ::-webkit-input-placeholder{
                color: #b2b6bf;
              }

              .add-skills{
                
                .new-skill{
                  &__input{
                    border: none;
                    border-bottom: 1px solid #000;
                    font-size: 16px;
                    line-height: 34px;
                    width: 220px;
                    padding: 0 20px;
                  }

                  &-percent{
                    margin-left: 10px;
                    position: relative;
                    &:after{
                      position: absolute;
                      display: block;
                      content: "%";
                      width: 20px;
                      height: 20px;
                      top: 0;
                      right:0;
                    }

                    &__input{
                      width: 67px;
                      padding: 0 10px;
                      
                    }
                  }

                  &-btn{
                    margin-left: 30px;
                    width: 100%;
                    height: 100%;

                    &__add{
                      width: 40px;
                      height: 40px;
                    }
                  }
                }
              }
              
            }
          }
        }
      }
    }
    .add{
      position: relative;
      border-radius: 50%;
      background: linear-gradient(90deg, #1955e0, #3f35cb);
      margin: auto;
      &:after{
        position: absolute;
        display: block;
        content: "+";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
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

  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type="button"],[type="reset"],[type="submit"],button{-webkit-appearance:button}[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
</style>