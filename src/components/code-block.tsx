import { useEffect, useState } from 'react'

export function CodeBlock({ code }: { code: string }) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasCopied(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [hasCopied])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
  }

  return (
    <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3 dark:bg-gray-800 dark:text-white">
      <div className="font-mono">{code}</div>
      {hasCopied ? (
        <button className="i-lucide-clipboard-check" />
      ) : (
        <button title="Copy Code" onClick={handleCopy} className="i-lucide-clipboard" />
      )}
    </div>
  )
}
