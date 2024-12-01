import { Button } from '@/components/ui/button'
import { Layout } from './layout'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

export function App() {
  return (
    <Layout>
      <div className="flex min-h-svh flex-col items-center justify-center gap-5">
        <div className="flex gap-1.5">
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/mancuoj-collective/react-tmpl-lite"
              target="_blank"
              rel="noreferrer"
            >
              <span className="i-carbon-logo-github size-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://mancuoj.me" target="_blank" rel="noreferrer">
              <span className="i-carbon-chat-bot size-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://blog.mancuoj.me" target="_blank" rel="noreferrer">
              <span className="i-carbon-blog size-4" />
            </a>
          </Button>
          <DarkModeToggle />
        </div>
      </div>
    </Layout>
  )
}
