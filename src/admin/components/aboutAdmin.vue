<template lang="pug">
  section.about 
      .container.about__container
        .section__header
          h2.section__title Блок "Обо мне"
          label.about__add(for="add-btn")
            button(type="button").about__add-btn.btn
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
                  input.skills-block__name(placeholder="Название новой группы" value="Workflow" disabled)
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
                  input.skills-block__name(placeholder="Название новой группы" value="Workflow" disabled)
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
</template>

<script>
import style from '../styles/aboutAdmin.module.pcss'
export default {
  components: {

  }
}
</script>