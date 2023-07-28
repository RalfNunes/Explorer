import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
  state.inRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset() {
  state.inRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function set() {
  
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
}