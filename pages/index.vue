<template>
  <Fullscreen :fullscreen.sync="isFullscreen">
    <main>
      <Screen
        :color="currentColor"
        @screen-click="switchMachineState"
        style="z-index: 0"
      />
      <Menu
        v-show="!isMachineStarted"
        @menu-submit="switchMachineState"
        style="z-index: 1"
      >
        <MenuInput v-model.number="frequency">Hz</MenuInput>
        <fieldset class="colors-block">
          <MenuColorpicker
            v-for="(color, index) in colors"
            :value="color"
            @input="setColorWithIndex({ index, newColor: $event })"
            :key="index"
          />
        </fieldset>
        <MenuCheckbox v-model="isFullscreen">Fullscreen</MenuCheckbox>
        <MenuButton>Start</MenuButton>
      </Menu>
    </main>
  </Fullscreen>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

import Fullscreen from 'vue-fullscreen/src/component.vue'

import Screen from '~/components/Screen'
import Menu from '~/components/Menu'
import MenuInput from '~/components/Menu/Input'
import MenuColorpicker from '~/components/Menu/Colorpicker'
import MenuCheckbox from '~/components/Menu/Checkbox'
import MenuButton from '~/components/Menu/Button'

export default {
  components: {
    Fullscreen,
    Screen,
    Menu,
    MenuButton,
    MenuColorpicker,
    MenuCheckbox,
    MenuInput
  },
  data: () => ({
    isFullscreen: false
  }),
  computed: {
    ...mapState(['isMachineStarted', 'colors']),
    ...mapGetters(['currentColor']),
    ...mapFields(['frequency'])
  },
  methods: {
    ...mapMutations(['setColorWithIndex']),
    ...mapActions(['switchMachineState'])
  }
}
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
  margin: 0;
  height: 100%;
}
</style>

<style lang="scss" scoped>
main > * {
  position: absolute;
}

.colors-block {
  padding: 0;
  border: none;

  & > * {
    margin: 0 10px;
  }
}
</style>
