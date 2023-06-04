import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './Footer.jsx'

import './CSS/reset.css'
import './CSS/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <App />
    </main>
    <Footer />
  </React.StrictMode>,
)
