import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const NewReact = React.createElement(
  "a",
  "href = {https://google.com} target = _blank",
  "Click here to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  NewReact
)
