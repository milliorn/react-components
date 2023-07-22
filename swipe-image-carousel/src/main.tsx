import React from 'react'
import ReactDOM from 'react-dom/client'

import 'semantic-ui-css/semantic.min.css'

import "swiper/css"
import "swiper/css/navigation"

import App from './App.tsx'

ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
