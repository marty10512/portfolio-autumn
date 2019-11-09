<template lang="pug">
  .admin-panel
    headerAdmin
    tabsAdmin
    aboutAdmin
    worksAdmin
    commentsAdmin
</template>

<script>
import style from './styles/admin.module.pcss'
import headerAdmin from './components/headerAdmin.vue'
import tabsAdmin from './components/tabsAdmin.vue'
import aboutAdmin from './components/aboutAdmin.vue'
import worksAdmin from './components/worksAdmin.vue'
import commentsAdmin from './components/commentsAdmin.vue'

export default {
  name: 'app',
  components: {
    headerAdmin, tabsAdmin, aboutAdmin, worksAdmin, commentsAdmin
  },
  data() {
    return {

    }
  }
}
</script>