<template lang="pug">
  li.content-list__item
    .skills-block
      aboutContentItemHead
      aboutContentItemSkills
      aboutContentItemFooter
</template>

<script>
import aboutContentItemHead from "./aboutContentItemHead"
import aboutContentItemFooter from "./aboutContentItemFooter"
import aboutContentItemSkills from "./aboutContentItemSkills"
export default {
  components: {
    aboutContentItemHead, aboutContentItemFooter, aboutContentItemSkills
  }
}
</script>