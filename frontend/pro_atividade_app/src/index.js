import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/minty/bootstrap.min.css'
import App from './App'
import Menu from './components/Menu'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Menu />

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
)
