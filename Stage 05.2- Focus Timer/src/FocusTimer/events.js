import { controls } from "./elements.js";
// import { light } from "./elements.js";

export function registerControls(){
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (action === undefined) {
      return
    }
    console.log(action)
  })
  // light.addEventListener('click', (event) => {
  //   console.log(event.target)
  // })
}