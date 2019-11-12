<template lang="pug">
  li.skills-list__skill-item
    form.skill-item
      input.item-name(value="Git" readonly)
      .item-percent
        input.item-percent__input.item-name(value="100" readonly)
      button(type="button" href="#").item-edit
      button(type="button" href="#").item-delete
</template>