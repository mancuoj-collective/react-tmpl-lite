import { FC } from 'react'
import './app.css'

interface AppProps {
  title: string
}

const App: FC<AppProps> = ({ title }) => {
  return (
    <div className="app">
      <h1 className='title'>Hello {title}</h1>
    </div>
  )
}

export default App
