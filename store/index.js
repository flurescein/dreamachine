import createPersistedState from 'vuex-persistedstate'
import { getField, updateField } from 'vuex-map-fields'

export const plugins = [
  createPersistedState({ paths: ['frequency', 'colors'] })
]

export const state = () => ({
  frequency: 10,
  colors: ['#ffffff', '#000000'],
  currentColorIndex: 0,
  isMachineStarted: false,
  intervalId: null
})

export const getters = {
  getField,
  currentColor: ({ colors, currentColorIndex }) => colors[currentColorIndex],
  flickeringPeriod: ({ frequency }) => 1000 / frequency
}

export const mutations = {
  updateField,
  switchToNextColor(state) {
    if (state.currentColorIndex + 1 < state.colors.length) {
      state.currentColorIndex++
    } else {
      state.currentColorIndex = 0
    }
  },
  setColorWithIndex(state, { index, newColor }) {
    state.colors.splice(index, 1, newColor)
  }
}

export const actions = {
  switchMachineState({
    commit,
    state: { isMachineStarted, intervalId },
    getters: { flickeringPeriod }
  }) {
    if (isMachineStarted) {
      clearInterval(intervalId)
    } else {
      const intervalId = setInterval(() => {
        commit('switchToNextColor')
      }, flickeringPeriod)
      commit('updateField', { path: 'intervalId', value: intervalId })
    }

    commit('updateField', {
      path: 'isMachineStarted',
      value: !isMachineStarted
    })
  }
}
