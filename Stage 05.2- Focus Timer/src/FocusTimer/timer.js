import state from "./state.js";
import * as el from './elements.js';

export function updateDisplay(minutes, seconds) {
  // vai observar se condição é null "minutes", vamos pegar a outra condição no caso "state.minutes"
  // nullish coalesing operator
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.minutes

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}