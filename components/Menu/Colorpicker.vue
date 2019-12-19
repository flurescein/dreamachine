<template>
  <label>
    <input
      type="color"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div class="color-box" :style="{ backgroundColor: value }" />
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$standard-border-color: #000000;
$hover-border-color: #f08c36;

input[type='color'] {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:focus + .color-box {
    border-color: $hover-border-color;
    transition: border-color 0s;
  }
}

.color-box {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 2px solid $standard-border-color;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.5s;

  &:hover {
    border-color: $hover-border-color;
    transition: border-color 0s;
  }

  &:active {
    border-color: $standard-border-color;
  }
}
</style>
