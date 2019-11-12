<template lang="pug">
  .admin-panel
    appHeader
    appTabs
    router-view
</template>

<script>
import style from './main.pcss'
import appHeader from './components/appHeader.vue'
import appTabs from './components/appTabs.vue'
import about from './components/about/about.vue'
import works from './components/works/works.vue'
import comments from './components/comments/comments.vue'

export default {
  name: 'app',
  components: {
    appHeader, appTabs, about, works, comments
  },
  data() {
    return {

    }
  }
}
</script>