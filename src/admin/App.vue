<template lang="pug">
  .admin-panel
    appHeader
    appTabs
    router-view
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"
import style from './main.pcss'
import appHeader from './components/appHeader.vue'
import appTabs from './components/appTabs.vue'
import about from './components/about/about.vue'
import works from './components/works/works.vue'
import comments from './components/comments/comments.vue'
import login from './components/login/login.vue'

export default {
  name: 'app',
  components: {
    appHeader, appTabs, about, works, comments, login
  },
  data() {
    return {

    }
  }
}
</script>