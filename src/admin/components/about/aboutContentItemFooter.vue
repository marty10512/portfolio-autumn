<template lang="pug">
  .skills-block__footer
    form.add-skills
      input.new-skill(type="text" placeholder="Новый навык")
      .new-skill-percent
        input.new-skill-percent__input.new-skill(type="text" value="100")
      label.new-skill-btn(for="submit")
        input.visuallyHidden(type="submit")
        button(type="button").new-skill-btn__add.btn +
</template>