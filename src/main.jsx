import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HandleTheme from './assets/components/Pages/HandleTheme.jsx'

createRoot(document.getElementById('root')).render(
  <HandleTheme>
    <App />
  </HandleTheme>
)
