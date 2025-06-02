import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//react-router-dom Serve para ligar uma página a outra, como um roteador

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App /> 
  </StrictMode>,
  </BrowserRouter>
)
