import React from 'react'
import { render } from 'react-dom'

// Initialize @jeraoss/jera-design-ui
import '@jeraoss/jera-design-ui/init'
import '@jeraoss/jera-design-ui/init.css'

// For async/await
import 'regenerator-runtime/runtime'
import './assets/sass/style.scss'
import './assets/css/icons.css'
import { App } from './App'
import './translations/i18n'

// import * as WSO2Envs from './context/WSO2AuthContext/WSO2Envs'

// Execute this function before rendering.
// Envs.init()
// WSO2Envs.init()

render(<App />, document.getElementById('root'))
