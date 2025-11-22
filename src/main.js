import './style.css'
import App from './App'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('app')).render(
  createElement(App)
)
