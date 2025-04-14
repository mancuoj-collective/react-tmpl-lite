import { ThemeProvider } from 'next-themes'
import { BrowserRouter } from 'react-router'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <ThemeProvider storageKey="react-tmpl-lite-theme" attribute="class">
        {children}
      </ThemeProvider>
    </BrowserRouter>
  )
}
