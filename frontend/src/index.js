import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import './index.css'


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app-root')  // Find this element in DOM template and inject our app
)