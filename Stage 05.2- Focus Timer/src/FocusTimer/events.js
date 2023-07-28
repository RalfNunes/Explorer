import { controls } from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js';
import state from './state.js';

// import { light } from "./elements.js";

export function registerControls(){
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    // esta verificando se é uma função
    if(typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
  // light.addEventListener('click', (event) => {
  //   console.log(event.target)
  // })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })
  // expressão regular 
  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    //isso é um tenario, 
    time = time > 60 ? 60 : time
    
    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}