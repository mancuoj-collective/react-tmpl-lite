import { FC } from 'react'

interface AppProps {
  title: string
}

const App: FC<AppProps> = ({ title }) => {
  return <h1>Hello {title}</h1>
}

export default App
