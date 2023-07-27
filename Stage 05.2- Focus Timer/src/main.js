import './toogle-dark.js'
import './toogle-music.js'
// o "*" significa tudo que esta sendo exportado, 
// "as" é para renomear ou agrupar com o nome que quiser;
// exportado "*" agrupar "as" em "nomeQualquer" from "arquivo"
import * as FocusTimer from './focustimer/index.js'

FocusTimer.start(0,5)