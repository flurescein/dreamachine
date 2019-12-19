<template>
  <label>
    <input type="checkbox" :checked="value" @input="$emit('input', !value)" />
    <svg
      class="checkbox-box"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="10" fill="#ECECEC" />
      <image xlink:href="~assets/images/check-mark.svg" />
    </svg>
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  font-family: 'Fira Sans';
  font-size: 32px;
  user-select: none;
  cursor: pointer;
}

input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:not(:checked) + .checkbox-box image {
    display: none;
  }
}

.checkbox-box {
  margin-right: 10px;
}
</style>
