import { Button } from '@/components/ui/button'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { AppProvider } from './provider'
import { PropsWithChildren } from 'react'

export function App() {
  return (
    <AppProvider>
      <div className="flex min-h-svh items-center justify-center">
        <div className="space-x-2">
          <IconButtonLink href="https://github.com/mancuoj-collective/react-tmpl-lite">
            <span className="i-carbon-logo-github" />
          </IconButtonLink>
          <IconButtonLink href="https://mancuoj.me">
            <span className="i-carbon-chat-bot" />
          </IconButtonLink>
          <IconButtonLink href="https://blog.mancuoj.me">
            <span className="i-carbon-blog" />
          </IconButtonLink>
          <DarkModeToggle />
        </div>
      </div>
    </AppProvider>
  )
}

function IconButtonLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </Button>
  )
}
