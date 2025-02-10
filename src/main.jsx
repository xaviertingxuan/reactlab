import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { Calculator } from './components/Calculator'
// import App from './App.jsx'
// import NotionL from './NotionL/NotionL.jsx'
// import { Movies } from './moviesdb/Movies'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <NotionL /> */}
    {/* <Movies /> */}
    <Calculator />
  </StrictMode>,
)
