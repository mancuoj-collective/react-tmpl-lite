export function Home() {
  return (
    <div className="font-sans antialiased">
      <div className="flex min-h-dvh flex-col items-center justify-center gap-6">
        <h1 className="font-mono text-2xl font-bold">npx degit mancuoj-collective/react-mini-tmpl app</h1>
        <div className="flex items-center gap-2">
          <a href="https://github.com/mancuoj-collective/react-mini-tmpl" className="i-lucide-github text-2xl" />
          <a href="https://mancuoj.me" className="i-lucide-smile text-2xl" />
        </div>
      </div>
    </div>
  )
}
