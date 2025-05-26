import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <button className="btn btn-primary">
        React
      </button>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
