import { Button } from '@/components/ui/button'
import { Layout } from './layout'
import { CopyInput } from '@/components/copy-input'
import { RiArticleLine, RiChatSmileAiLine, RiGithubLine } from '@remixicon/react'

export function App() {
  return (
    <Layout>
      <div className="flex min-h-svh flex-col items-center justify-center gap-5">
        <CopyInput className="w-[30rem]" defaultValue="npx degit mancuoj-collective/react-tmpl-lite app" />
        <div className="flex gap-1.5">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/mancuoj-collective/react-tmpl-lite" target="_blank" rel="noreferrer">
              <RiGithubLine />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://blog.mancuoj.me" target="_blank" rel="noreferrer">
              <RiArticleLine />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://mancuoj.me" target="_blank" rel="noreferrer">
              <RiChatSmileAiLine />
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
