<template lang="pug">
  form.skills-block__head(@submit.prevent="addNewCategory")
    input.skills-block__name(
      type="text"
      placeholder="Название новой группы" 
      v-model="title"
      )
    input.skills-block__btn(type="submit" value="")
    button(type="button" href="#").skills-block__close-item
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    title: ""
  }),
  methods: {
    ...mapActions("categories", ["addCategory"]),
    async addNewCategory() {
      try{
        this.addCategory(this.title);
      } catch (error) {
        alert(error.message);
      }
      
    }
  }
}
</script>