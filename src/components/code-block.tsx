import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

export function CodeBlock({ code }: { code: string }) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
  }

  return (
    <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-3 px-5 text-xl dark:bg-gray-800 dark:text-white">
      <div className="font-mono">{code}</div>
      <button
        title="Copy Code"
        onClick={handleCopy}
        className={cn(`${hasCopied ? 'i-lucide-clipboard-check' : 'i-lucide-clipboard'}`)}
      />
    </div>
  )
}
