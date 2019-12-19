<template>
  <section
    :style="{ backgroundColor: color }"
    @click="$emit('screen-click')"
  ></section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
}
</style>
