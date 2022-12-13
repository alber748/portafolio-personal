import './style.css'
import { setupCounter } from './counter.js'
import { AppPortafolio } from './src/portafolio/portafolio'

document.querySelector('#app').innerHTML = AppPortafolio();

setupCounter(document.querySelector('#counter'))
