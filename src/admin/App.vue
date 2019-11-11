<template lang="pug">
  .admin-panel
    headerAdmin
    tabsAdmin
    router-view
</template>

<script>
import style from './styles/admin.module.pcss'
import headerAdmin from './components/headerAdmin.vue'
import tabsAdmin from './components/tabsAdmin.vue'
import aboutAdmin from './components/pages/aboutAdmin.vue'
import worksAdmin from './components/pages/worksAdmin.vue'
import commentsAdmin from './components/pages/commentsAdmin.vue'

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