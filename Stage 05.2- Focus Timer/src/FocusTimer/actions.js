import state from './state.js'

export function toggleRunning() {
  state.inRunning = document.documentElement.classList.toggle('running')
}

export function reset() {
  state.inRunning = false
  document.documentElement.classList.remove('running')
}

export function set() {
  
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
}