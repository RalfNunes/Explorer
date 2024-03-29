import state from "./state.js";
import * as el from './elements.js';
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";


export function countdown(){
  if(!state.inRunning){
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    reset()
    kitchenTimer.play()
    return
  }


  updateDisplay(minutes, seconds)
  // é um atributo que espera executar uma função depois de um tempo, mas em milisegundos
  // também como o efeito recurção, callback function
  setTimeout(() => countdown(), 1000)
}
export function updateDisplay(minutes, seconds) {
  // vai observar se condição é null "minutes", vamos pegar a outra condição no caso "state.minutes"
  // nullish coalesing operator
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}