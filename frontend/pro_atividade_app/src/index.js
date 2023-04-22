import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/minty/bootstrap.min.css'
// import 'bootswatch/dist/sketchy/bootstrap.min.css'
import App from './App'
import Menu from './components/Menu'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Menu />

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
