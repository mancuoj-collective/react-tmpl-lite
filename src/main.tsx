import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <a
        className="btn btn-primary"
        href="https://github.com/mancuoj-collective/react-tmpl-lite"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
