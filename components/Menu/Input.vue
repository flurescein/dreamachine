<template>
  <label>
    <input
      type="number"
      placeholder="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    /><slot />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='number'] {
  width: 100px;
  height: 100px;
  background: #ececec;
  border: none;
  border-radius: 20px;
  margin-right: 10px;

  font-family: 'Fira Sans';
  font-size: 72px;
  text-align: center;

  outline-color: #f08c36;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
}

label {
  font-family: 'Fira Sans';
  font-size: 72px;
}
</style>
