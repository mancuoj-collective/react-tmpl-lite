export function Home() {
  return (
    <div className="font-sans antialiased">
      <div className="flex min-h-dvh flex-col items-center justify-center gap-5">
        <h1 className="font-mono text-2xl font-bold">npx degit mancuoj-collective/react-mini-tmpl app</h1>
        <div className="flex items-center gap-2 text-2xl">
          <a href="https://github.com/mancuoj" className="i-lucide-github" />
          <a href="https://mancuoj.me" className="i-lucide-smile" />
        </div>
      </div>
    </div>
  )
}
