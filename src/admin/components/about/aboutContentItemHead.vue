<template lang="pug">
  .skills-block__head
    input.skills-block__name(placeholder="Название новой группы" value="Workflow" disabled)
    label.skills-block__btn(for="submit")
      input.visuallyHidden(type="submit")
      button(type="button" href="#").skills-block__btn-item
    button(type="button" href="#").skills-block__close-item
</template>