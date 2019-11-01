<template lang="pug">
  .error-tooltip {{errorText}}
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: "Ошибка"
    }
  }
};
</script>

<style lang="postcss" scoped>
.error-tooltip {
  background: #cd1515;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  white-space: nowrap;
  position: relative;
  z-index: 20;
  &::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: #cd1515;
    border-bottom-width: 7px;
    bottom: 99%;
    z-index: 25;
  }
}
</style>