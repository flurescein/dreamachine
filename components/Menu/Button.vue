<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  $default-background: linear-gradient(67.38deg, #f0ad36 0%, #f08c36 100%);
  $darken-background: linear-gradient(67.38deg, #eda11a 0%, #ed7c1a 100%);

  padding: 4px 22px;
  background: $default-background;
  color: white;
  border: none;
  border-radius: 10px;
  outline-color: #f0ad36;
  -moz-outline-radius: 10px;

  font-family: 'Fira Sans';
  font-size: 32px;
  cursor: pointer;

  &:hover {
    background: $darken-background;
  }

  &:active {
    background: $default-background;
  }
}
</style>
