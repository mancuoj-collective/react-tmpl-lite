import { CodeBlock } from './code-block'

export function Home() {
  return (
    <div className="font-sans antialiased">
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 dark:bg-gray-900 dark:text-white">
        <CodeBlock code="npx degit mancuoj-collective/react-mini-tmpl app" />
        <div className="flex items-center gap-2 text-xl">
          <a href="https://github.com/mancuoj" className="i-lucide-github" />
          <a href="https://mancuoj.me" className="i-lucide-smile" />
        </div>
      </div>
    </div>
  )
}
