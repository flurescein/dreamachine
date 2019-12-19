<template>
  <menu>
    <slot name="outer" />
    <form @submit.prevent="$emit('menu-submit')">
      <slot />
    </form>
  </menu>
</template>

<style lang="scss" scoped>
menu {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

form {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 20px 0;
  }
}

@media screen and (orientation: landscape), screen and (min-width: 501px) {
  menu {
    display: flex;
    justify-content: center;
    align-items: center;

    background: url('~assets/images/machine-figures.svg'),
      linear-gradient(90deg, #203a43 0%, #2c5364 50.04%, #203a43 100%);
    background-size: auto 100%;
    background-position: center;
  }

  form {
    width: fit-content;
    border-radius: 30px;
    padding: 30px 80px;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    overflow: auto;
  }
}

@media screen and (orientation: portrait) and (max-width: 500px) {
  form {
    justify-content: center;
    width: 100%;
    height: 100%;
    min-width: 200px;
  }
}
</style>
